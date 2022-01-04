# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### HyperledgerFabricNetwork <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetwork"></a>

Creates a Hyperledger Fabric network on Amazon Managed Blockchain.

#### Initializers <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkinitializer"></a>

```typescript
import { HyperledgerFabricNetwork } from 'cdk-hyperledger-fabric-network'

new HyperledgerFabricNetwork(scope: Construct, id: string, props: HyperledgerFabricNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterprops)<span title="Required">*</span> | [`cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps`](#cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.parameter.scope" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.parameter.id" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.parameter.props" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterprops"></a>

- *Type:* [`cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps`](#cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`adminPasswordSecret`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminpasswordsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret ARN for the Hyperledger Fabric admin password. |
| [`adminPrivateKeySecret`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminprivatekeysecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret for Hyperledger Fabric admin private key. |
| [`adminSignedCertSecret`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminsignedcertsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret for Hyperledger Fabric admin signed certificate. |
| [`caEndpoint`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertycaendpoint)<span title="Required">*</span> | `string` | Managed Blockchain member CA endpoint. |
| [`frameworkVersion`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyframeworkversion)<span title="Required">*</span> | [`cdk-hyperledger-fabric-network.FrameworkVersion`](#cdk-hyperledger-fabric-network.FrameworkVersion) | Hyperledger Fabric framework version. |
| [`memberDescription`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberdescription)<span title="Required">*</span> | `string` | Managed Blockchain member description. |
| [`memberId`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberid)<span title="Required">*</span> | `string` | Managed Blockchain member identifier generated on construction. |
| [`memberName`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymembername)<span title="Required">*</span> | `string` | Managed Blockchain member name. |
| [`networkDescription`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkdescription)<span title="Required">*</span> | `string` | Managed Blockchain network description. |
| [`networkEdition`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkedition)<span title="Required">*</span> | [`cdk-hyperledger-fabric-network.NetworkEdition`](#cdk-hyperledger-fabric-network.NetworkEdition) | Managed Blockchain network edition. |
| [`networkId`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkid)<span title="Required">*</span> | `string` | Managed Blockchain network identifier generated on construction. |
| [`networkName`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkname)<span title="Required">*</span> | `string` | Managed Blockchain network name. |
| [`nodes`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynodes)<span title="Required">*</span> | [`cdk-hyperledger-fabric-network.HyperledgerFabricNode`](#cdk-hyperledger-fabric-network.HyperledgerFabricNode)[] | List of nodes created in the network. |
| [`ordererEndpoint`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyordererendpoint)<span title="Required">*</span> | `string` | Managed Blockchain network ordering service endpoint. |
| [`proposalDurationInHours`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyproposaldurationinhours)<span title="Required">*</span> | `number` | The duration from the time that a proposal is created until it expires. |
| [`thresholdComparator`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdcomparator)<span title="Required">*</span> | [`cdk-hyperledger-fabric-network.ThresholdComparator`](#cdk-hyperledger-fabric-network.ThresholdComparator) | Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved. |
| [`thresholdPercentage`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdpercentage)<span title="Required">*</span> | `number` | The percentage of votes among all members that must be yes for a proposal to be approved. |
| [`vpcEndpointServiceName`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyvpcendpointservicename)<span title="Required">*</span> | `string` | Managed Blockchain network VPC endpoint service name. |

---

##### `adminPasswordSecret`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPasswordSecret" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminpasswordsecret"></a>

```typescript
public readonly adminPasswordSecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret ARN for the Hyperledger Fabric admin password.

---

##### `adminPrivateKeySecret`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPrivateKeySecret" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminprivatekeysecret"></a>

```typescript
public readonly adminPrivateKeySecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret for Hyperledger Fabric admin private key.

---

##### `adminSignedCertSecret`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminSignedCertSecret" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminsignedcertsecret"></a>

```typescript
public readonly adminSignedCertSecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret for Hyperledger Fabric admin signed certificate.

---

##### `caEndpoint`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.caEndpoint" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertycaendpoint"></a>

```typescript
public readonly caEndpoint: string;
```

- *Type:* `string`

Managed Blockchain member CA endpoint.

---

##### `frameworkVersion`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.frameworkVersion" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyframeworkversion"></a>

```typescript
public readonly frameworkVersion: FrameworkVersion;
```

