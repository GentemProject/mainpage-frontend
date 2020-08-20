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
} = projectCtrl;

router.get('/', getAllProjects);
router.get('/organizations', getOld);
router.get('/filters/:country&:products&:paymentData&:transfer', getForFilters);
router.get('/filters/:country&:products&:paymentData&:transfer&:community', getForFilters);
router.get('/distinct/', getDistinctCountry);
router.get('/:id', getOrg);
router.post('/', createProject);

export { router as projects };
