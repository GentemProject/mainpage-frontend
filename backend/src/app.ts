import aws from 'aws-sdk';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import csrf from 'csurf';
import express from 'express';
import methodOverride from 'method-override';
import pino from 'pino-http';

import { authApi } from './api/auth';
import { organizationsApi } from './api/organizations';
import { error404, handleRouteErrors } from './logs/errors';
import { logRequest } from './logs/log-request';

export function init() {
  aws.config.update({ region: 'us-east-1' });
  const app = express();

  /* Server Configurations */
  app.use(
    pino({
      autoLogging: false,
      serializers: {
        req: (_req: express.Request) => null,
      },
    }),
  );
  app.use(cookieParser());
  app.use(csrf({ cookie: true, ignoreMethods: ['GET', 'HEAD', 'OPTIONS'] }));
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'http://localhost:8080',
        'http://localhost:8081',
        'https://gentem.org',
        'https://www.gentem.org',
        'https://app.gentem.org',
      ],
    }),
  );
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(methodOverride());
  app.use(logRequest);

  /* Server Routes */
  app.use(authApi);
  app.use(organizationsApi);

  /* Server Errors */
  app.use(error404);
  app.use(handleRouteErrors);

  return app;
}

if (require.main === module) {
  // called directly i.e. "node app"
  const PORT = 3030;
  init().listen(PORT, (err: Error) => {
    if (err) {
      // tslint:disable-next-line: no-console
      console.error(err);
    }
    // tslint:disable-next-line: no-console
    console.log('server listening on', PORT);
  });
} else {
  // required as a module => executed on aws lambda
}
