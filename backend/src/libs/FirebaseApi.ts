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

  createToken(options: {
    firebaseId: string;
    customClaims?: {
      isAdmin: boolean;
    };
  }) {
    return this.firebase.auth().createCustomToken(options.firebaseId, options.customClaims);
  }

  verifyIdToken(options: { token: string }) {
    return this.firebase.auth().verifyIdToken(options.token);
  }

  createUser(options: { email: string; password: string }) {
    return this.firebase.auth().createUser(options);
  }

  updateUser(options: { firebaseId: string; update: { email: string; password: string } }) {
    return this.firebase.auth().updateUser(options.firebaseId, options.update);
  }

  deleteUser(options: { firebaseId: string }) {
    return this.firebase.auth().deleteUser(options.firebaseId);
  }
}
