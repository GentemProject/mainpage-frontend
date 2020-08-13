import express, { Request, Response } from 'express';

const route = express.Router();

route.get('/auth/csrf', async (req: Request, res: Response) => {
  res.status(200).json({ data: { csrf: req.csrfToken() } });
});

export { route as authApi };
