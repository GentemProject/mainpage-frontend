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
  getForFilters: async (req: Request, res: Response) => {
    const { country, products, donationData, transfer, causeId } = req.params;

    let valuePais: any;
    let valueComm: any;
    if (country === 'null') {
      valuePais = { $nin: false };
      console.log(valuePais);
    } else {
      valuePais = country;
    }
    if (causeId === '0') {
      valueComm = { $nin: false };
      console.log(valueComm);
    } else {
      valueComm = { $eq: causeId };
    }

    if (products === 'true' && transfer === 'true' && donationData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,
        'donationData.products': { $exists: true },
        'donationData.link': { $exists: true },
        'donationData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, organizationModel, req, res);
    }
    if (products === 'false' && transfer === 'false' && donationData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,
      };
      await paginationFilter(filter, organizationModel, req, res);
    }
    if (products === 'true' && transfer === 'false' && donationData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,
        'donationData.products': { $exists: true },
      };
      await paginationFilter(filter, organizationModel, req, res);
    }
    if (products === 'true' && transfer === 'true' && donationData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,
        'donationData.products': { $exists: true },
        'donationData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, organizationModel, req, res);
    }
    if (products === 'true' && transfer === 'false' && donationData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,
        'donationData.products': { $exists: true },
        'donationData.link': { $exists: true },
      };
      await paginationFilter(filter, organizationModel, req, res);
    }
    if (products === 'false' && transfer === 'true' && donationData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,
        'donationData.link': { $exists: true },
        'donationData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, organizationModel, req, res);
    }
    if (products === 'false' && transfer === 'false' && donationData === 'true') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,

        'donationData.link': { $exists: true },
      };

      await paginationFilter(filter, organizationModel, req, res);
    }
    if (products === 'false' && transfer === 'true' && donationData === 'false') {
      let filter = {
        'location.country': valuePais,
        'primaryData.causeId': valueComm,

        'donationData.bankAccount': { $exists: true },
      };
      await paginationFilter(filter, organizationModel, req, res);
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
    organizationModel.find(
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
  getAllOrganizations: async (req: Request, res: Response) => {
    organizationModel.find({}, (err: any, result: any) => {
      if (err) {
        return res.json(err);
      }
      if (result) {
        return res.json(result);
      }
    });
  },
  createOrganization: async (req: Request, res: Response) => {
    let num = 0;
    const resultado = await paginationFilter({}, projectModel, req, res);
    console.log(resultado);
    resultado.map(async org => {
      let coordenates;
      if (org.location.map) {
        coordenates = await useCoordenate(org.location.map, res);
      }
      const model = await new organizationModel({
        slug: org.slug,
        primaryData: {
          causeId: org.primaryData.communityId,
          name: org.primaryData.name,
          logo: org.primaryData.logo,
          objective: org.primaryData.objective,
          description: org.primaryData.description,
          howUseDonation: org.primaryData.howUseDonation,
          sponsors: org.primaryData.sponsors,
        },
        contact: {
          email: org.contact.email,
          phone: org.contact.phone,
          website: org.contact.website,
        },
        socialMedia: {
          whatsapp: org.contact.whatsapp,
          instagram: org.contact.instagram,
          facebook: org.contact.facebook,
          linkedin: org.contact.linkedin,
          twitter: org.contact.twitter,
        },
        donationData: {
          link: org.paymentData.link,
          bankAccount: org.paymentData.bankAccount,
          products: org.paymentData.link,
        },
        location: {
          coordenates: coordenates,
          city: org.location.city,
          country: org.location.country,
        },
        adminInfo: {
          adminName: org.adminInfo.adminName,
          adminEmail: org.adminInfo.adminEmail,
        },
        createdAt: org.createdAt,
        updatedAt: org.createdAt,
      });
      await model.save((err: any) => {
        if (err) {
          return res.json(err);
        } else {
          num = num + 1;
          console.log(org.slug, num);
        }
      });
    });
  },
};

export default ProjectCtrl;