- *Type:* [`cdk-hyperledger-fabric-network.FrameworkVersion`](#cdk-hyperledger-fabric-network.FrameworkVersion)

Hyperledger Fabric framework version.

---

##### `memberDescription`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberDescription" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberdescription"></a>

```typescript
public readonly memberDescription: string;
```

- *Type:* `string`

Managed Blockchain member description.

---

##### `memberId`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberId" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberid"></a>

```typescript
public readonly memberId: string;
```

- *Type:* `string`

Managed Blockchain member identifier generated on construction.

---

##### `memberName`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberName" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymembername"></a>

```typescript
public readonly memberName: string;
```

- *Type:* `string`

Managed Blockchain member name.

---

##### `networkDescription`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkDescription" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkdescription"></a>

```typescript
public readonly networkDescription: string;
```

- *Type:* `string`

Managed Blockchain network description.

---

##### `networkEdition`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkEdition" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkedition"></a>

```typescript
public readonly networkEdition: NetworkEdition;
```

- *Type:* [`cdk-hyperledger-fabric-network.NetworkEdition`](#cdk-hyperledger-fabric-network.NetworkEdition)

Managed Blockchain network edition.

---

##### `networkId`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkId" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkid"></a>

```typescript
public readonly networkId: string;
```

- *Type:* `string`

Managed Blockchain network identifier generated on construction.

---

##### `networkName`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkName" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkname"></a>

```typescript
public readonly networkName: string;
```

- *Type:* `string`

Managed Blockchain network name.

---

##### `nodes`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.nodes" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynodes"></a>

```typescript
public readonly nodes: HyperledgerFabricNode[];
```

- *Type:* [`cdk-hyperledger-fabric-network.HyperledgerFabricNode`](#cdk-hyperledger-fabric-network.HyperledgerFabricNode)[]

List of nodes created in the network.

---

##### `ordererEndpoint`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.ordererEndpoint" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyordererendpoint"></a>

```typescript
public readonly ordererEndpoint: string;
```

- *Type:* `string`

Managed Blockchain network ordering service endpoint.

---

##### `proposalDurationInHours`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.proposalDurationInHours" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyproposaldurationinhours"></a>

```typescript
public readonly proposalDurationInHours: number;
```

- *Type:* `number`

The duration from the time that a proposal is created until it expires.

---

##### `thresholdComparator`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdComparator" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdcomparator"></a>

```typescript
public readonly thresholdComparator: ThresholdComparator;
```

- *Type:* [`cdk-hyperledger-fabric-network.ThresholdComparator`](#cdk-hyperledger-fabric-network.ThresholdComparator)

Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved.

---

##### `thresholdPercentage`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdPercentage" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdpercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* `number`

The percentage of votes among all members that must be yes for a proposal to be approved.

---

##### `vpcEndpointServiceName`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.vpcEndpointServiceName" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyvpcendpointservicename"></a>

```typescript
public readonly vpcEndpointServiceName: string;
```

- *Type:* `string`

Managed Blockchain network VPC endpoint service name.

---


### HyperledgerFabricNode <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode" id="cdkhyperledgerfabricnetworkhyperledgerfabricnode"></a>

Creates a Hyperledger Fabric node on an Amazon Managed Blockchain network.

#### Initializers <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeinitializer"></a>

```typescript
import { HyperledgerFabricNode } from 'cdk-hyperledger-fabric-network'

new HyperledgerFabricNode(scope: HyperledgerFabricNetwork, id: string, props?: HyperledgerFabricNodeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterscope)<span title="Required">*</span> | [`cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#cdk-hyperledger-fabric-network.HyperledgerFabricNetwork) | *No description.* |
| [`id`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterprops) | [`cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.scope" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterscope"></a>

- *Type:* [`cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#cdk-hyperledger-fabric-network.HyperledgerFabricNetwork)

---

##### `id`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.id" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.props" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterprops"></a>

- *Type:* [`cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`fetchData`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodefetchdata) | *No description.* |

---

##### `fetchData` <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.fetchData" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodefetchdata"></a>

```typescript
public fetchData(dataSdkCallPolicy: AwsCustomResourcePolicy)
```

###### `dataSdkCallPolicy`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.dataSdkCallPolicy" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterdatasdkcallpolicy"></a>

- *Type:* [`aws-cdk-lib.custom_resources.AwsCustomResourcePolicy`](#aws-cdk-lib.custom_resources.AwsCustomResourcePolicy)

---

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`constructNodes`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodeconstructnodes) | *No description.* |

---

##### `constructNodes` <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.constructNodes" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeconstructnodes"></a>

```typescript
import { HyperledgerFabricNode } from 'cdk-hyperledger-fabric-network'

HyperledgerFabricNode.constructNodes(scope: HyperledgerFabricNetwork, nodeProps?: HyperledgerFabricNodeProps[])
```

###### `scope`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.scope" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterscope"></a>

- *Type:* [`cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#cdk-hyperledger-fabric-network.HyperledgerFabricNetwork)

---

###### `nodeProps`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.nodeProps" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeparameternodeprops"></a>

- *Type:* [`cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)[]

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`availabilityZone`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyavailabilityzone)<span title="Required">*</span> | `string` | The Availability Zone in which the node exists. |
| [`instanceType`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyinstancetype)<span title="Required">*</span> | [`cdk-hyperledger-fabric-network.InstanceType`](#cdk-hyperledger-fabric-network.InstanceType) | The Amazon Managed Blockchain instance type for the node. |
| [`memberId`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertymemberid)<span title="Required">*</span> | `string` | Managed Blockchain member identifier. |
| [`networkId`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynetworkid)<span title="Required">*</span> | `string` | Managed Blockchain network identifier. |
| [`nodeId`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynodeid)<span title="Required">*</span> | `string` | Managed Blockchain node identifier generated on construction. |
| [`endpoint`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyendpoint)<span title="Required">*</span> | `string` | *No description.* |
| [`eventEndpoint`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyeventendpoint)<span title="Required">*</span> | `string` | *No description.* |

---

##### `availabilityZone`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.availabilityZone" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyavailabilityzone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* `string`

The Availability Zone in which the node exists.

---

##### `instanceType`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.instanceType" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`cdk-hyperledger-fabric-network.InstanceType`](#cdk-hyperledger-fabric-network.InstanceType)

The Amazon Managed Blockchain instance type for the node.

---

##### `memberId`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.memberId" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertymemberid"></a>

```typescript
public readonly memberId: string;
```

- *Type:* `string`

Managed Blockchain member identifier.

---

##### `networkId`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.networkId" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynetworkid"></a>

```typescript
public readonly networkId: string;
```

- *Type:* `string`

Managed Blockchain network identifier.

---

##### `nodeId`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.nodeId" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynodeid"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* `string`

Managed Blockchain node identifier generated on construction.

---

##### `endpoint`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.endpoint" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyendpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* `string`

---

##### `eventEndpoint`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.eventEndpoint" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyeventendpoint"></a>

```typescript
public readonly eventEndpoint: string;
```

- *Type:* `string`

---


## Structs <a name="Structs" id="structs"></a>

### HyperledgerFabricNetworkProps <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkprops"></a>

Construct properties for `HyperledgerFabricNetwork`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HyperledgerFabricNetworkProps } from 'cdk-hyperledger-fabric-network'

const hyperledgerFabricNetworkProps: HyperledgerFabricNetworkProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`memberName`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymembername)<span title="Required">*</span> | `string` | Managed Blockchain member name. |
| [`networkName`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkname)<span title="Required">*</span> | `string` | Managed Blockchain network name. |
| [`frameworkVersion`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyframeworkversion) | [`cdk-hyperledger-fabric-network.FrameworkVersion`](#cdk-hyperledger-fabric-network.FrameworkVersion) | Hyperledger Fabric framework version. |
| [`memberDescription`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymemberdescription) | `string` | Managed Blockchain member description. |
| [`networkDescription`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkdescription) | `string` | Managed Blockchain network description. |
| [`networkEdition`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkedition) | [`cdk-hyperledger-fabric-network.NetworkEdition`](#cdk-hyperledger-fabric-network.NetworkEdition) | Managed Blockchain network edition. |
| [`nodes`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynodes) | [`cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)[] | List of nodes to create on the network. |
| [`proposalDurationInHours`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyproposaldurationinhours) | `number` | The duration from the time that a proposal is created until it expires. |
| [`thresholdComparator`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdcomparator) | [`cdk-hyperledger-fabric-network.ThresholdComparator`](#cdk-hyperledger-fabric-network.ThresholdComparator) | Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved. |
| [`thresholdPercentage`](#cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdpercentage) | `number` | The percentage of votes among all members that must be yes for a proposal to be approved. |

---

##### `memberName`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberName" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymembername"></a>

```typescript
public readonly memberName: string;
```

- *Type:* `string`

Managed Blockchain member name.

---

##### `networkName`<sup>Required</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkName" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkname"></a>

```typescript
public readonly networkName: string;
```

- *Type:* `string`

Managed Blockchain network name.

---

##### `frameworkVersion`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.frameworkVersion" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyframeworkversion"></a>

```typescript
public readonly frameworkVersion: FrameworkVersion;
```

- *Type:* [`cdk-hyperledger-fabric-network.FrameworkVersion`](#cdk-hyperledger-fabric-network.FrameworkVersion)
- *Default:* FrameworkVersion.VERSION_1_4

Hyperledger Fabric framework version.

---

##### `memberDescription`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberDescription" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymemberdescription"></a>

```typescript
public readonly memberDescription: string;
```

- *Type:* `string`
- *Default:* Set to match member name

Managed Blockchain member description.

---

##### `networkDescription`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkDescription" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkdescription"></a>

```typescript
public readonly networkDescription: string;
```

- *Type:* `string`
- *Default:* Set to match network name

Managed Blockchain network description.

---

##### `networkEdition`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkEdition" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkedition"></a>

```typescript
public readonly networkEdition: NetworkEdition;
```

- *Type:* [`cdk-hyperledger-fabric-network.NetworkEdition`](#cdk-hyperledger-fabric-network.NetworkEdition)
- *Default:* NetworkEdition.STANDARD

Managed Blockchain network edition.

---

##### `nodes`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.nodes" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynodes"></a>

```typescript
public readonly nodes: HyperledgerFabricNodeProps[];
```

- *Type:* [`cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)[]
- *Default:* One node with default configuration

List of nodes to create on the network.

---

##### `proposalDurationInHours`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.proposalDurationInHours" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyproposaldurationinhours"></a>

```typescript
public readonly proposalDurationInHours: number;
```

- *Type:* `number`
- *Default:* 24 hours

The duration from the time that a proposal is created until it expires.

---

##### `thresholdComparator`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdComparator" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdcomparator"></a>

```typescript
public readonly thresholdComparator: ThresholdComparator;
```

- *Type:* [`cdk-hyperledger-fabric-network.ThresholdComparator`](#cdk-hyperledger-fabric-network.ThresholdComparator)
- *Default:* GREATER_THAN

Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved.

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdPercentage" id="cdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdpercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* `number`
- *Default:* 50 percent

The percentage of votes among all members that must be yes for a proposal to be approved.

---

### HyperledgerFabricNodeProps <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodeprops"></a>

Construct properties for `HyperledgerFabricNode`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HyperledgerFabricNodeProps } from 'cdk-hyperledger-fabric-network'

const hyperledgerFabricNodeProps: HyperledgerFabricNodeProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`availabilityZone`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyavailabilityzone) | `string` | The Availability Zone in which the node will be created. |
| [`instanceType`](#cdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyinstancetype) | [`cdk-hyperledger-fabric-network.InstanceType`](#cdk-hyperledger-fabric-network.InstanceType) | The Amazon Managed Blockchain instance type for the node. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.availabilityZone" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyavailabilityzone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* `string`
- *Default:* The first AZ in the region

The Availability Zone in which the node will be created.

---

##### `instanceType`<sup>Optional</sup> <a name="cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.instanceType" id="cdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`cdk-hyperledger-fabric-network.InstanceType`](#cdk-hyperledger-fabric-network.InstanceType)
- *Default:* BURSTABLE3_SMALL

The Amazon Managed Blockchain instance type for the node.

---



## Enums <a name="Enums" id="enums"></a>

### FrameworkVersion <a name="FrameworkVersion" id="frameworkversion"></a>

| **Name** | **Description** |
| --- | --- |
| [`VERSION_1_2`](#cdkhyperledgerfabricnetworkframeworkversionversion12) | *No description.* |
| [`VERSION_1_4`](#cdkhyperledgerfabricnetworkframeworkversionversion14) | *No description.* |

---

#### `VERSION_1_2` <a name="cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_2" id="cdkhyperledgerfabricnetworkframeworkversionversion12"></a>

---


#### `VERSION_1_4` <a name="cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_4" id="cdkhyperledgerfabricnetworkframeworkversionversion14"></a>

---


### InstanceType <a name="InstanceType" id="instancetype"></a>

| **Name** | **Description** |
| --- | --- |
| [`BURSTABLE3_SMALL`](#cdkhyperledgerfabricnetworkinstancetypeburstable3small) | *No description.* |
| [`BURSTABLE3_MEDIUM`](#cdkhyperledgerfabricnetworkinstancetypeburstable3medium) | *No description.* |
| [`BURSTABLE3_LARGE`](#cdkhyperledgerfabricnetworkinstancetypeburstable3large) | *No description.* |
| [`BURSTABLE3_XLARGE`](#cdkhyperledgerfabricnetworkinstancetypeburstable3xlarge) | *No description.* |
| [`STANDARD5_LARGE`](#cdkhyperledgerfabricnetworkinstancetypestandard5large) | *No description.* |
| [`STANDARD5_XLARGE`](#cdkhyperledgerfabricnetworkinstancetypestandard5xlarge) | *No description.* |
| [`STANDARD5_XLARGE2`](#cdkhyperledgerfabricnetworkinstancetypestandard5xlarge2) | *No description.* |
| [`STANDARD5_XLARGE4`](#cdkhyperledgerfabricnetworkinstancetypestandard5xlarge4) | *No description.* |
| [`COMPUTE5_LARGE`](#cdkhyperledgerfabricnetworkinstancetypecompute5large) | *No description.* |
| [`COMPUTE5_XLARGE`](#cdkhyperledgerfabricnetworkinstancetypecompute5xlarge) | *No description.* |
| [`COMPUTE5_XLARGE2`](#cdkhyperledgerfabricnetworkinstancetypecompute5xlarge2) | *No description.* |
| [`COMPUTE5_XLARGE4`](#cdkhyperledgerfabricnetworkinstancetypecompute5xlarge4) | *No description.* |

---

Supported instance types for Managed Blockchain nodes.

#### `BURSTABLE3_SMALL` <a name="cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_SMALL" id="cdkhyperledgerfabricnetworkinstancetypeburstable3small"></a>

---


#### `BURSTABLE3_MEDIUM` <a name="cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_MEDIUM" id="cdkhyperledgerfabricnetworkinstancetypeburstable3medium"></a>

---


#### `BURSTABLE3_LARGE` <a name="cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_LARGE" id="cdkhyperledgerfabricnetworkinstancetypeburstable3large"></a>

---


#### `BURSTABLE3_XLARGE` <a name="cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_XLARGE" id="cdkhyperledgerfabricnetworkinstancetypeburstable3xlarge"></a>

---


#### `STANDARD5_LARGE` <a name="cdk-hyperledger-fabric-network.InstanceType.STANDARD5_LARGE" id="cdkhyperledgerfabricnetworkinstancetypestandard5large"></a>

---


#### `STANDARD5_XLARGE` <a name="cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE" id="cdkhyperledgerfabricnetworkinstancetypestandard5xlarge"></a>

---


#### `STANDARD5_XLARGE2` <a name="cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE2" id="cdkhyperledgerfabricnetworkinstancetypestandard5xlarge2"></a>

---


#### `STANDARD5_XLARGE4` <a name="cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE4" id="cdkhyperledgerfabricnetworkinstancetypestandard5xlarge4"></a>

---


#### `COMPUTE5_LARGE` <a name="cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_LARGE" id="cdkhyperledgerfabricnetworkinstancetypecompute5large"></a>

---


#### `COMPUTE5_XLARGE` <a name="cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE" id="cdkhyperledgerfabricnetworkinstancetypecompute5xlarge"></a>

---


#### `COMPUTE5_XLARGE2` <a name="cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE2" id="cdkhyperledgerfabricnetworkinstancetypecompute5xlarge2"></a>

---


#### `COMPUTE5_XLARGE4` <a name="cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE4" id="cdkhyperledgerfabricnetworkinstancetypecompute5xlarge4"></a>

---


### NetworkEdition <a name="NetworkEdition" id="networkedition"></a>

| **Name** | **Description** |
| --- | --- |
| [`STARTER`](#cdkhyperledgerfabricnetworknetworkeditionstarter) | *No description.* |
| [`STANDARD`](#cdkhyperledgerfabricnetworknetworkeditionstandard) | *No description.* |

---

#### `STARTER` <a name="cdk-hyperledger-fabric-network.NetworkEdition.STARTER" id="cdkhyperledgerfabricnetworknetworkeditionstarter"></a>

---


#### `STANDARD` <a name="cdk-hyperledger-fabric-network.NetworkEdition.STANDARD" id="cdkhyperledgerfabricnetworknetworkeditionstandard"></a>

---


### ThresholdComparator <a name="ThresholdComparator" id="thresholdcomparator"></a>

| **Name** | **Description** |
| --- | --- |
| [`GREATER_THAN`](#cdkhyperledgerfabricnetworkthresholdcomparatorgreaterthan) | *No description.* |
| [`GREATER_THAN_OR_EQUAL_TO`](#cdkhyperledgerfabricnetworkthresholdcomparatorgreaterthanorequalto) | *No description.* |

---

#### `GREATER_THAN` <a name="cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN" id="cdkhyperledgerfabricnetworkthresholdcomparatorgreaterthan"></a>

---


#### `GREATER_THAN_OR_EQUAL_TO` <a name="cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN_OR_EQUAL_TO" id="cdkhyperledgerfabricnetworkthresholdcomparatorgreaterthanorequalto"></a>

---

