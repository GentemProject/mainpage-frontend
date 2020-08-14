import express from 'express';
const router = express.Router();
import projectCtrl from '../controller/project.controller';

const { getAllProjects /* , getOrg  */, createProject } = projectCtrl;

router.get('/', getAllProjects);
router.post('/', createProject);

/* router.get('/:id', getOrg); */

export { router as projects };
