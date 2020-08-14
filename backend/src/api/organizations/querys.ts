import { ongs} from './connectMongoose';
import express from 'express';

const router = express.Router();
router.get('/anda/', (req: any, res: any) => {
  ongs.find({}, (error: any, result: any) => {
      console.log(req)
    if (error) return res.json(error);
    if (result) return res.json(result);
  });
});
export { router as filters };
