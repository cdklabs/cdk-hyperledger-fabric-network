// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

import * as hyperledger from '../src';

const DEFAULT_ENV = { env: { region: 'us-east-1' } };

const context = {
  'aws:cdk:bundling-stacks': [],
};

describe('HyperledgerFabricUser', () => {

  test('Register user identity from network', () => {
    const app = new cdk.App({ context });
    const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
    const network = new hyperledger.HyperledgerFabricNetwork(stack, 'TestHyperledgerFabricNetwork', {
      networkName: 'TestNetwork',
      memberName: 'TestMember',
      users: [
        { userId: 'TestUser', affilitation: 'TestMember.department1' },
      ],
    });

    expect(network.users.length).toBe(1);

    const template = assertions.Template.fromStack(stack);
    template.hasResource('AWS::Lambda::Function', {
      Properties: {
        Environment: {
          Variables: {
            TLS_CERT_BUCKET: 'us-east-1.managedblockchain',
            TLS_CERT_KEY: 'etc/managedblockchain-tls-chain.pem',
          },
        },
        Handler: 'enroll-admin.handler',
      },
    });
  });

  test('Register user identity separate from network', () => {
    const app = new cdk.App({ context });
    const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
    const network = new hyperledger.HyperledgerFabricNetwork(stack, 'TestHyperledgerFabricNetwork', {
      networkName: 'TestNetwork',
      memberName: 'TestMember',
    });

    new hyperledger.HyperledgerFabricUser(network, 'TestHyperledgerFabricUser', {
      userId: 'TestUser',
      affilitation: 'TestMember',
    });

    const template = assertions.Template.fromStack(stack);
    template.hasResource('AWS::Lambda::Function', {
      Properties: {
        Environment: {
          Variables: {
            TLS_CERT_BUCKET: 'us-east-1.managedblockchain',
            TLS_CERT_KEY: 'etc/managedblockchain-tls-chain.pem',
          },
        },
        Handler: 'enroll-admin.handler',
      },
    });
  });

  test('Register user identity from network and separately', () => {
    const app = new cdk.App({ context });
    const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
    const network = new hyperledger.HyperledgerFabricNetwork(stack, 'TestHyperledgerFabricNetwork', {
      networkName: 'TestNetwork',
      memberName: 'TestMember',
      users: [
        { userId: 'TestUser1', affilitation: 'TestMember.department1' },
      ],
    });

    const user = new hyperledger.HyperledgerFabricUser(network, 'TestHyperledgerFabricUser', {
      userId: 'TestUser2',
      affilitation: 'TestMember',
    });

    expect(network.users.length).toBe(1);
    expect(user.userPrivateKeySecret).toBeInstanceOf(secretsmanager.Secret);
    expect(user.userSignedCertSecret).toBeInstanceOf(secretsmanager.Secret);

    const template = assertions.Template.fromStack(stack);
    template.hasResource('AWS::Lambda::Function', {
      Properties: {
        Environment: {
          Variables: {
            TLS_CERT_BUCKET: 'us-east-1.managedblockchain',
            TLS_CERT_KEY: 'etc/managedblockchain-tls-chain.pem',
          },
        },
        Handler: 'enroll-admin.handler',
      },
    });
  });

  test('Fail to register user identity separate from network when affiliation is invalid', () => {
    const invalidAffiliation = () => {
      const app = new cdk.App({ context });
      const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
      const network = new hyperledger.HyperledgerFabricNetwork(stack, 'TestHyperledgerFabricNetwork', {
        networkName: 'TestNetwork',
        memberName: 'TestMember',
      });

      new hyperledger.HyperledgerFabricUser(network, 'TestHyperledgerFabricUser', {
        userId: 'TestUser',
        affilitation: 'Department1',
      });
    };

    expect(invalidAffiliation).toThrow(Error);
  });

});
