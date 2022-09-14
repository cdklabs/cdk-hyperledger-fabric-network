# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### HyperledgerFabricClient <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclient"></a>

Creates a VPC and endpoint that allows Hyperledger Fabric client to interact with the Hyperledger Fabric endpoints that Amazon Managed Blockchain exposes for the member and network resources.

#### Initializers <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.Initializer" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientinitializer"></a>

```typescript
import { HyperledgerFabricClient } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricClient(scope: HyperledgerFabricNetwork, id: string, props?: HyperledgerFabricClientProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientparameterscope)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork) | *No description.* |
| [`id`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientparameterprops) | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.parameter.scope" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientparameterscope"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork)

---

##### `id`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.parameter.id" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.parameter.props" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientparameterprops"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The client VPC that has endpoint to access the Amazon Managed Blockchain. |
| [`vpcEndpoint`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientpropertyvpcendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint`](#aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint) | Managed Blockchain network VPC endpoint. |

---

##### `vpc`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.vpc" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The client VPC that has endpoint to access the Amazon Managed Blockchain.

---

##### `vpcEndpoint`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient.property.vpcEndpoint" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientpropertyvpcendpoint"></a>

```typescript
public readonly vpcEndpoint: InterfaceVpcEndpoint;
```

- *Type:* [`aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint`](#aws-cdk-lib.aws_ec2.InterfaceVpcEndpoint)

Managed Blockchain network VPC endpoint.

---


### HyperledgerFabricNetwork <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetwork"></a>

Creates a Hyperledger Fabric network on Amazon Managed Blockchain.

#### Initializers <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.Initializer" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkinitializer"></a>

```typescript
import { HyperledgerFabricNetwork } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricNetwork(scope: Construct, id: string, props: HyperledgerFabricNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterprops)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.parameter.scope" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.parameter.id" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.parameter.props" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkparameterprops"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`adminPasswordSecret`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminpasswordsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret ARN for the Hyperledger Fabric admin password. |
| [`adminPrivateKeySecret`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminprivatekeysecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret for Hyperledger Fabric admin private key. |
| [`adminSignedCertSecret`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminsignedcertsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret for Hyperledger Fabric admin signed certificate. |
| [`caEndpoint`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertycaendpoint)<span title="Required">*</span> | `string` | Managed Blockchain member CA endpoint. |
| [`client`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyclient)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient) | The client network to interact with the Hyperledger Fabric network. |
| [`enableCaLogging`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyenablecalogging)<span title="Required">*</span> | `boolean` | The configuration to enable or disable certificate authority logging. |
| [`enrollAdmin`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyenrolladmin)<span title="Required">*</span> | `boolean` | Configuration to enable/disable admin user enrollment. |
| [`frameworkVersion`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyframeworkversion)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion`](#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion) | Hyperledger Fabric framework version. |
| [`memberDescription`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberdescription)<span title="Required">*</span> | `string` | Managed Blockchain member description. |
| [`memberId`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberid)<span title="Required">*</span> | `string` | Managed Blockchain member identifier generated on construction. |
| [`memberName`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymembername)<span title="Required">*</span> | `string` | Managed Blockchain member name. |
| [`networkDescription`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkdescription)<span title="Required">*</span> | `string` | Managed Blockchain network description. |
| [`networkEdition`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkedition)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition`](#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition) | Managed Blockchain network edition. |
| [`networkId`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkid)<span title="Required">*</span> | `string` | Managed Blockchain network identifier generated on construction. |
| [`networkName`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkname)<span title="Required">*</span> | `string` | Managed Blockchain network name. |
| [`nodes`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynodes)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode)[] | List of nodes created in the network. |
| [`ordererEndpoint`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyordererendpoint)<span title="Required">*</span> | `string` | Managed Blockchain network ordering service endpoint. |
| [`proposalDurationInHours`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyproposaldurationinhours)<span title="Required">*</span> | `number` | The duration from the time that a proposal is created until it expires. |
| [`thresholdComparator`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdcomparator)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator`](#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator) | Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved. |
| [`thresholdPercentage`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdpercentage)<span title="Required">*</span> | `number` | The percentage of votes among all members that must be yes for a proposal to be approved. |
| [`users`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyusers)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser)[] | List of users registered with CA. |
| [`vpcEndpointServiceName`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyvpcendpointservicename)<span title="Required">*</span> | `string` | Managed Blockchain network VPC endpoint service name. |

---

##### `adminPasswordSecret`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPasswordSecret" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminpasswordsecret"></a>

```typescript
public readonly adminPasswordSecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret ARN for the Hyperledger Fabric admin password.

---

##### `adminPrivateKeySecret`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminPrivateKeySecret" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminprivatekeysecret"></a>

```typescript
public readonly adminPrivateKeySecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret for Hyperledger Fabric admin private key.

---

##### `adminSignedCertSecret`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.adminSignedCertSecret" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyadminsignedcertsecret"></a>

```typescript
public readonly adminSignedCertSecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret for Hyperledger Fabric admin signed certificate.

---

##### `caEndpoint`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.caEndpoint" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertycaendpoint"></a>

```typescript
public readonly caEndpoint: string;
```

- *Type:* `string`

Managed Blockchain member CA endpoint.

---

##### `client`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.client" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyclient"></a>

```typescript
public readonly client: HyperledgerFabricClient;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClient)

