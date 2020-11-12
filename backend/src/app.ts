import cors from 'cors';
import aws from 'aws-sdk';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { apolloServerConfig } from './graphql';
import { env } from './config';

export function init() {
  aws.config.update({ region: 'us-east-1' });
  const app = express();

  app.use(
    cors({
      origin: [
        'http://localhost:3030',
        'http://localhost:3000',
        'http://localhost:8080',
        'https://gentem.org',
        'https://www.gentem.org',
        'https://app.gentem.org',
      ],
    }),
  );

  const apolloServer = new ApolloServer(apolloServerConfig);
  apolloServer.applyMiddleware({ app });

  return app;
}

if (require.main === module) {
  init().listen(env.PORT, () => {
    console.log(`🌎 Environment:`, env.NODE_ENV);
    console.log(`🚀 Graphql server is running on http://localhost:3100/graphql`);
  });
} else {
  // required as a module => executed on aws lambda
}
