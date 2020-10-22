import * as envalid from 'envalid';
import path from 'path';

const { str } = envalid;

export const env = envalid.cleanEnv(
  process.env,
  {
    PORT: str(),
    NODE_ENV: str(),
    X_MONGO_URL: str(),
    X_MONGO_DATABASE: str(),
    X_FIREBASE_PROJECT_ID: str(),
    X_FIREBASE_CLIENT_EMAIL: str(),
    X_FIREBASE_PRIVATE_KEY: str(),
    X_FIREBASE_DB_URL: str(),
  },
  { strict: true, dotEnvPath: path.resolve(__dirname, '../../.env') },
);