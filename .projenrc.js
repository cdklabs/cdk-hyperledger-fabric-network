// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


const { awscdk } = require('projen');


const project = new awscdk.AwsCdkConstructLibrary({
  name: '@cdklabs/cdk-hyperledger-fabric-network',
  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',
  description: 'CDK construct to deploy a Hyperledger Fabric network running on Amazon Managed Blockchain',
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/cdklabs/cdk-hyperledger-fabric-network.git',
  cdkVersion: '2.33.0',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  peerDeps: [
    'constructs',
    'aws-cdk-lib',
  ],
  devDeps: [
    'cdk-nag',
  ],
  npmignore: [
    '*.md',
    '.gitattributes',
    '.jsii',
  ],
  publishToPypi: {
    distName: 'cdklabs.cdk-hypderledger-fabric-network',
    module: 'cdklabs.cdk_hyperledger_fabric_network',
  },
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.cdkhypderledgerfabricnetwork',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
    mavenArtifactId: 'cdk-hypderledger-fabric-network',
    mavenGroupId: 'io.github.cdklabs',
  },
  publishToNuget: {
    dotNetNamespace: 'Cdklabs.CdkHyperledgerFabricNetwork',
    packageId: 'Cdklabs.CdkHyperledgerFabricNetwork',
  },
  keywords: [
    'aws',
    'awscdk',
    'blockchain',
    'cdk',
    'hyperledger',
    'hyperledger-fabric',
    'managedblockchain',
    'aws::managedblockchain',
    'aws-managedblockchain',
  ],
});


const releaseWorkflow = project.tryFindObjectFile('.github/workflows/release.yml');
releaseWorkflow.addOverride('jobs.release_npm.steps.6.env.NPM_ACCESS_LEVEL', 'public');

project.synth();
