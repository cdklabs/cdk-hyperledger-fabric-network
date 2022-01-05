# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0


import os

import aws_cdk as cdk

import cdk_hyperledger_fabric_network as hyperledger


class HyperledgerTestStack(cdk.Stack):

    def __init__(self, scope, id, **kwargs):
        super().__init__(scope, id, **kwargs)
        network = hyperledger.HyperledgerFabricNetwork(
            self, 'MyNetwork',
            network_name='IntegrationTestNetwork',
            member_name='IntegrationTestMember',
            nodes=[
                {'availability_zone': 'us-east-1a', 'instance_type': hyperledger.InstanceType.STANDARD5_LARGE},
                {'availability_zone': 'us-east-1b', 'instance_yype': hyperledger.InstanceType.STANDARD5_LARGE},
            ],
        )
        cdk.CfnOutput(
            self, 'NetworkId',
            description='Managed Blockchain network identifier',
            value=network.networkId,
        )
        cdk.CfnOutput(
            self, 'MemberId',
            description='Managed Blockchain member identifier',
            value=network.memberId,
        )
        cdk.CfnOutput(
            self, 'VpcEndpointServiceName',
            description='Managed Blockchain network VPC endpoint service name',
            value=network.vpcEndpointServiceName,
        )
        cdk.CfnOutput(
            self, 'OrdererEndpoint',
            description='Managed Blockchain network ordering service endpoint',
            value=network.ordererEndpoint,
        )
        cdk.CfnOutput(
            self, 'CaEndpoint',
            description='Managed Blockchain member CA endpoint',
            value=network.caEndpoint,
        )
        cdk.CfnOutput(
            self, 'AdminPasswordArn',
            description='Secret ARN for the Hyperledger Fabric admin password',
            value=network.adminPasswordSecret.secretFullArn or network.adminPasswordSecret.secretArn,
        )
        cdk.CfnOutput(
            self, 'AdminPrivateKeyArn',
            description='Secret ARN for Hyperledger Fabric admin private key',
            value=network.adminPrivateKeySecret.secretFullArn or network.adminPrivateKeySecret.secretArn,
        )
        cdk.CfnOutput(
            self, 'AdminSignedCertArn',
            description='Secret ARN for Hyperledger Fabric admin signed certificate',
            value=network.adminSignedCertSecret.secretFullArn or network.adminSignedCertSecret.secretArn,
        )
        cdk.CfnOutput(
            self, 'NodeIds',
            description='Comma-separated list of Managed Blockchain node identifiers',
            value=','.join(n.nodeId for n in network.nodes),
        )
        cdk.CfnOutput(
            self, 'NodeEndpoints',
            description='Comma-separated list of Managed Blockchain node endpoints',
            value=','.join(n.endpoint for n in network.nodes),
        )
        cdk.CfnOutput(
            self, 'NodeEventEndpoints',
            description='Comma-separated list of Managed Blockchain node event endpoints',
            value=','.join(n.eventEndpoint for n in network.nodes),
        )


app = cdk.App()

HyperledgerTestStack(
    app, 'HyperledgerTestStack',
    env={
        'account': os.environ['CDK_DEFAULT_ACCOUNT'],
        'region': os.environ['CDK_DEFAULT_REGION'],
    }
)
