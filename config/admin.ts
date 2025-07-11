import crypto from 'crypto';

const generateKey = () => crypto.randomBytes(16).toString('hex');

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', generateKey()),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', generateKey()),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', generateKey()),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', generateKey()),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
