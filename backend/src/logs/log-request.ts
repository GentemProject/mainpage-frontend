import { NextFunction, Request, Response } from 'express';

export async function logRequest(req: Request, _res: Response, next: NextFunction) {
  req.log.info(`${req.method} ${req.url}`);
  next();
}
