import { FirebaseApi } from '../libs/FirebaseApi';
import { env } from '../config';

export const firebaseAdmin = new FirebaseApi({
  databaseUrl: env.X_FIREBASE_DB_URL,
  projectId: env.X_FIREBASE_PROJECT_ID,
  clientEmail: env.X_FIREBASE_CLIENT_EMAIL,
  privateKey: JSON.parse(`"${env.X_FIREBASE_PRIVATE_KEY}"`),
});