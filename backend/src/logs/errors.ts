import express from 'express';
import CreateError from 'http-errors';

interface ErrorExpress {
  status?: number;
  stack?: string;
  message?: string;
}

function error404(_req: express.Request, _res: express.Response, next: express.NextFunction) {
  return next(CreateError('Not Found', 404));
}

function handleRouteErrors(
  error: ErrorExpress,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) {
  // tslint:disable-next-line: no-console
  // if (error.stack) console.error(error.stack);

  res.status(error.status || 500).json({ error: error.message });
}

export { handleRouteErrors, error404 };
