import express from 'express';
const router = express.Router();
import projectCtrl from '../controller/project.controller';

const {
  getForFilters,
  getDistinctCountry,
  getOrg,
  getLastest,
  getAllOrganizations,
  createOrganization,
} = projectCtrl;

router.get('/filters/:country&:products&:donationData&:transfer&:causeId', getForFilters);
router.get('/lastest/:quanty', getLastest);
router.get('/distinct/', getDistinctCountry);
router.get('/getall', getAllOrganizations);
router.post('/neworganization', createOrganization);
router.get('/:id', getOrg);

export { router as projects };
