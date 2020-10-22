import { authQueries } from '../services/auth';

export const resolvers = {
  Query: {
    ...authQueries,
  }
};