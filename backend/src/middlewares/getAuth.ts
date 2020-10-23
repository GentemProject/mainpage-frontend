import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

import { logger } from '../utils';
import { firebase } from './firebase';
import { getUser } from '../services/users';

export async function getAuth(context: ExpressContext) {
  try {
    const { req } = context;
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return { userId: null, isAdmin: false };
    }

    const token = authorization.split(' ')[1];

    const decodedToken = await firebase.verifyIdToken({
      token,
    });

    const user = await getUser({ firebaseId: decodedToken.uid });

    if (!user) {
      return { userId: null, isAdmin: false };
    }

    logger.child({ userId: user._id }).info('middleware getAuth token');

    return { userId: user._id, isAdmin: user.isAdmin };
  } catch (error) {
    logger.child({ error }).info('middleware getAuth token error');
    return { userId: null, isAdmin: false };
  }
}
