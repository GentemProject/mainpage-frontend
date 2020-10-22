import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

// import { logger } from '../utils';
import { firebaseAdmin } from './firebase';

export async function getAuth(context: ExpressContext) {
  try {
    const { req } = context;
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return { uid: null };
    }

    const token = authorization.split(' ')[1];

    const decodedToken = await firebaseAdmin.verifyIdToken({
      token,
    });

    const uid = decodedToken.uid

    // logger.child({ userId }).info('middleware getAuth token');

    return { uid };
  } catch (error) {
    return { uid: null };
  }
}