The client network to interact with the Hyperledger Fabric network.

---

##### `enableCaLogging`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.enableCaLogging" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyenablecalogging"></a>

```typescript
public readonly enableCaLogging: boolean;
```

- *Type:* `boolean`

The configuration to enable or disable certificate authority logging.

---

##### `enrollAdmin`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.enrollAdmin" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyenrolladmin"></a>

```typescript
public readonly enrollAdmin: boolean;
```

- *Type:* `boolean`

Configuration to enable/disable admin user enrollment.

---

##### `frameworkVersion`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.frameworkVersion" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyframeworkversion"></a>

```typescript
public readonly frameworkVersion: FrameworkVersion;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion`](#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion)

Hyperledger Fabric framework version.

---

##### `memberDescription`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberDescription" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberdescription"></a>

```typescript
public readonly memberDescription: string;
```

- *Type:* `string`

Managed Blockchain member description.

---

##### `memberId`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberId" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymemberid"></a>

```typescript
public readonly memberId: string;
```

- *Type:* `string`

Managed Blockchain member identifier generated on construction.

---

##### `memberName`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.memberName" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertymembername"></a>

```typescript
public readonly memberName: string;
```

- *Type:* `string`

Managed Blockchain member name.

---

##### `networkDescription`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkDescription" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkdescription"></a>

```typescript
public readonly networkDescription: string;
```

- *Type:* `string`

Managed Blockchain network description.

---

##### `networkEdition`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkEdition" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkedition"></a>

```typescript
public readonly networkEdition: NetworkEdition;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition`](#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition)

Managed Blockchain network edition.

---

##### `networkId`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkId" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkid"></a>

```typescript
public readonly networkId: string;
```

- *Type:* `string`

Managed Blockchain network identifier generated on construction.

---

##### `networkName`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.networkName" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynetworkname"></a>

```typescript
public readonly networkName: string;
```

- *Type:* `string`

Managed Blockchain network name.

---

##### `nodes`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.nodes" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertynodes"></a>

```typescript
public readonly nodes: HyperledgerFabricNode[];
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode)[]

List of nodes created in the network.

---

##### `ordererEndpoint`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.ordererEndpoint" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyordererendpoint"></a>

```typescript
public readonly ordererEndpoint: string;
```

- *Type:* `string`

Managed Blockchain network ordering service endpoint.

---

##### `proposalDurationInHours`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.proposalDurationInHours" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyproposaldurationinhours"></a>

```typescript
public readonly proposalDurationInHours: number;
```

- *Type:* `number`

The duration from the time that a proposal is created until it expires.

---

##### `thresholdComparator`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdComparator" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdcomparator"></a>

```typescript
public readonly thresholdComparator: ThresholdComparator;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator`](#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator)

Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved.

---

##### `thresholdPercentage`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.thresholdPercentage" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertythresholdpercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* `number`

The percentage of votes among all members that must be yes for a proposal to be approved.

---

##### `users`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.users" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyusers"></a>

```typescript
public readonly users: HyperledgerFabricUser[];
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser)[]

List of users registered with CA.

---

##### `vpcEndpointServiceName`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork.property.vpcEndpointServiceName" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropertyvpcendpointservicename"></a>

```typescript
public readonly vpcEndpointServiceName: string;
```

- *Type:* `string`

Managed Blockchain network VPC endpoint service name.

