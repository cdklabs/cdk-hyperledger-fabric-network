const FabricCAClient = require('fabric-ca-client');
const utilities = require('./utilities');

// Extract environment variables
const adminPasswordArn = process.env.ADMIN_PASSWORD_ARN;
const caEndpoint = process.env.CA_ENDPOINT;
const privateKeyArn = process.env.PRIVATE_KEY_ARN;
const signedCertArn = process.env.SIGNED_CERT_ARN;
const tlsCertBucket = process.env.TLS_CERT_BUCKET;
const tlsCertKey = process.env.TLS_CERT_KEY;

const caUrl = `https://${caEndpoint}`;
const caName = utilities.getCaName(caEndpoint);

// Enroll the admin only on creation
exports.handler = async (event) => {
  if (event.RequestType === 'Create') {
    try {
      // Get the TLS cert from S3
      const caTlsCert = await utilities.getS3Object(tlsCertBucket, tlsCertKey);
      // Get the admin credentials from Secrets Manager
      const adminPwd = await utilities.getSecret(adminPasswordArn);
      // Create a new client for interacting with the CA
      const ca = new FabricCAClient(caUrl, { trustedRoots: caTlsCert, verify: false }, caName);
      // Enroll the admin user, and import the new identity into Secrets Manager
      const enrollment = await ca.enroll({ enrollmentID: 'admin', enrollmentSecret: adminPwd });
      await utilities.putSecret(privateKeyArn, enrollment.key.toBytes());
      await utilities.putSecret(signedCertArn, enrollment.certificate);
    } catch (error) {
      console.error(`Failed to enroll admin user: ${error}`);
    }
  }
};
