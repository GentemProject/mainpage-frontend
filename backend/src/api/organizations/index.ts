import express, { Request, Response } from 'express';
import { connectMongo } from '../../utils/database';

// import slugify from 'slugify';

const route = express.Router();

route.get('/organizations', async (_req: Request, res: Response) => {
  const db = await connectMongo();
  const data = await db.collection('organizations').find({}).toArray();

  res.status(200).json({ data });
});

route.get('/organizations/:id', async (req: Request, res: Response) => {
  const slug = req.params.id;

  const db = await connectMongo();
  const data = await db.collection('organizations').findOne({ slug });

  res.status(200).json({ data });
});

route.put('/organizations/:id', async (req: Request, res: Response) => {
  const slug = req.params.id;
  const body = req.body;
  let project = {
    name: body.name,
    logo: req.body.logo,
    objective: body.objective,
    communityworkwith: body.communityworkwith,
    description: body.description,
    howusedonations: body.howusedonations,
    location: body.location,
    city: body.city,
    country: body.country,
    sponsors: body.sponsors,
    paymentslink: body.paymentslink,
    accounts: body.accounts,
    instructionstodeliverproducts: body.instructionstodeliverproducts,
    website: body.website,
    email: body.email,
    phones: body.phones,
    whatsapp: body.whatsapp,
    instagram: body.instagram,
    facebook: body.facebook,
    twitter: body.twitter,
    linkedin: body.linkedin,
    createtAt: new Date().toISOString(),
  };

  const db = await connectMongo();
  const data = await db
    .collection('organizations')
    .findOneAndUpdate({ slug }, project, function (err: any) {
      if (err) {
        console.log(err);
      }
      res.json(project);
    });
  res.status(204).json(data);
});

// route.post('/organizations', async (req: Request, res: Response) => {
// await repository.create({
//   organizationId,
//   name: req.body.name,
//   logo: req.body.logo,
//   objective: req.body.objective,
//   communityworkwith: req.body.communityworkwith,
//   description: req.body.description,
//   howusedonations: req.body.howusedonations,
//   location: req.body.location,
//   sponsors: req.body.sponsors,
//   paymentslink: req.body.paymentslink,
//   accounts: req.body.accounts,
//   instructionstodeliverproducts: req.body.instructionstodeliverproducts,
//   website: req.body.website,
//   email: req.body.email,
//   phones: req.body.phones,
//   whatsapp: req.body.whatsapp,
//   instagram: req.body.instagram,
//   facebook: req.body.facebook,
//   twitter: req.body.twitter,
//   linkedin: req.body.linkedin,
//   createtAt: new Date().toISOString(),
// });
// res.status(204).json();
// });

export { route as organizationsApi };