---


### HyperledgerFabricNode <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnode"></a>

Creates a Hyperledger Fabric node on an Amazon Managed Blockchain network.

#### Initializers <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.Initializer" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeinitializer"></a>

```typescript
import { HyperledgerFabricNode } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricNode(scope: HyperledgerFabricNetwork, id: string, props?: HyperledgerFabricNodeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterscope)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork) | *No description.* |
| [`id`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterprops) | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.scope" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterscope"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork)

---

##### `id`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.id" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.props" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterprops"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`configureLogging`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeconfigurelogging) | Configure logging for the node via SDK call; |
| [`fetchData`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodefetchdata) | Populate the output properties that must be fetched via SDK call; |

---

##### `configureLogging` <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.configureLogging" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeconfigurelogging"></a>

```typescript
public configureLogging(sdkCallPolicy: AwsCustomResourcePolicy)
```

###### `sdkCallPolicy`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.sdkCallPolicy" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparametersdkcallpolicy"></a>

- *Type:* [`aws-cdk-lib.custom_resources.AwsCustomResourcePolicy`](#aws-cdk-lib.custom_resources.AwsCustomResourcePolicy)

---

##### `fetchData` <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.fetchData" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodefetchdata"></a>

```typescript
public fetchData(dataSdkCallPolicy: AwsCustomResourcePolicy)
```

###### `dataSdkCallPolicy`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.dataSdkCallPolicy" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterdatasdkcallpolicy"></a>

- *Type:* [`aws-cdk-lib.custom_resources.AwsCustomResourcePolicy`](#aws-cdk-lib.custom_resources.AwsCustomResourcePolicy)

---

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`constructNodes`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeconstructnodes) | Build out a list of HyperledgerFabricNode constructs given a list of input property objects; |

---

##### `constructNodes` <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.constructNodes" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeconstructnodes"></a>

```typescript
import { HyperledgerFabricNode } from '@cdklabs/cdk-hyperledger-fabric-network'

