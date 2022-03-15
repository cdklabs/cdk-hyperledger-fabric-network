// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as constructs from 'constructs';

import * as identity from './identity';
import * as network from './network';

/**
 * Construct properties for `HyperledgerFabricUser`
 */
export interface HyperledgerFabricUserProps {

  /**
   * User's affiliation to the member.
   * Should be hierarchical with member name as root(`MemberName.Dept1`).
   */
  readonly affilitation: string;

  /**
   * User ID to register with CA
   */
  readonly userId: string;

}

/**
 * Creates custom resources to register and enroll users identities
 * with the CA using the fabric-ca-client SDK
 */
export class HyperledgerFabricUser extends constructs.Construct {

  /**
   * User ID registered with CA
   */
  public readonly userId: string;

  /**
   * User's affiliation to the member
   */
  public readonly affiliation: string;

  /**
   * Secret for user signed certificate
   */
  public readonly userSignedCertSecret: secretsmanager.Secret;

  /**
   * Secret for user private key
   */
  public readonly userPrivateKeySecret: secretsmanager.Secret;


  constructor(scope: network.HyperledgerFabricNetwork, id: string, props: HyperledgerFabricUserProps) {
    super(scope, id);

    // Populate instance variables from input properties
    this.userId = props.userId;
    this.affiliation = props.affilitation;

    // Get the custom resources from Identity Resources class
    const customResourceRole = identity.HyperledgerFabricIdentity.customRole;
    const registerProvider = identity.HyperledgerFabricIdentity.userProvider;

    // Ensure the user affiliation includes the member name
    if (!this.affiliation.startsWith(scope.memberName)) throw new Error('User affiliation is invalid. Affiliation should start with Member name');

    // The user credentials will be stored in these secrets
    const userPasswordSecret = new secretsmanager.Secret(this, `${this.userId}-Password`);
    this.userPrivateKeySecret = new secretsmanager.Secret(this, `${this.userId}-PrivateKey`);
    this.userSignedCertSecret = new secretsmanager.Secret(this, `${this.userId}-SignedCert`);

    // Add secrets arn to the custom role
    customResourceRole.addToPolicy( new iam.PolicyStatement({
      actions: ['secretsmanager:PutSecretValue'],
      resources: [
        userPasswordSecret.secretArn,
        this.userPrivateKeySecret.secretArn,
        this.userSignedCertSecret.secretArn,
      ],
    }));

    const userProp = {
      userId: this.userId,
      affiliation: this.affiliation,
      passwordArn: userPasswordSecret.secretArn,
      privateKeyArn: this.userPrivateKeySecret.secretArn,
      signedCertArn: this.userSignedCertSecret.secretArn,
    };

    // Custom resource to enroll the admin identity using fabric client SDK
    new cdk.CustomResource(this, `${this.userId}Resource`, { serviceToken: registerProvider.serviceToken, properties: userProp });

  }

}