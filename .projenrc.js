// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


const { awscdk } = require('projen');


const project = new awscdk.AwsCdkConstructLibrary({
  name: 'cdk-hyperledger-fabric-network',
  author: 'Jud Neer',
  authorAddress: 'judneer@amazon.com',
  authorOrganizaion: 'Amazon Web Services',
  description: 'CDK construct to deploy a Hyperledger Fabric network running on Amazon Managed Blockchain',
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/aws-samples/cdk-hyperledger-fabric-network.git',
  cdkVersion: '2.4.0',
  depsUpgrade: false,
  devDeps: [
    'cdk-nag@^2.0.0',
  ],
  npmignore: [
    '*.md',
    '.gitattributes',
    '.jsii',
  ],
  publishToPypi: {
    distName: 'cdk-hypderledger-fabric-network',
    module: 'cdk_hyperledger_fabric_network',
  },
  keywords: [
    'aws',
    'blockchain',
    'cdk',
    'hyperledger',
  ],
});


project.synth();
