import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

import { logger } from '../utils';
import { getUser } from '../services/users';
import { verifyAccessToken } from '../services/auth';

export async function getAuth(context: ExpressContext) {
  try {
    const { req } = context;
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return { userId: null, isAdmin: false };
    }

    const token = authorization.split(' ')[1];

    const { userId } = await verifyAccessToken(token);

    const user = await getUser({ userId });

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
