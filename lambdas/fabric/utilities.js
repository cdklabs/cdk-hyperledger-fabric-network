const {
  GetObjectCommand,
  S3Client,
} = require('@aws-sdk/client-s3');

const {
  GetSecretValueCommand,
  PutSecretValueCommand,
  SecretsManagerClient,
} = require('@aws-sdk/client-secrets-manager');

const s3Client = new S3Client();
const smClient = new SecretsManagerClient();

// Convert a ReadableStream to a string
async function streamToString(stream) {
  stream.setEncoding('utf8');
  let data = '';
  for await (const chunk of stream) { /* eslint-disable-line no-restricted-syntax */
    data += chunk;
  }
  return data;
}

// Extract the name from a CA endpoint
function getCaName(caEndpoint) {
  const caName = caEndpoint.split('.')[1].split('-');
  caName[1] = caName[1].toUpperCase();
  return caName.join('-');
}

// Retrieve an object from S3
async function getS3Object(bucketName, key) {
  const objectData = await s3Client.send(new GetObjectCommand({ Bucket: bucketName, Key: key }));
  return streamToString(objectData.Body);
}

// Retrieve a secret from Secrets Manager
async function getSecret(secretArn) {
  const secretData = await smClient.send(new GetSecretValueCommand({ SecretId: secretArn }));
  return secretData.SecretString;
}

// Store a secret in Secrets Manager
async function putSecret(secretArn, secret) {
  return smClient.send(new PutSecretValueCommand({ SecretId: secretArn, SecretString: secret }));
}

module.exports = {
  getCaName,
  getS3Object,
  getSecret,
  putSecret,
};
