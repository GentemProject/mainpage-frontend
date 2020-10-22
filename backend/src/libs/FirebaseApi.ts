import * as FirebaseAdmin from 'firebase-admin';

export class FirebaseApi {
  static credentialFromServiceAccount(serviceAccount: FirebaseAdmin.ServiceAccount) {
    return FirebaseAdmin.credential.cert(serviceAccount);
  }

  firebase: FirebaseAdmin.app.App;

  constructor(options: {
    databaseUrl: string;
    privateKey: string;
    projectId: string;
    clientEmail: string;
  }) {
    this.firebase = FirebaseAdmin.initializeApp({
      databaseURL: options.databaseUrl,
      credential: FirebaseAdmin.credential.cert({
        privateKey: options.privateKey,
        projectId: options.projectId,
        clientEmail: options.clientEmail,
      }),
    });
  }

  async createUser(options: { uid: string; email: string; password: string }) {
    return await this.firebase.auth().createUser(options)
  }

  async verifyIdToken(options: { token: string }) {
    return await this.firebase.auth().verifyIdToken(options.token);
  }

  async setCustomClaims(options: { auth_id: string; is_admin: boolean }) {
    return await this.firebase
      .auth()
      .setCustomUserClaims(options.auth_id, { is_admin: options.is_admin });
  }
}