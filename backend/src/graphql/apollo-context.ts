import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { connectDatabase } from '../middlewares/connectDatabase';
import { getAuth } from '../middlewares/getAuth';

// import { connectDatabase } from '../middlewares';

export interface Context {
  uid: string | null
}

export const context = async (context: ExpressContext): Promise<Context> => {
  await connectDatabase()
  const { uid } = await getAuth(context);

//   await connectDatabase();

  return { uid };
};