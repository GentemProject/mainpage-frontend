// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import csrf from 'csurf';
// import methodOverride from 'method-override';
// import pino from 'pino-http';
// import './utils/database';
// import { authApi } from './api/auth';
// /* import organizationsApi from './api/routes'; */
// import { projects } from './api/routes/projects';
// import { error404, handleRouteErrors } from './logs/errors';
// import { logRequest } from './logs/log-request';

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

  // /* Server Configurations */
  // app.use(
  //   pino({
  //     autoLogging: false,
  //     serializers: {
  //       req: (_req: express.Request) => null,
  //     },
  //   }),
  // );
  // app.use(cookieParser());
  // app.use(csrf({ cookie: true, ignoreMethods: ['GET', 'HEAD', 'OPTIONS'] }));
  // app.use(bodyParser.json());
  // app.use(
  //   bodyParser.urlencoded({
  //     extended: true,
  //   }),
  // );
  // app.use(methodOverride());
  // app.use(logRequest);

  // /* Server Routes */
  // app.use(authApi);
  // app.use('/api/projects', projects);
  // /*  app.use(organizationsApi); */

  // /* Server Errors */
  // app.use(error404);
  // app.use(handleRouteErrors);

  return app;
}

if (require.main === module) {
  init().listen(env.PORT, () => {
    console.log(`🌎 Environment:`, env.NODE_ENV);
    console.log(`🚀 Graphql server is running on http://localhost:3000/graphql`);
  });
} else {
  // required as a module => executed on aws lambda
}
