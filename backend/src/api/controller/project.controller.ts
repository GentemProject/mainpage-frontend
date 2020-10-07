import { Request, Response } from 'express';
import projectModel, { organizationModel } from '../schemas/project';
import { paginationFilter } from './paginationFilter';
import { useCoordenate } from './mapCoordenate';

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
  getPagination: async (req: Request, res: Response) => {
    await paginationFilter({}, projectModel, req, res);
  },
  createProject: async (req: Request, res: Response) => {
    /*     interface organization {
          slug: {
            type: string,
          },
          primaryData: {
            name: {
              type: string,
              trim: true,
            },
            logo: string,
            objective: string,
            description: string,
            howUseDonation: string,
            sponsors: [string],
            communityId: [number],
          },
          contact: {
            email: string,
            phone: string,
            whatsapp: string,
            instagram: string,
            facebook: string,
            linkedin: string,
            twitter: string,
            website: string,
          },
          paymentData: {
            link: string,
            bankAccount: string,
            products: string,
          },
          location: {
            map: string,
            city: string,
            country: string,
          },
          adminInfo: {
            adminName: string,
            adminEmail: string,
          },
        } */
    const model = await new projectModel({
      slug: req.body.slug,
      primaryData: {
        communityId: req.body.primaryData.communityId,
        name: req.body.primaryData.name,
        logo: req.body.primaryData.logo,
        objective: req.body.primaryData.objective,
        /*         description: req.body.primaryData.description,
                howUseDonation: req.body.primaryData.howUseDonation,
                sponsors: req.body.primaryData.sponsors, */
      },
      /*         contact: {
                email: req.body.contact.email,
                phone: req.body.contact.phone,
                whatsapp: req.body.contact.whatsapp,
                instagram: req.body.contact.instagram,
                facebook: req.body.contact.facebook,
                linkedin: req.body.contact.linkedin,
                twitter: req.body.contact.twitter,
                website: req.body.contact.website,
              }, */
      /*        paymentData: {
               link: req.body.paymentData.link,
               bankAccount: req.body.paymentData.bankAccount,
               products: req.body.paymentData.link,
             }, */
      location: {
        map: req.body.location.map,
        city: req.body.location.city,
        country: req.body.location.country,
      },
      adminInfo: {
        adminName: req.body.adminInfo.adminName,
        adminEmail: req.body.adminInfo.adminEmail,
      },
    });
    await model.save((err: any) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(model);
      }
    });
  },
  getForFilters: async (req: Request, res: Response) => {
    const { country, products, paymentData, transfer, community } = req.params;

    let valuePais: any;
    let valueComm: any;
    if (country === 'null') {
      valuePais = { $nin: false };
      console.log(valuePais);
    } else {
      valuePais = country;
    }
    if (community === '0') {
      valueComm = { $nin: false };
      console.log(valueComm);
    } else {
      valueComm = { $eq: community };
    }

    if (products === 'true' && transfer === 'true' && paymentData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,

        'paymentData.products': { $exists: true },
        'paymentData.link': { $exists: true },
        'paymentData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, projectModel, req, res);
    }
    if (products === 'false' && transfer === 'false' && paymentData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,
      };
      await paginationFilter(filter, projectModel, req, res);
    }
    if (products === 'true' && transfer === 'false' && paymentData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,
        'paymentData.products': { $exists: true },
      };
      await paginationFilter(filter, projectModel, req, res);
    }
    if (products === 'true' && transfer === 'true' && paymentData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,
        'paymentData.products': { $exists: true },
        'paymentData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, projectModel, req, res);
    }
    if (products === 'true' && transfer === 'false' && paymentData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,

        'paymentData.products': { $exists: true },
        'paymentData.link': { $exists: true },
      };
      await paginationFilter(filter, projectModel, req, res);
    }
    if (products === 'false' && transfer === 'true' && paymentData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,

        'paymentData.link': { $exists: true },
        'paymentData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, projectModel, req, res);
    }
    if (products === 'false' && transfer === 'false' && paymentData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,

        'paymentData.link': { $exists: true },
      };

      await paginationFilter(filter, projectModel, req, res);
    }
    if (products === 'false' && transfer === 'true' && paymentData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.communityId': valueComm,

        'paymentData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, projectModel, req, res);
    }
  },
  getDistinctCountry: async (req: Request, res: Response) => {
    projectModel
      .find({})
      .collation({ locale: 'es', strength: 1 })
      .distinct('location.country')
      .then(result => {
        res.json(result);
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
  createOrganization: async (req: Request, res: Response) => {
    const coordenates = await useCoordenate(req.body.location.coordenates, res);
    const model = await new organizationModel({
      slug: req.body.slug,
      primaryData: {
        communityId: req.body.primaryData.communityId,
        name: req.body.primaryData.name,
        logo: req.body.primaryData.logo,
        objective: req.body.primaryData.objective,
        description: req.body.primaryData.description,
        howUseDonation: req.body.primaryData.howUseDonation,
        sponsors: req.body.primaryData.sponsors,
      },
      contact: {
        email: req.body.contact.email,
        phone: req.body.contact.phone,
        website: req.body.contact.website,
      },

      socialMedia: {
        whatsapp: req.body.socialMedia.whatsapp,
        instagram: req.body.socialMedia.instagram,
        facebook: req.body.socialMedia.facebook,
        linkedin: req.body.socialMedia.linkedin,
        twitter: req.body.socialMedia.twitter,
      },
      paymentData: {
        link: req.body.paymentData.link,
        bankAccount: req.body.paymentData.bankAccount,
        products: req.body.paymentData.link,
      },
      location: {
        coordenates: coordenates,
        city: req.body.location.city,
        country: req.body.location.country,
      },
      adminInfo: {
        adminName: req.body.adminInfo.adminName,
        adminEmail: req.body.adminInfo.adminEmail,
      },
    });
    await model.save((err: any) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(model);
      }
    });
  },
};

export default ProjectCtrl;