HyperledgerFabricNode.constructNodes(scope: HyperledgerFabricNetwork, nodeProps?: HyperledgerFabricNodeProps[])
```

###### `scope`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.scope" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameterscope"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork)

---

###### `nodeProps`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.parameter.nodeProps" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeparameternodeprops"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)[]

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`availabilityZone`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyavailabilityzone)<span title="Required">*</span> | `string` | The Availability Zone in which the node exists. |
| [`enableChaincodeLogging`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyenablechaincodelogging)<span title="Required">*</span> | `boolean` | The configuration to enable or disable chaincode logging. |
| [`enableNodeLogging`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyenablenodelogging)<span title="Required">*</span> | `boolean` | The configuration to enable or disable node logging. |
| [`instanceType`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyinstancetype)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.InstanceType`](#@cdklabs/cdk-hyperledger-fabric-network.InstanceType) | The Amazon Managed Blockchain instance type for the node. |
| [`memberId`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertymemberid)<span title="Required">*</span> | `string` | Managed Blockchain member identifier. |
| [`networkId`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynetworkid)<span title="Required">*</span> | `string` | Managed Blockchain network identifier. |
| [`nodeId`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynodeid)<span title="Required">*</span> | `string` | Managed Blockchain node identifier generated on construction. |
| [`endpoint`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyendpoint)<span title="Required">*</span> | `string` | *No description.* |
| [`eventEndpoint`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyeventendpoint)<span title="Required">*</span> | `string` | *No description.* |

---

##### `availabilityZone`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.availabilityZone" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyavailabilityzone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* `string`

The Availability Zone in which the node exists.

---

##### `enableChaincodeLogging`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.enableChaincodeLogging" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyenablechaincodelogging"></a>

```typescript
public readonly enableChaincodeLogging: boolean;
```

- *Type:* `boolean`

The configuration to enable or disable chaincode logging.

---

##### `enableNodeLogging`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.enableNodeLogging" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyenablenodelogging"></a>

```typescript
public readonly enableNodeLogging: boolean;
```

- *Type:* `boolean`

The configuration to enable or disable node logging.

---

##### `instanceType`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.instanceType" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.InstanceType`](#@cdklabs/cdk-hyperledger-fabric-network.InstanceType)

The Amazon Managed Blockchain instance type for the node.

---

##### `memberId`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.memberId" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertymemberid"></a>

```typescript
public readonly memberId: string;
```

- *Type:* `string`

Managed Blockchain member identifier.

---

##### `networkId`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.networkId" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynetworkid"></a>

```typescript
public readonly networkId: string;
```

- *Type:* `string`

Managed Blockchain network identifier.

---

##### `nodeId`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.nodeId" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertynodeid"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* `string`

Managed Blockchain node identifier generated on construction.

---

##### `endpoint`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.endpoint" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyendpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* `string`

---

##### `eventEndpoint`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNode.property.eventEndpoint" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropertyeventendpoint"></a>

```typescript
public readonly eventEndpoint: string;
```

- *Type:* `string`

---


### HyperledgerFabricUser <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuser"></a>

Creates custom resources to register and enroll users identities with the CA using the fabric-ca-client SDK.

#### Initializers <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.Initializer" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserinitializer"></a>

```typescript
import { HyperledgerFabricUser } from '@cdklabs/cdk-hyperledger-fabric-network'

new HyperledgerFabricUser(scope: HyperledgerFabricNetwork, id: string, props: HyperledgerFabricUserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserparameterscope)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork) | *No description.* |
| [`id`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserparameterprops)<span title="Required">*</span> | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.parameter.scope" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserparameterscope"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetwork)

---

##### `id`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.parameter.id" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.parameter.props" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserparameterprops"></a>

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`affiliation`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyaffiliation)<span title="Required">*</span> | `string` | User's affiliation to the member. |
| [`userId`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyuserid)<span title="Required">*</span> | `string` | User ID registered with CA. |
| [`userPrivateKeySecret`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyuserprivatekeysecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret for user private key. |
| [`userSignedCertSecret`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyusersignedcertsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | Secret for user signed certificate. |

---

##### `affiliation`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.affiliation" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyaffiliation"></a>

```typescript
public readonly affiliation: string;
```

- *Type:* `string`

User's affiliation to the member.

---

##### `userId`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userId" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyuserid"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

User ID registered with CA.

---

##### `userPrivateKeySecret`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userPrivateKeySecret" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyuserprivatekeysecret"></a>

```typescript
public readonly userPrivateKeySecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret for user private key.

---

##### `userSignedCertSecret`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUser.property.userSignedCertSecret" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropertyusersignedcertsecret"></a>

```typescript
public readonly userSignedCertSecret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

Secret for user signed certificate.

---


## Structs <a name="Structs" id="structs"></a>

### HyperledgerFabricClientProps <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientprops"></a>

Construct properties for `HyperledgerFabricVpc`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HyperledgerFabricClientProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricClientProps: HyperledgerFabricClientProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientpropspropertyvpc) | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | Client VPC to create the endpoints. |

---

##### `vpc`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps.property.vpc" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricclientpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

Client VPC to create the endpoints.

If not provided, VPC will be created with the default properties (CIDR-`10.0.0.0/16` and subnets of type `PRIVATE_ISOLATED`)

---

### HyperledgerFabricNetworkProps <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkprops"></a>

Construct properties for `HyperledgerFabricNetwork`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HyperledgerFabricNetworkProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricNetworkProps: HyperledgerFabricNetworkProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`memberName`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymembername)<span title="Required">*</span> | `string` | Managed Blockchain member name. |
| [`networkName`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkname)<span title="Required">*</span> | `string` | Managed Blockchain network name. |
| [`client`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyclient) | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps) | The Client network to interact with the Hyperledger Fabric network. |
| [`enableCaLogging`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyenablecalogging) | `boolean` | The configuration to enable or disable certificate authority logging. |
| [`enrollAdmin`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyenrolladmin) | `boolean` | Configuration to enable/disable enrollment of admin user. |
| [`frameworkVersion`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyframeworkversion) | [`@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion`](#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion) | Hyperledger Fabric framework version. |
| [`memberDescription`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymemberdescription) | `string` | Managed Blockchain member description. |
| [`networkDescription`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkdescription) | `string` | Managed Blockchain network description. |
| [`networkEdition`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkedition) | [`@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition`](#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition) | Managed Blockchain network edition. |
| [`nodes`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynodes) | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)[] | List of nodes to create on the network. |
| [`proposalDurationInHours`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyproposaldurationinhours) | `number` | The duration from the time that a proposal is created until it expires. |
| [`thresholdComparator`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdcomparator) | [`@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator`](#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator) | Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved. |
| [`thresholdPercentage`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdpercentage) | `number` | The percentage of votes among all members that must be yes for a proposal to be approved. |
| [`users`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyusers) | [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps)[] | List of users to register with Fabric CA Note: enrollAdmin property has to be enabled for registering users. |

---

##### `memberName`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberName" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymembername"></a>

```typescript
public readonly memberName: string;
```

- *Type:* `string`

Managed Blockchain member name.

---

##### `networkName`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkName" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkname"></a>

```typescript
public readonly networkName: string;
```

- *Type:* `string`

Managed Blockchain network name.

---

##### `client`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.client" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyclient"></a>

```typescript
public readonly client: HyperledgerFabricClientProps;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricClientProps)
- *Default:* Client network with Default properties (CIDR-`10.0.0.0/16` and subnets of type `PRIVATE_ISOLATED`)

