import { AuthenticationError } from 'apollo-server-express';

import { Context } from '../../graphql';
import { logger } from '../../utils';

import { getUser } from './controller';

export const usersQueries = {
  getMe: async (_root: any, _options: any, context: Context) => {
    try {
      const userId = context.userId;

      logger.child({ userId }).info('query getMe');

      if (!userId) {
        throw new AuthenticationError('token expired.');
      }

      const user = await getUser({ userId });

      if (!user) {
        throw new Error('User not found.');
      }

      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
};
