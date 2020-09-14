import express from 'express';
const router = express.Router();
import projectCtrl from '../controller/project.controller';

const {
  getAllProjects,
  createProject,
  getForFilters,
  getDistinctCountry,
  getOrg,
  getOld,
  getLastest,
  getPagination,
} = projectCtrl;

router.get('/', getAllProjects);
router.get('/organizations', getOld);
router.get('/pagination', getPagination);
router.get('/pagination/page/:page', getPagination);
router.get('/filters/:country&:products&:paymentData&:transfer&:community', getForFilters);
router.get('/lastest/:quanty', getLastest);
router.get('/distinct/', getDistinctCountry);
router.get('/:id', getOrg);
router.post('/', createProject);

export { router as projects };
