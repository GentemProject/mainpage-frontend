import { logger } from "../../utils";

export const authQueries = {
  getToken: async (_root: any, _options: any) => {
    try {
      logger.info('query getToken');
      
      const accessToken = 'Testing!!'

      return accessToken;
    } catch (error) {
      throw new Error(error);
    }
  },
};