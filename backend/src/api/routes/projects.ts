import express from 'express';
const router = express.Router();
import projectCtrl from '../controller/project.controller';

const { getAllProjects, createProject, getForFilters, getDistinctCountry, getOrg } = projectCtrl;

router.get('/', getAllProjects);
router.get('/filters/:country&:products&:paymentData&:transfer', getForFilters);
router.get('/distinct/', getDistinctCountry);
router.get('/id/:id', getOrg);
router.post('/', createProject);

/* router.get('/:id', getOrg); */

export { router as projects };
