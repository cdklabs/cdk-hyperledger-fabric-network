# Hyperledger Fabric on Amazon Managed Blockchain

![release](https://img.shields.io/github/v/release/aws-samples/cdk-hyperledger-fabric-network?color=green&style=flat-square)
![npm:version](https://img.shields.io/npm/v/cdk-hyperledger-fabric-network?color=blue&style=flat-square)
![PyPi:version](https://img.shields.io/pypi/v/cdk-hypderledger-fabric-network?color=blue&style=flat-square)
![license](https://img.shields.io/github/license/aws-samples/cdk-hyperledger-fabric-network?color=green&style=flat-square)

This repository contains an L2 CDK construct to deploy a Hyperledger
Fabric network running on Amazon Managed Blockchain. It currently builds
out a member and its nodes, but the following enhanced functionality
is planned for future releases:

*  Add support for Java and .NET
*  Enroll users, storing their credentials in Secrets Manager
*  Create channels on nodes
*  Instantiate chaincode on nodes


## Installation

The construct is available for both TypeScript and Python CDK projects.
It can be installed with the following:

*  TypeScript: `npm install --save cdk-hyperledger-fabric-network`
*  Python: `pip3 install cdk-hyperledger-fabric-network`

Note that this construct requires [AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install).


## Usage

A minimally complete deployment is shown below. By default, a standard network
will be created running Hyperledger Fabric 1.4 with a single `bc.t3.small` node.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HyperledgerFabricNetwork } from 'cdk-hyperledger-fabric-network';

class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new HyperledgerFabricNetwork(this, 'Example', {
      networkName: 'MyNetwork',
      memberName: 'MyMember',
    });
  });
}
```

The equivalent Python code is as follows:

```python
from aws_cdk import Stack
from cdk_hyperledger_fabric_network import HyperledgerFabricNetwork

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


## License

This project is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file for details.
