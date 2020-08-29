import { Request, Response } from 'express';
import projectModel, { oldModel } from '../schemas/project';

const ProjectCtrl = {
  getOld: async (req: Request, res: Response) => {
    oldModel.find({}, (err: any, result: any) => {
      if (err) {
        return res.json(err);
      }
      if (result) {
        return res.json(result);
      }
    });
  },
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
  getPagination: async (req: Request, res: Response) => {
    let cuantity = await projectModel.countDocuments();
    try {
      const perPage: number = parseInt(req.query.limit as string);
      const totalPages: number = Math.floor(cuantity / perPage);
      let page: number = parseInt(req.query.skip as string);
      if (page > totalPages) {
        res.end();
      }
      const show = page * perPage;
      projectModel
        .find({})
        .skip(show)
        .limit(perPage)
        .then(data =>
          res.json({
            page: page,
            totalPages: totalPages,
            data: data,
          }),
        );
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  createProject: async (req: Request, res: Response) => {
    console.log(req.body);
  },
  getForFilters: async (req: Request, res: Response) => {
    const { country, products, paymentData, transfer, community } = req.params;
    projectModel.find(
      {
        'location.country': country,
        'paymentData.link': { $exists: paymentData, $ne: null },
        'paymentData.bankAccount': { $exists: transfer, $ne: null },
        'paymentData.products': { $exists: products, $ne: null },
        'primaryData.communityId': { $exists: true, $eq: community },
      },
      (err: any, result: any) => {
        if (err) {
          return res.json(err);
        } else {
          if (result == '') {
            return res.json('no hay nada');
          } else {
            return res.json(result);
          }
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
    const slug = req.params.id;
    projectModel.find(
      {
        slug: slug,
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
  getLastest: async (req: Request, res: Response) => {
    const quanty = req.params.quanty;
    projectModel
      .find({})
      .sort({ createdAt: -1 })
      .limit(parseInt(quanty, 10))
      .then(result => {
        return res.json(result);
      });
  },
};

export default ProjectCtrl;

/*
    const objPrueba = new projectModel({
      slug: 'ndeaa',
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
    }); */

// Code used for take all the old data to the new api
/*
       var aum: any = 0;
       await req.body.forEach(async (one: any) => {
         var changingModel = new projectModel({
           slug: one.slug,
           primaryData: {
             name: one.name,
             description: one.description,
             objective: one.objective,
             logo: one.logo,
             howUseDonation: one.howusedonations,
             sponsors: one.sponsors,
             communityId: one.communityworkwith,
           },
           contact: {
             email: one.email,
             phone: one.phones,
             whatsapp: one.whatsapp,
             instagram: one.instagram,
             facebook: one.facebook,
             linkedin: one.linkedin,
             twitter: one.twitter,
             website: one.website,
           },
           paymentData: {
             link: one.paymentslink,
             bankAccount: one.accounts,
             products: one.instructionstodeliverproducts,
           },
           location: {
             map: one.location,
             city: one.city,
             country: one.country,
           },
           adminInfo: {
             adminName: one.adminname,
             adminEmail: one.adminemail,
           },
         });
         await changingModel.save((err: any) => {
           if (err) {
             return res.json(err);
           } else {
             console.log('Saved maaan!');
             aum = aum + 1;
             console.log(aum);
             if (aum === req.body.length) {
               res.json({ message: 'Listo padre!' });
             }
           }
         });
       }); */
