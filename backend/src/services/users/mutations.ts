import { AuthenticationError } from 'apollo-server-express';

import { Context } from '../../graphql';
import { logger } from '../../utils';

// import { createUser } from './controller';

export const usersMutations = {
  createUser: async (
    _root: any,
    _options: { name: string; email: string; password: string },
    context: Context,
  ) => {
    try {
      const userId = context.userId;

      logger.child({ userId }).info('mutation createUser');

      if (userId) {
        throw new AuthenticationError('You are logged.');
      }

      // const newUser = await createUser(options);

      // if (!newUser) {
      //   throw new Error('Error creating user.');
      // }

      // return newUser;

      return '';
    } catch (error) {
      throw new Error(error);
    }
  },
};
