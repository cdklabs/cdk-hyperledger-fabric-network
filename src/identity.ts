// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as customresources from 'aws-cdk-lib/custom-resources';
import * as constructs from 'constructs';

import * as network from './network';
import * as utilities from './utilities';

/**
 * Creates custom resources to enroll admin and register user
 * identities with the CA using the fabric-ca-client SDK.
 * Admin identity is enrolled by default. User identities are
 * registered and enrolled, if provided.
 */
export class HyperledgerFabricIdentity extends constructs.Construct {

  /**
   * Role for custom resource lambda to assume
   */
  public static customRole: iam.Role;

  /**
   * Custom provider to register user identity
   */
  public static userProvider: customresources.Provider;

  /**
   * Custom provider to enroll admin identity
   */
  public readonly adminProvider: customresources.Provider;


  constructor(scope: network.HyperledgerFabricNetwork, id: string) {
    super(scope, id);

    // Collect metadata on the stack
    const partition = cdk.Stack.of(this).partition;
    const region = cdk.Stack.of(this).region;

    // Retrieve the S3 Bucket and key that contains the TLS cert file
    const tlsBucketData = utilities.getTlsBucket(region);

    const adminPasswordArn = scope.adminPasswordSecret.secretArn;
    const adminPrivateKeyArn = scope.adminPrivateKeySecret.secretArn;
    const adminSignedCertArn = scope.adminSignedCertSecret.secretArn;
    const caEndpoint = scope.caEndpoint;
    const client = scope.client;
    const memberName = scope.memberName;

    // Role for the custom resource lambda functions
    const customResourceRole = new iam.Role(this, 'CustomResourceRole', { assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com') });

    // Policies for the custom resource lambda to enroll and register users
    customResourceRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'));
    customResourceRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaVPCAccessExecutionRole'));
    customResourceRole.addToPolicy( new iam.PolicyStatement({
      actions: ['s3:GetObject', 'secretsmanager:CreateSecret', 'secretsmanager:GetSecretValue', 'secretsmanager:PutSecretValue'],
      resources: [
        `arn:${partition}:s3:::${tlsBucketData.bucketName}/*`,
        adminPasswordArn,
        adminPrivateKeyArn,
        adminSignedCertArn,
      ],
    }));

    // Lambda function to enroll the admin and import credentials to secrets manager
    const adminFunction = new lambda.Function(this, 'AdminFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'enroll-admin.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambdas/fabric')),
      environment: {
        ADMIN_PASSWORD_ARN: adminPasswordArn,
        CA_ENDPOINT: caEndpoint,
        PRIVATE_KEY_ARN: adminPrivateKeyArn,
        SIGNED_CERT_ARN: adminSignedCertArn,
        TLS_CERT_BUCKET: tlsBucketData.bucketName,
        TLS_CERT_KEY: tlsBucketData.key,
      },
      role: customResourceRole,
      vpc: client.vpc,
      vpcSubnets: client.vpc.selectSubnets(),
      timeout: cdk.Duration.minutes(1),
    });

    // Port range to access the Network
    const ledgerPortRange = ec2.Port.tcpRange(utilities.STARTING_PORT, utilities.ENDING_PORT);

    // Add access to the lambda for the Network ports
    client.vpcEndpoint.connections.allowFrom(adminFunction, ledgerPortRange);

    // Custom Resource provider
    this.adminProvider = new customresources.Provider(this, 'AdminProvider', {
      onEventHandler: adminFunction,
      logRetention: logs.RetentionDays.ONE_DAY,
    });

    // Lambda function to register and enroll users and
    // import credentials to secrets manager
    const userFunction = new lambda.Function(scope, 'UserFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'register-user.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambdas/fabric')),
      environment: {
        CA_ENDPOINT: caEndpoint,
        MEMBER_NAME: memberName,
        PRIVATE_KEY_ARN: adminPrivateKeyArn,
        SIGNED_CERT_ARN: adminSignedCertArn,
        TLS_CERT_BUCKET: tlsBucketData.bucketName,
        TLS_CERT_KEY: tlsBucketData.key,
      },
      role: customResourceRole,
      vpc: client.vpc,
      vpcSubnets: client.vpc.selectSubnets(),
      timeout: cdk.Duration.minutes(1),
    });

    // Add access to the lambda for the Network ports
    scope.client.vpcEndpoint.connections.allowFrom(userFunction, ledgerPortRange);

    // Custom Resource provider
    HyperledgerFabricIdentity.userProvider = new customresources.Provider(scope, 'UserProvider', {
      onEventHandler: userFunction,
      logRetention: logs.RetentionDays.ONE_DAY,
    });

    // Populate the custom role static variable
    HyperledgerFabricIdentity.customRole = customResourceRole;

  }

}