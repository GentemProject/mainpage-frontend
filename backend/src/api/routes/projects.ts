import express from 'express';
const router = express.Router();
import projectCtrl from '../controller/project.controller';

const {
  getAllProjects,
  getForFilters,
  getDistinctCountry,
  getOrg,
  getLastest,
  getPagination,
  getAllOrganizations,
  createOrganization,
} = projectCtrl;

router.get('/', getAllProjects);
router.get('/pagination', getPagination);
router.get('/pagination/page/:page', getPagination);
router.get('/filters/:country&:products&:donationData&:transfer&:causeId', getForFilters);
router.get('/lastest/:quanty', getLastest);
router.get('/distinct/', getDistinctCountry);
router.get('/getall', getAllOrganizations);
router.post('/neworganization', createOrganization);
router.get('/:id', getOrg);

export { router as projects };
