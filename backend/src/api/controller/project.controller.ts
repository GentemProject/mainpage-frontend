import { Request, Response } from 'express';
/* import { connectMongo } from '../../utils/database'; */
import projectModel from '../schemas/project';

const ProjectCtrl = {
  getAllProjects: async (req: Request, res: Response) => {
    projectModel.find({}, (err: any, result: any) => {
      if (err) {
        return res.json(err);
      }
      if (result) {
        return res.json(result);
      }
    });
  },
  createProject: async (req: Request, res: Response) => {
    console.log(req.body);
    /*   const {
      name,
      description,
      objective,
      logo,
      howUseDonation,
      sponsors,
      communityId,
      email,
      phone,
      whatsapp,
      instagram,
      facebook,
      linkedin,
      twitter,
      website,
      link,
      bankAccount,
      products,
      map,
      city,
      country,
      adminName,
      adminEmail,
    } = req.body;
*/
    /*const newProject = new projectModel({
      primaryData: {
        name: name,
        description: description,
        objective: objective,
        logo: logo,
        howUseDonation: howUseDonation,
        sponsors: sponsors,
        communityId: communityId,
      },
      contact: {
        email: email,
        phone:phone,
        whatsapp:whatsapp,
        instagram: instagram,
        facebook: facebook,
        linkedin: linkedin,
        twitter: twitter,
        website: website,
      },
      paymentData: {
        link: link,
        bankAccount: bankAccount,
        products: products,
      },
      location: {
        map: map,
        city: city,
        country: country,
      },
      adminInfo: {
        adminName: adminName,
        adminEmail: adminEmail,
      },
    });*/
    const objPrueba = new projectModel({
      primaryData: {
        name: 'name',
        description: 'description',
        objective: 'objective',
        logo: 'logo',
        howUseDonation: 'howUseDonation',
        sponsors: 'sponsors',
        communityId: [8],
      },
      contact: {
        email: 'email',
        phone: 'phone',
        whatsapp: 'whatsapp',
        instagram: 'instagram',
        facebook: 'facebook',
        linkedin: 'linkedin',
        twitter: 'twitter',
        website: 'website',
      },
      paymentData: {
        link: 'link',
        bankAccount: 'bankAccount',
        products: 'products',
      },
      location: {
        map: 'map',
        city: 'city',
        country: 'country',
      },
      adminInfo: {
        adminName: 'adminName',
        adminEmail: 'adminEmail',
      },
    });
    await objPrueba.save((err: any) => {
      if (err) {
        return res.json(err);
      } else {
        res.json({ message: 'Saved' });
      }
    });
  },
  getForFilters: async (req: Request, res: Response) => {
    const { country, products, paymentData, transfer } = req.params;
    projectModel.find(
      {
        'location.country': country,
        'paymentData.link': { $exists: paymentData },
        'paymentData.bankAccount': { $exists: transfer },
        'paymentData.products': { $exists: products },
      },
      (err: any, result: any) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(result);
        }
      },
    );
  },
  getDistinctCountry: async (req: Request, res: Response) => {
    projectModel.distinct('location.country', (err: any, result: any) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  },
  getOrg: async (req: Request, res: Response) => {
    const _id = req.params.id;
    projectModel.find(
      {
        _id: _id,
      },
      (err: any, result: any) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(result);
        }
      },
    );
  },
};

export default ProjectCtrl;

/* getAllOrgs: async (_req: Request, res: Response) => {
    const db = await connectMongo();
    const data = await db.collection('organizations').find({}).toArray();

    res.status(200).json({ data });
  }, */

/*   getOrg: async (req: Request, res: Response) => {
    const slug = req.params.id;

    const db = await connectMongo();
    const data = await db.collection('organizations').findOne({ slug });

    res.status(200).json({ data });
  }, */
