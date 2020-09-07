import { Request, Response } from 'express';
import projectModel, { oldModel } from '../schemas/project';
import { paginationFilter } from './paginationFilter';

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
    await paginationFilter({}, projectModel, req, res);
  },

  createProject: async (req: Request, res: Response) => {
    console.log(req.body);
  },
  getForFilters: async (req: Request, res: Response) => {
    const { country, products, paymentData, transfer, community } = req.params;

    let valuePais: any;
    let valueComm: any;
    if (country === 'null') {
      valuePais = { $ne: null };
      console.log(valuePais);
    } else {
      valuePais = country;
    }
    if (community === '0') {
      valueComm = { $ne: null };
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
};

export default ProjectCtrl;