The Client network to interact with the Hyperledger Fabric network.

---

##### `enableCaLogging`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.enableCaLogging" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyenablecalogging"></a>

```typescript
public readonly enableCaLogging: boolean;
```

- *Type:* `boolean`
- *Default:* true

The configuration to enable or disable certificate authority logging.

---

##### `enrollAdmin`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.enrollAdmin" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyenrolladmin"></a>

```typescript
public readonly enrollAdmin: boolean;
```

- *Type:* `boolean`
- *Default:* true

Configuration to enable/disable enrollment of admin user.

---

##### `frameworkVersion`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.frameworkVersion" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyframeworkversion"></a>

```typescript
public readonly frameworkVersion: FrameworkVersion;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion`](#@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion)
- *Default:* FrameworkVersion.VERSION_1_4

Hyperledger Fabric framework version.

---

##### `memberDescription`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.memberDescription" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertymemberdescription"></a>

```typescript
public readonly memberDescription: string;
```

- *Type:* `string`
- *Default:* Set to match member name

Managed Blockchain member description.

---

##### `networkDescription`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkDescription" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkdescription"></a>

```typescript
public readonly networkDescription: string;
```

- *Type:* `string`
- *Default:* Set to match network name

Managed Blockchain network description.

---

##### `networkEdition`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.networkEdition" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynetworkedition"></a>

```typescript
public readonly networkEdition: NetworkEdition;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition`](#@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition)
- *Default:* NetworkEdition.STANDARD

Managed Blockchain network edition.

---

##### `nodes`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.nodes" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertynodes"></a>

```typescript
public readonly nodes: HyperledgerFabricNodeProps[];
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps)[]
- *Default:* One node with default configuration

List of nodes to create on the network.

---

##### `proposalDurationInHours`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.proposalDurationInHours" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyproposaldurationinhours"></a>

```typescript
public readonly proposalDurationInHours: number;
```

- *Type:* `number`
- *Default:* 24 hours

The duration from the time that a proposal is created until it expires.

---

##### `thresholdComparator`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdComparator" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdcomparator"></a>

```typescript
public readonly thresholdComparator: ThresholdComparator;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator`](#@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator)
- *Default:* GREATER_THAN

Determines whether the yes votes must be greater than the threshold percentage or must be greater than or equal to the threhold percentage to be approved.

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.thresholdPercentage" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertythresholdpercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* `number`
- *Default:* 50 percent

The percentage of votes among all members that must be yes for a proposal to be approved.

---

##### `users`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNetworkProps.property.users" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnetworkpropspropertyusers"></a>

```typescript
public readonly users: HyperledgerFabricUserProps[];
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps`](#@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps)[]

List of users to register with Fabric CA Note: enrollAdmin property has to be enabled for registering users.

---

### HyperledgerFabricNodeProps <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodeprops"></a>

Construct properties for `HyperledgerFabricNode`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HyperledgerFabricNodeProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricNodeProps: HyperledgerFabricNodeProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`availabilityZone`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyavailabilityzone) | `string` | The Availability Zone in which the node will be created. |
| [`enableChaincodeLogging`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyenablechaincodelogging) | `boolean` | The configuration to enable or disable chaincode logging. |
| [`enableNodeLogging`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyenablenodelogging) | `boolean` | The configuration to enable or disable node logging. |
| [`instanceType`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyinstancetype) | [`@cdklabs/cdk-hyperledger-fabric-network.InstanceType`](#@cdklabs/cdk-hyperledger-fabric-network.InstanceType) | The Amazon Managed Blockchain instance type for the node. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.availabilityZone" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyavailabilityzone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* `string`
- *Default:* The first AZ in the region

The Availability Zone in which the node will be created.

---

##### `enableChaincodeLogging`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.enableChaincodeLogging" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyenablechaincodelogging"></a>

```typescript
public readonly enableChaincodeLogging: boolean;
```

- *Type:* `boolean`
- *Default:* true

The configuration to enable or disable chaincode logging.

---

##### `enableNodeLogging`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.enableNodeLogging" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyenablenodelogging"></a>

```typescript
public readonly enableNodeLogging: boolean;
```

- *Type:* `boolean`
- *Default:* true

The configuration to enable or disable node logging.

---

##### `instanceType`<sup>Optional</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricNodeProps.property.instanceType" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricnodepropspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`@cdklabs/cdk-hyperledger-fabric-network.InstanceType`](#@cdklabs/cdk-hyperledger-fabric-network.InstanceType)
- *Default:* BURSTABLE3_SMALL

The Amazon Managed Blockchain instance type for the node.

---

### HyperledgerFabricUserProps <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserprops"></a>

Construct properties for `HyperledgerFabricUser`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HyperledgerFabricUserProps } from '@cdklabs/cdk-hyperledger-fabric-network'

const hyperledgerFabricUserProps: HyperledgerFabricUserProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`affilitation`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropspropertyaffilitation)<span title="Required">*</span> | `string` | User's affiliation to the member. |
| [`userId`](#cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropspropertyuserid)<span title="Required">*</span> | `string` | User ID to register with CA. |

---

##### `affilitation`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps.property.affilitation" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropspropertyaffilitation"></a>

```typescript
public readonly affilitation: string;
```

- *Type:* `string`

User's affiliation to the member.

Should be hierarchical with member name as root(`MemberName.Dept1`).

---

##### `userId`<sup>Required</sup> <a name="@cdklabs/cdk-hyperledger-fabric-network.HyperledgerFabricUserProps.property.userId" id="cdklabscdkhyperledgerfabricnetworkhyperledgerfabricuserpropspropertyuserid"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

User ID to register with CA.

---



## Enums <a name="Enums" id="enums"></a>

### FrameworkVersion <a name="FrameworkVersion" id="frameworkversion"></a>

| **Name** | **Description** |
| --- | --- |
| [`VERSION_1_2`](#cdklabscdkhyperledgerfabricnetworkframeworkversionversion12) | *No description.* |
| [`VERSION_1_4`](#cdklabscdkhyperledgerfabricnetworkframeworkversionversion14) | *No description.* |
| [`VERSION_2_2`](#cdklabscdkhyperledgerfabricnetworkframeworkversionversion22) | *No description.* |

---

Define which Hyperledger Fabric framework to use.

#### `VERSION_1_2` <a name="@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_2" id="cdklabscdkhyperledgerfabricnetworkframeworkversionversion12"></a>

---


#### `VERSION_1_4` <a name="@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_1_4" id="cdklabscdkhyperledgerfabricnetworkframeworkversionversion14"></a>

---


#### `VERSION_2_2` <a name="@cdklabs/cdk-hyperledger-fabric-network.FrameworkVersion.VERSION_2_2" id="cdklabscdkhyperledgerfabricnetworkframeworkversionversion22"></a>

---


### InstanceType <a name="InstanceType" id="instancetype"></a>

| **Name** | **Description** |
| --- | --- |
| [`BURSTABLE3_SMALL`](#cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3small) | *No description.* |
| [`BURSTABLE3_MEDIUM`](#cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3medium) | *No description.* |
| [`BURSTABLE3_LARGE`](#cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3large) | *No description.* |
| [`BURSTABLE3_XLARGE`](#cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3xlarge) | *No description.* |
| [`STANDARD5_LARGE`](#cdklabscdkhyperledgerfabricnetworkinstancetypestandard5large) | *No description.* |
| [`STANDARD5_XLARGE`](#cdklabscdkhyperledgerfabricnetworkinstancetypestandard5xlarge) | *No description.* |
| [`STANDARD5_XLARGE2`](#cdklabscdkhyperledgerfabricnetworkinstancetypestandard5xlarge2) | *No description.* |
| [`STANDARD5_XLARGE4`](#cdklabscdkhyperledgerfabricnetworkinstancetypestandard5xlarge4) | *No description.* |
| [`COMPUTE5_LARGE`](#cdklabscdkhyperledgerfabricnetworkinstancetypecompute5large) | *No description.* |
| [`COMPUTE5_XLARGE`](#cdklabscdkhyperledgerfabricnetworkinstancetypecompute5xlarge) | *No description.* |
| [`COMPUTE5_XLARGE2`](#cdklabscdkhyperledgerfabricnetworkinstancetypecompute5xlarge2) | *No description.* |
| [`COMPUTE5_XLARGE4`](#cdklabscdkhyperledgerfabricnetworkinstancetypecompute5xlarge4) | *No description.* |

---

Supported instance types for Managed Blockchain nodes.

#### `BURSTABLE3_SMALL` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_SMALL" id="cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3small"></a>

---


#### `BURSTABLE3_MEDIUM` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_MEDIUM" id="cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3medium"></a>

---


#### `BURSTABLE3_LARGE` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_LARGE" id="cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3large"></a>

---


#### `BURSTABLE3_XLARGE` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.BURSTABLE3_XLARGE" id="cdklabscdkhyperledgerfabricnetworkinstancetypeburstable3xlarge"></a>

---


#### `STANDARD5_LARGE` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_LARGE" id="cdklabscdkhyperledgerfabricnetworkinstancetypestandard5large"></a>

---


#### `STANDARD5_XLARGE` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE" id="cdklabscdkhyperledgerfabricnetworkinstancetypestandard5xlarge"></a>

---


#### `STANDARD5_XLARGE2` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE2" id="cdklabscdkhyperledgerfabricnetworkinstancetypestandard5xlarge2"></a>

---


#### `STANDARD5_XLARGE4` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.STANDARD5_XLARGE4" id="cdklabscdkhyperledgerfabricnetworkinstancetypestandard5xlarge4"></a>

---


#### `COMPUTE5_LARGE` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_LARGE" id="cdklabscdkhyperledgerfabricnetworkinstancetypecompute5large"></a>

---


#### `COMPUTE5_XLARGE` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE" id="cdklabscdkhyperledgerfabricnetworkinstancetypecompute5xlarge"></a>

---


#### `COMPUTE5_XLARGE2` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE2" id="cdklabscdkhyperledgerfabricnetworkinstancetypecompute5xlarge2"></a>

---


#### `COMPUTE5_XLARGE4` <a name="@cdklabs/cdk-hyperledger-fabric-network.InstanceType.COMPUTE5_XLARGE4" id="cdklabscdkhyperledgerfabricnetworkinstancetypecompute5xlarge4"></a>

---


### NetworkEdition <a name="NetworkEdition" id="networkedition"></a>

| **Name** | **Description** |
| --- | --- |
| [`STARTER`](#cdklabscdkhyperledgerfabricnetworknetworkeditionstarter) | *No description.* |
| [`STANDARD`](#cdklabscdkhyperledgerfabricnetworknetworkeditionstandard) | *No description.* |

---

Starter networks are cheaper, but are limited to 2 nodes that can only be from a subset of types (see node.ts for the list).

#### `STARTER` <a name="@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition.STARTER" id="cdklabscdkhyperledgerfabricnetworknetworkeditionstarter"></a>

---


#### `STANDARD` <a name="@cdklabs/cdk-hyperledger-fabric-network.NetworkEdition.STANDARD" id="cdklabscdkhyperledgerfabricnetworknetworkeditionstandard"></a>

---


### ThresholdComparator <a name="ThresholdComparator" id="thresholdcomparator"></a>

| **Name** | **Description** |
| --- | --- |
| [`GREATER_THAN`](#cdklabscdkhyperledgerfabricnetworkthresholdcomparatorgreaterthan) | *No description.* |
| [`GREATER_THAN_OR_EQUAL_TO`](#cdklabscdkhyperledgerfabricnetworkthresholdcomparatorgreaterthanorequalto) | *No description.* |

---

Constants to define ties in voting for new members.

#### `GREATER_THAN` <a name="@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN" id="cdklabscdkhyperledgerfabricnetworkthresholdcomparatorgreaterthan"></a>

---


#### `GREATER_THAN_OR_EQUAL_TO` <a name="@cdklabs/cdk-hyperledger-fabric-network.ThresholdComparator.GREATER_THAN_OR_EQUAL_TO" id="cdklabscdkhyperledgerfabricnetworkthresholdcomparatorgreaterthanorequalto"></a>

---

