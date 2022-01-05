// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


import * as cdk from 'aws-cdk-lib';
import * as cdknag from 'cdk-nag';
import * as constructs from 'constructs';

import * as hyperledger from 'cdk-hyperledger-fabric-network';


class HyperledgerTestStack extends cdk.Stack {

  constructor(scope: constructs.Construct, id: string, props?: cdk.StackProps) {

    super(scope, id, props);

    const network = new hyperledger.HyperledgerFabricNetwork(this, 'IntegrationTestNetwork', {
      networkName: 'IntegrationTestNetwork',
      memberName: 'IntegrationTestMember',
      nodes: [
        {
          availabilityZone: 'us-east-1a',
          instanceType: hyperledger.InstanceType.STANDARD5_LARGE,
        },
        {
          availabilityZone: 'us-east-1b',
          instanceType: hyperledger.InstanceType.STANDARD5_LARGE,
        },
      ],
    });

    new cdk.CfnOutput(this, 'NetworkId', {
      description: 'Managed Blockchain network identifier',
      value: network.networkId,
    });

    new cdk.CfnOutput(this, 'MemberId', {
      description: 'Managed Blockchain member identifier',
      value: network.memberId,
    });

    new cdk.CfnOutput(this, 'VpcEndpointServiceName', {
      description: 'Managed Blockchain network VPC endpoint service name',
      value: network.vpcEndpointServiceName,
    });

    new cdk.CfnOutput(this, 'OrdererEndpoint', {
      description: 'Managed Blockchain network ordering service endpoint',
      value: network.ordererEndpoint,
    });

    new cdk.CfnOutput(this, 'CaEndpoint', {
      description: 'Managed Blockchain member CA endpoint',
      value: network.caEndpoint,
    });

    new cdk.CfnOutput(this, 'AdminPasswordArn', {
      description: 'Secret ARN for the Hyperledger Fabric admin password',
      value: network.adminPasswordSecret.secretFullArn ?? network.adminPasswordSecret.secretArn,
    });

    new cdk.CfnOutput(this, 'AdminPrivateKeyArn', {
      description: 'Secret ARN for Hyperledger Fabric admin private key',
      value: network.adminPrivateKeySecret.secretFullArn ?? network.adminPrivateKeySecret.secretArn,
    });

    new cdk.CfnOutput(this, 'AdminSignedCertArn', {
      description: 'Secret ARN for Hyperledger Fabric admin signed certificate',
      value: network.adminSignedCertSecret.secretFullArn ?? network.adminSignedCertSecret.secretArn,
    });

    new cdk.CfnOutput(this, 'NodeIds', {
      description: 'Comma-separated list of Managed Blockchain node identifiers',
      value: network.nodes.map(n => n.nodeId).join(','),
    });

    new cdk.CfnOutput(this, 'NodeEndpoints', {
      description: 'Comma-separated list of Managed Blockchain node endpoints',
      value: network.nodes.map(n => n.endpoint).join(','),
    });

    new cdk.CfnOutput(this, 'NodeEventEndpoints', {
      description: 'Comma-separated list of Managed Blockchain node event endpoints',
      value: network.nodes.map(n => n.eventEndpoint).join(','),
    });

  }
}


const app = new cdk.App();

const stack = new HyperledgerTestStack(app, 'HyperledgerTestStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

cdk.Aspects.of(stack).add(new cdknag.AwsSolutionsChecks({ verbose: true }));

cdknag.NagSuppressions.addStackSuppressions(stack, [
  { id: 'AwsSolutions-SMG4', reason: 'Secrets created for Managed Blockchain users do not support auto-rotation' },
  { id: 'AwsSolutions-IAM4', reason: 'The CDK custom resource framework uses a managed policy for its Lambda' },
]);
