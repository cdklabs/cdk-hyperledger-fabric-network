# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyperledgerFabricClient <a name="HyperledgerFabricClient" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient"></a>

Creates a VPC and endpoint that allows Hyperledger Fabric client to interact with the Hyperledger Fabric endpoints that Amazon Managed Blockchain exposes for the member and network resources.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer"></a>

```typescript
import { HyperledgerFabricClient } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricClient(scope: HyperledgerFabricNetwork, id: string, props?: HyperledgerFabricClientProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork">HyperledgerFabricNetwork</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps">HyperledgerFabricClientProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork">HyperledgerFabricNetwork</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps">HyperledgerFabricClientProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.isConstruct"></a>

```typescript
import { HyperledgerFabricClient } from '@cdklabs/cdk-hyperledger-fabric-network'

HyperledgerFabricClient.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The client VPC that has endpoint to access the Amazon Managed Blockchain. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.vpcEndpoint">vpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint</code> | Managed Blockchain network VPC endpoint. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The client VPC that has endpoint to access the Amazon Managed Blockchain.

---

##### `vpcEndpoint`<sup>Required</sup> <a name="vpcEndpoint" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.vpcEndpoint"></a>

```typescript
public readonly vpcEndpoint: InterfaceVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint

Managed Blockchain network VPC endpoint.

---


### HyperledgerFabricNetwork <a name="HyperledgerFabricNetwork" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork"></a>

Creates a Hyperledger Fabric network on Amazon Managed Blockchain.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer"></a>

```typescript
import { HyperledgerFabricNetwork } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricNetwork(scope: Construct, id: string, props: HyperledgerFabricNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps">HyperledgerFabricNetworkProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps">HyperledgerFabricNetworkProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.isConstruct"></a>

```typescript
import { HyperledgerFabricNetwork } from '@cdklabs/cdk-hyperledger-fabric-network'

HyperledgerFabricNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPasswordSecret">adminPasswordSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | Secret ARN for the Hyperledger Fabric admin password. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPrivateKeySecret">adminPrivateKeySecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | Secret for Hyperledger Fabric admin private key. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminSignedCertSecret">adminSignedCertSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | Secret for Hyperledger Fabric admin signed certificate. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.caEndpoint">caEndpoint</a></code> | <code>string</code> | Managed Blockchain member CA endpoint. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.client">client</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient">HyperledgerFabricClient</a></code> | The client network to interact with the Hyperledger Fabric network. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.enableCaLogging">enableCaLogging</a></code> | <code>boolean</code> | The configuration to enable or disable certificate authority logging. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.enrollAdmin">enrollAdmin</a></code> | <code>boolean</code> | Configuration to enable/disable admin user enrollment. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.frameworkVersion">frameworkVersion</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion">FrameworkVersion</a></code> | Hyperledger Fabric framework version. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberDescription">memberDescription</a></code> | <code>string</code> | Managed Blockchain member description. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberId">memberId</a></code> | <code>string</code> | Managed Blockchain member identifier generated on construction. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberName">memberName</a></code> | <code>string</code> | Managed Blockchain member name. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkDescription">networkDescription</a></code> | <code>string</code> | Managed Blockchain network description. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkEdition">networkEdition</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition">NetworkEdition</a></code> | Managed Blockchain network edition. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkId">networkId</a></code> | <code>string</code> | Managed Blockchain network identifier generated on construction. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkName">networkName</a></code> | <code>string</code> | Managed Blockchain network name. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.nodes">nodes</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode">HyperledgerFabricNode</a>[]</code> | List of nodes created in the network. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.ordererEndpoint">ordererEndpoint</a></code> | <code>string</code> | Managed Blockchain network ordering service endpoint. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.proposalDurationInHours">proposalDurationInHours</a></code> | <code>number</code> | The duration from the time that a proposal is created until it expires. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdComparator">thresholdComparator</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator">ThresholdComparator</a></code> | Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | The percentage of votes among all members that must be yes for a proposal to be approved. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.users">users</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser">HyperledgerFabricUser</a>[]</code> | List of users registered with CA. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.vpcEndpointServiceName">vpcEndpointServiceName</a></code> | <code>string</code> | Managed Blockchain network VPC endpoint service name. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `adminPasswordSecret`<sup>Required</sup> <a name="adminPasswordSecret" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPasswordSecret"></a>

```typescript
public readonly adminPasswordSecret: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

Secret ARN for the Hyperledger Fabric admin password.

---

##### `adminPrivateKeySecret`<sup>Required</sup> <a name="adminPrivateKeySecret" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPrivateKeySecret"></a>

```typescript
public readonly adminPrivateKeySecret: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

Secret for Hyperledger Fabric admin private key.

---

##### `adminSignedCertSecret`<sup>Required</sup> <a name="adminSignedCertSecret" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminSignedCertSecret"></a>

```typescript
public readonly adminSignedCertSecret: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

Secret for Hyperledger Fabric admin signed certificate.

---

##### `caEndpoint`<sup>Required</sup> <a name="caEndpoint" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.caEndpoint"></a>

```typescript
public readonly caEndpoint: string;
```

- *Type:* string

Managed Blockchain member CA endpoint.

---

##### `client`<sup>Required</sup> <a name="client" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.client"></a>

```typescript
public readonly client: HyperledgerFabricClient;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient">HyperledgerFabricClient</a>

The client network to interact with the Hyperledger Fabric network.

---

##### `enableCaLogging`<sup>Required</sup> <a name="enableCaLogging" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.enableCaLogging"></a>

```typescript
public readonly enableCaLogging: boolean;
```

- *Type:* boolean

The configuration to enable or disable certificate authority logging.

---

##### `enrollAdmin`<sup>Required</sup> <a name="enrollAdmin" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.enrollAdmin"></a>

```typescript
public readonly enrollAdmin: boolean;
```

- *Type:* boolean

Configuration to enable/disable admin user enrollment.

---

##### `frameworkVersion`<sup>Required</sup> <a name="frameworkVersion" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.frameworkVersion"></a>

```typescript
public readonly frameworkVersion: FrameworkVersion;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion">FrameworkVersion</a>

Hyperledger Fabric framework version.

---

##### `memberDescription`<sup>Required</sup> <a name="memberDescription" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberDescription"></a>

```typescript
public readonly memberDescription: string;
```

- *Type:* string

Managed Blockchain member description.

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

Managed Blockchain member identifier generated on construction.

---

##### `memberName`<sup>Required</sup> <a name="memberName" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberName"></a>

```typescript
public readonly memberName: string;
```

- *Type:* string

Managed Blockchain member name.

---

##### `networkDescription`<sup>Required</sup> <a name="networkDescription" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkDescription"></a>

```typescript
public readonly networkDescription: string;
```

- *Type:* string

Managed Blockchain network description.

---

##### `networkEdition`<sup>Required</sup> <a name="networkEdition" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkEdition"></a>

```typescript
public readonly networkEdition: NetworkEdition;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition">NetworkEdition</a>

Managed Blockchain network edition.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Managed Blockchain network identifier generated on construction.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

Managed Blockchain network name.

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.nodes"></a>

```typescript
public readonly nodes: HyperledgerFabricNode[];
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode">HyperledgerFabricNode</a>[]

List of nodes created in the network.

---

##### `ordererEndpoint`<sup>Required</sup> <a name="ordererEndpoint" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.ordererEndpoint"></a>

```typescript
public readonly ordererEndpoint: string;
```

- *Type:* string

Managed Blockchain network ordering service endpoint.

---

##### `proposalDurationInHours`<sup>Required</sup> <a name="proposalDurationInHours" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.proposalDurationInHours"></a>

```typescript
public readonly proposalDurationInHours: number;
```

- *Type:* number

The duration from the time that a proposal is created until it expires.

---

##### `thresholdComparator`<sup>Required</sup> <a name="thresholdComparator" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdComparator"></a>

```typescript
public readonly thresholdComparator: ThresholdComparator;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator">ThresholdComparator</a>

Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved.

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number

The percentage of votes among all members that must be yes for a proposal to be approved.

---

##### `users`<sup>Required</sup> <a name="users" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.users"></a>

```typescript
public readonly users: HyperledgerFabricUser[];
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser">HyperledgerFabricUser</a>[]

List of users registered with CA.

---

##### `vpcEndpointServiceName`<sup>Required</sup> <a name="vpcEndpointServiceName" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.vpcEndpointServiceName"></a>

```typescript
public readonly vpcEndpointServiceName: string;
```

- *Type:* string

Managed Blockchain network VPC endpoint service name.

---


### HyperledgerFabricNode <a name="HyperledgerFabricNode" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode"></a>

Creates a Hyperledger Fabric node on an Amazon Managed Blockchain network.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer"></a>

```typescript
import { HyperledgerFabricNode } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricNode(scope: HyperledgerFabricNetwork, id: string, props?: HyperledgerFabricNodeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork">HyperledgerFabricNetwork</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps">HyperledgerFabricNodeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork">HyperledgerFabricNetwork</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps">HyperledgerFabricNodeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.configureLogging">configureLogging</a></code> | Configure logging for the node via SDK call; |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.fetchData">fetchData</a></code> | Populate the output properties that must be fetched via SDK call; |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `configureLogging` <a name="configureLogging" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.configureLogging"></a>

```typescript
public configureLogging(sdkCallPolicy: AwsCustomResourcePolicy): void
```

Configure logging for the node via SDK call;

this function
should be merged back into the constructor once the race condition is solved

###### `sdkCallPolicy`<sup>Required</sup> <a name="sdkCallPolicy" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.configureLogging.parameter.sdkCallPolicy"></a>

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResourcePolicy

---

##### `fetchData` <a name="fetchData" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.fetchData"></a>

```typescript
public fetchData(dataSdkCallPolicy: AwsCustomResourcePolicy): void
```

Populate the output properties that must be fetched via SDK call;

this function
should be merged back into the constructor once the race condition is solved

###### `dataSdkCallPolicy`<sup>Required</sup> <a name="dataSdkCallPolicy" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.fetchData.parameter.dataSdkCallPolicy"></a>

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResourcePolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.constructNodes">constructNodes</a></code> | Build out a list of HyperledgerFabricNode constructs given a list of input property objects; |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.isConstruct"></a>

```typescript
import { HyperledgerFabricNode } from '@cdklabs/cdk-hyperledger-fabric-network'

HyperledgerFabricNode.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `constructNodes` <a name="constructNodes" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.constructNodes"></a>

```typescript
import { HyperledgerFabricNode } from '@cdklabs/cdk-hyperledger-fabric-network'

HyperledgerFabricNode.constructNodes(scope: HyperledgerFabricNetwork, nodeProps?: HyperledgerFabricNodeProps[])
```

Build out a list of HyperledgerFabricNode constructs given a list of input property objects;

additionally checks to ensure node count is supported given the network type

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.constructNodes.parameter.scope"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork">HyperledgerFabricNetwork</a>

---

###### `nodeProps`<sup>Optional</sup> <a name="nodeProps" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.constructNodes.parameter.nodeProps"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps">HyperledgerFabricNodeProps</a>[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which the node exists. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.enableChaincodeLogging">enableChaincodeLogging</a></code> | <code>boolean</code> | The configuration to enable or disable chaincode logging. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.enableNodeLogging">enableNodeLogging</a></code> | <code>boolean</code> | The configuration to enable or disable node logging. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.instanceType">instanceType</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType">InstanceType</a></code> | The Amazon Managed Blockchain instance type for the node. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.memberId">memberId</a></code> | <code>string</code> | Managed Blockchain member identifier. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.networkId">networkId</a></code> | <code>string</code> | Managed Blockchain network identifier. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.nodeId">nodeId</a></code> | <code>string</code> | Managed Blockchain node identifier generated on construction. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.eventEndpoint">eventEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone in which the node exists.

---

##### `enableChaincodeLogging`<sup>Required</sup> <a name="enableChaincodeLogging" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.enableChaincodeLogging"></a>

```typescript
public readonly enableChaincodeLogging: boolean;
```

- *Type:* boolean

The configuration to enable or disable chaincode logging.

---

##### `enableNodeLogging`<sup>Required</sup> <a name="enableNodeLogging" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.enableNodeLogging"></a>

```typescript
public readonly enableNodeLogging: boolean;
```

- *Type:* boolean

The configuration to enable or disable node logging.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType">InstanceType</a>

The Amazon Managed Blockchain instance type for the node.

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

Managed Blockchain member identifier.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Managed Blockchain network identifier.

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

Managed Blockchain node identifier generated on construction.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `eventEndpoint`<sup>Required</sup> <a name="eventEndpoint" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.eventEndpoint"></a>

```typescript
public readonly eventEndpoint: string;
```

- *Type:* string

---


### HyperledgerFabricUser <a name="HyperledgerFabricUser" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser"></a>

Creates custom resources to register and enroll users identities with the CA using the fabric-ca-client SDK.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer"></a>

```typescript
import { HyperledgerFabricUser } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricUser(scope: HyperledgerFabricNetwork, id: string, props: HyperledgerFabricUserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork">HyperledgerFabricNetwork</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps">HyperledgerFabricUserProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork">HyperledgerFabricNetwork</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps">HyperledgerFabricUserProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.isConstruct"></a>

```typescript
import { HyperledgerFabricUser } from '@cdklabs/cdk-hyperledger-fabric-network'

HyperledgerFabricUser.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.affiliation">affiliation</a></code> | <code>string</code> | User's affiliation to the member. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userId">userId</a></code> | <code>string</code> | User ID registered with CA. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userPrivateKeySecret">userPrivateKeySecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | Secret for user private key. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userSignedCertSecret">userSignedCertSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | Secret for user signed certificate. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `affiliation`<sup>Required</sup> <a name="affiliation" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.affiliation"></a>

```typescript
public readonly affiliation: string;
```

- *Type:* string

User's affiliation to the member.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

User ID registered with CA.

---

##### `userPrivateKeySecret`<sup>Required</sup> <a name="userPrivateKeySecret" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userPrivateKeySecret"></a>

```typescript
public readonly userPrivateKeySecret: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

Secret for user private key.

---

##### `userSignedCertSecret`<sup>Required</sup> <a name="userSignedCertSecret" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userSignedCertSecret"></a>

```typescript
public readonly userSignedCertSecret: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

Secret for user signed certificate.

---


## Structs <a name="Structs" id="Structs"></a>

### HyperledgerFabricClientProps <a name="HyperledgerFabricClientProps" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps"></a>

Construct properties for `HyperledgerFabricVpc`.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps.Initializer"></a>

```typescript
import { HyperledgerFabricClientProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricClientProps: HyperledgerFabricClientProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Client VPC to create the endpoints. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

Client VPC to create the endpoints.

If not provided,
VPC will be created with the default properties
(CIDR-`10.0.0.0/16` and subnets of type `PRIVATE_ISOLATED`)

---

### HyperledgerFabricNetworkProps <a name="HyperledgerFabricNetworkProps" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps"></a>

Construct properties for `HyperledgerFabricNetwork`.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.Initializer"></a>

```typescript
import { HyperledgerFabricNetworkProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricNetworkProps: HyperledgerFabricNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberName">memberName</a></code> | <code>string</code> | Managed Blockchain member name. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkName">networkName</a></code> | <code>string</code> | Managed Blockchain network name. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.client">client</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps">HyperledgerFabricClientProps</a></code> | The Client network to interact with the Hyperledger Fabric network. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.enableCaLogging">enableCaLogging</a></code> | <code>boolean</code> | The configuration to enable or disable certificate authority logging. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.enrollAdmin">enrollAdmin</a></code> | <code>boolean</code> | Configuration to enable/disable enrollment of admin user. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.frameworkVersion">frameworkVersion</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion">FrameworkVersion</a></code> | Hyperledger Fabric framework version. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberDescription">memberDescription</a></code> | <code>string</code> | Managed Blockchain member description. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkDescription">networkDescription</a></code> | <code>string</code> | Managed Blockchain network description. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkEdition">networkEdition</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition">NetworkEdition</a></code> | Managed Blockchain network edition. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.nodes">nodes</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps">HyperledgerFabricNodeProps</a>[]</code> | List of nodes to create on the network. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.proposalDurationInHours">proposalDurationInHours</a></code> | <code>number</code> | The duration from the time that a proposal is created until it expires. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdComparator">thresholdComparator</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator">ThresholdComparator</a></code> | Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | The percentage of votes among all members that must be yes for a proposal to be approved. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.users">users</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps">HyperledgerFabricUserProps</a>[]</code> | List of users to register with Fabric CA Note: enrollAdmin property has to be enabled for registering users. |

---

##### `memberName`<sup>Required</sup> <a name="memberName" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberName"></a>

```typescript
public readonly memberName: string;
```

- *Type:* string

Managed Blockchain member name.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

Managed Blockchain network name.

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.client"></a>

```typescript
public readonly client: HyperledgerFabricClientProps;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps">HyperledgerFabricClientProps</a>
- *Default:* Client network with Default properties (CIDR-`10.0.0.0/16` and subnets of type `PRIVATE_ISOLATED`)

The Client network to interact with the Hyperledger Fabric network.

---

##### `enableCaLogging`<sup>Optional</sup> <a name="enableCaLogging" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.enableCaLogging"></a>

```typescript
public readonly enableCaLogging: boolean;
```

- *Type:* boolean
- *Default:* true

The configuration to enable or disable certificate authority logging.

---

##### `enrollAdmin`<sup>Optional</sup> <a name="enrollAdmin" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.enrollAdmin"></a>

```typescript
public readonly enrollAdmin: boolean;
```

- *Type:* boolean
- *Default:* true

Configuration to enable/disable enrollment of admin user.

---

##### `frameworkVersion`<sup>Optional</sup> <a name="frameworkVersion" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.frameworkVersion"></a>

```typescript
public readonly frameworkVersion: FrameworkVersion;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion">FrameworkVersion</a>
- *Default:* FrameworkVersion.VERSION_1_4

Hyperledger Fabric framework version.

---

##### `memberDescription`<sup>Optional</sup> <a name="memberDescription" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberDescription"></a>

```typescript
public readonly memberDescription: string;
```

- *Type:* string
- *Default:* Set to match member name

Managed Blockchain member description.

---

##### `networkDescription`<sup>Optional</sup> <a name="networkDescription" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkDescription"></a>

```typescript
public readonly networkDescription: string;
```

- *Type:* string
- *Default:* Set to match network name

Managed Blockchain network description.

---

##### `networkEdition`<sup>Optional</sup> <a name="networkEdition" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkEdition"></a>

```typescript
public readonly networkEdition: NetworkEdition;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition">NetworkEdition</a>
- *Default:* NetworkEdition.STANDARD

Managed Blockchain network edition.

---

##### `nodes`<sup>Optional</sup> <a name="nodes" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.nodes"></a>

```typescript
public readonly nodes: HyperledgerFabricNodeProps[];
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps">HyperledgerFabricNodeProps</a>[]
- *Default:* One node with default configuration

List of nodes to create on the network.

---

##### `proposalDurationInHours`<sup>Optional</sup> <a name="proposalDurationInHours" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.proposalDurationInHours"></a>

```typescript
public readonly proposalDurationInHours: number;
```

- *Type:* number
- *Default:* 24 hours

The duration from the time that a proposal is created until it expires.

---

##### `thresholdComparator`<sup>Optional</sup> <a name="thresholdComparator" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdComparator"></a>

```typescript
public readonly thresholdComparator: ThresholdComparator;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator">ThresholdComparator</a>
- *Default:* GREATER_THAN

Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved.

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="thresholdPercentage" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number
- *Default:* 50 percent

The percentage of votes among all members that must be yes for a proposal to be approved.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.users"></a>

```typescript
public readonly users: HyperledgerFabricUserProps[];
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps">HyperledgerFabricUserProps</a>[]

List of users to register with Fabric CA Note: enrollAdmin property has to be enabled for registering users.

---

### HyperledgerFabricNodeProps <a name="HyperledgerFabricNodeProps" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps"></a>

Construct properties for `HyperledgerFabricNode`.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.Initializer"></a>

```typescript
import { HyperledgerFabricNodeProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricNodeProps: HyperledgerFabricNodeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which the node will be created. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.enableChaincodeLogging">enableChaincodeLogging</a></code> | <code>boolean</code> | The configuration to enable or disable chaincode logging. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.enableNodeLogging">enableNodeLogging</a></code> | <code>boolean</code> | The configuration to enable or disable node logging. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.instanceType">instanceType</a></code> | <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType">InstanceType</a></code> | The Amazon Managed Blockchain instance type for the node. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string
- *Default:* The first AZ in the region

The Availability Zone in which the node will be created.

---

##### `enableChaincodeLogging`<sup>Optional</sup> <a name="enableChaincodeLogging" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.enableChaincodeLogging"></a>

```typescript
public readonly enableChaincodeLogging: boolean;
```

- *Type:* boolean
- *Default:* true

The configuration to enable or disable chaincode logging.

---

##### `enableNodeLogging`<sup>Optional</sup> <a name="enableNodeLogging" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.enableNodeLogging"></a>

```typescript
public readonly enableNodeLogging: boolean;
```

- *Type:* boolean
- *Default:* true

The configuration to enable or disable node logging.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* <a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType">InstanceType</a>
- *Default:* BURSTABLE3_SMALL

The Amazon Managed Blockchain instance type for the node.

---

### HyperledgerFabricUserProps <a name="HyperledgerFabricUserProps" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps"></a>

Construct properties for `HyperledgerFabricUser`.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps.Initializer"></a>

```typescript
import { HyperledgerFabricUserProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricUserProps: HyperledgerFabricUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps.property.affilitation">affilitation</a></code> | <code>string</code> | User's affiliation to the member. |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps.property.userId">userId</a></code> | <code>string</code> | User ID to register with CA. |

---

##### `affilitation`<sup>Required</sup> <a name="affilitation" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps.property.affilitation"></a>

```typescript
public readonly affilitation: string;
```

- *Type:* string

User's affiliation to the member.

Should be hierarchical with member name as root(`MemberName.Dept1`).

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

User ID to register with CA.

---



## Enums <a name="Enums" id="Enums"></a>

### FrameworkVersion <a name="FrameworkVersion" id="@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion"></a>

Define which Hyperledger Fabric framework to use.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_2">VERSION_1_2</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_4">VERSION_1_4</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_2_2">VERSION_2_2</a></code> | *No description.* |

---

##### `VERSION_1_2` <a name="VERSION_1_2" id="@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_2"></a>

---


##### `VERSION_1_4` <a name="VERSION_1_4" id="@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_4"></a>

---


##### `VERSION_2_2` <a name="VERSION_2_2" id="@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_2_2"></a>

---


### InstanceType <a name="InstanceType" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType"></a>

Supported instance types for Managed Blockchain nodes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_SMALL">BURSTABLE3_SMALL</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_MEDIUM">BURSTABLE3_MEDIUM</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_LARGE">BURSTABLE3_LARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_XLARGE">BURSTABLE3_XLARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_LARGE">STANDARD5_LARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE">STANDARD5_XLARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE2">STANDARD5_XLARGE2</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE4">STANDARD5_XLARGE4</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_LARGE">COMPUTE5_LARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE">COMPUTE5_XLARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE2">COMPUTE5_XLARGE2</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE4">COMPUTE5_XLARGE4</a></code> | *No description.* |

---

##### `BURSTABLE3_SMALL` <a name="BURSTABLE3_SMALL" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_SMALL"></a>

---


##### `BURSTABLE3_MEDIUM` <a name="BURSTABLE3_MEDIUM" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_MEDIUM"></a>

---


##### `BURSTABLE3_LARGE` <a name="BURSTABLE3_LARGE" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_LARGE"></a>

---


##### `BURSTABLE3_XLARGE` <a name="BURSTABLE3_XLARGE" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_XLARGE"></a>

---


##### `STANDARD5_LARGE` <a name="STANDARD5_LARGE" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_LARGE"></a>

---


##### `STANDARD5_XLARGE` <a name="STANDARD5_XLARGE" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE"></a>

---


##### `STANDARD5_XLARGE2` <a name="STANDARD5_XLARGE2" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE2"></a>

---


##### `STANDARD5_XLARGE4` <a name="STANDARD5_XLARGE4" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE4"></a>

---


##### `COMPUTE5_LARGE` <a name="COMPUTE5_LARGE" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_LARGE"></a>

---


##### `COMPUTE5_XLARGE` <a name="COMPUTE5_XLARGE" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE"></a>

---


##### `COMPUTE5_XLARGE2` <a name="COMPUTE5_XLARGE2" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE2"></a>

---


##### `COMPUTE5_XLARGE4` <a name="COMPUTE5_XLARGE4" id="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE4"></a>

---


### NetworkEdition <a name="NetworkEdition" id="@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition"></a>

Starter networks are cheaper, but are limited to 2 nodes that can only be from a subset of types (see node.ts for the list).

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition.STARTER">STARTER</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition.STANDARD">STANDARD</a></code> | *No description.* |

---

##### `STARTER` <a name="STARTER" id="@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition.STARTER"></a>

---


##### `STANDARD` <a name="STANDARD" id="@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition.STANDARD"></a>

---


### ThresholdComparator <a name="ThresholdComparator" id="@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator"></a>

Constants to define ties in voting for new members.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN">GREATER_THAN</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN_OR_EQUAL_TO">GREATER_THAN_OR_EQUAL_TO</a></code> | *No description.* |

---

##### `GREATER_THAN` <a name="GREATER_THAN" id="@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN"></a>

---


##### `GREATER_THAN_OR_EQUAL_TO` <a name="GREATER_THAN_OR_EQUAL_TO" id="@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN_OR_EQUAL_TO"></a>

---

