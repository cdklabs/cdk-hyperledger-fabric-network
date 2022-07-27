# Hyperledger Fabric on Amazon Managed Blockchain

![license](https://img.shields.io/github/license/cdklabs/cdk-hyperledger-fabric-network?color=green)
![release](https://img.shields.io/github/v/release/cdklabs/cdk-hyperledger-fabric-network?color=green)
![npm:version](https://img.shields.io/npm/v/@cdklabs/cdk-hyperledger-fabric-network?color=blue)
![PyPi:version](https://img.shields.io/pypi/v/cdklabs.cdk-hypderledger-fabric-network?color=blue)
![Maven:version](https://img.shields.io/maven-central/v/io.github.cdklabs/cdk-hypderledger-fabric-network?color=blue)
![NuGet:version](https://img.shields.io/nuget/v/Cdklabs.CdkHyperledgerFabricNetwork?color=blue)

This repository contains a CDK construct to deploy a Hyperledger Fabric network
running on Amazon Managed Blockchain. It builds out a member and its nodes, a VPC
and associated endpoint to access them, and a set of users enrolled on the network.

The following functionality is planned for future releases:

*  Create channels on nodes
*  Instantiate chaincode on nodes


## Installation

Note that this construct requires [AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install).

#### JavaScript

```bash
npm install --save @cdklabs/cdk-hyperledger-fabric-network
```

#### Python

```bash
pip3 install cdklabs.cdk-hyperledger-fabric-network
```

#### Java

Add the following to `pom.xml`:

```xml
<dependency>
  <groupId>io.github.cdklabs</groupId>
  <artifactId>cdk-hypderledger-fabric-network</artifactId>
</dependency>
```

#### .NET

```bash
dotnet add package Cdklabs.CdkHyperledgerFabricNetwork
```


## Usage

A minimally complete deployment is shown below. By default, a standard network
will be created running Hyperledger Fabric 1.4 with a single `bc.t3.small` node.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HyperledgerFabricNetwork } from '@cdklabs/cdk-hyperledger-fabric-network';

class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new HyperledgerFabricNetwork(this, 'Example', {
      networkName: 'MyNetwork',
      memberName: 'MyMember',
    });
  }
}
```

The equivalent Python code is as follows:

```python
from aws_cdk import Stack
from cdklabs.cdk_hyperledger_fabric_network import HyperledgerFabricNetwork

class MyStack(Stack):
    def __init__(self, scope, id, **kwargs):
        super().__init__(scope, id, **kwargs)
        HyperledgerFabricNetwork(
            self, 'Example',
            network_name='MyNetwork',
            member_name='MyMember',
        )
```

The following is a more complex instantiation illustrating some of the options available.

```typescript
new HyperledgerFabricNetwork(this, 'Example', {
  networkName: 'MyNetwork',
  networkDescription: 'This is my Hyperledger Fabric network',
  memberName: 'MyMember',
  networkDescription: 'This is my Hyperledger Fabric member',
  frameworkVersion: hyperledger.FrameworkVersion.VERSION_1_2,
  proposalDurationInHours: 48,
  thresholdPercentage: 75,
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
  users: [
    { userId: 'AppUser1', affilitation: 'MyMember' },
    { userId: 'AppUser2', affilitation: 'MyMember.department1' },
  ],
});
```

See the [API Documentation](API.md) for details on all available input and output parameters.


## References

*  [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
*  [Amazon Managed Blockchain](https://aws.amazon.com/managed-blockchain/)
*  [Hyperledger Fabric](https://hyperledger-fabric.readthedocs.io/)
*  [Node Fabric SDK](https://hyperledger.github.io/fabric-sdk-node/release-1.4/index.html)
*  [Fabric Chaincode Node](https://hyperledger.github.io/fabric-chaincode-node/)


## Contributing

Pull requests are welcomed. Please review the [Contributing Guidelines](CONTRIBUTING.md)
and the [Code of Conduct](CODE_OF_CONDUCT.md).


## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.


## Authors

*  Jud Neer (judneer@amazon.com)
*  Vignesh Rajasingh (vrajasin@amazon.com)


## License

This project is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file for details.
