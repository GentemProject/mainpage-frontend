import * as envalid from 'envalid';
import path from 'path';

const { str } = envalid;

export const config = envalid.cleanEnv(
  process.env,
  {
    X_MONGO_URL: str(),
    X_MONGO_DATABASE: str(),
  },
  { strict: true, dotEnvPath: path.resolve(__dirname, '../../.env') },
);
