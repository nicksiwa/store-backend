import express from 'express';
import { getAllTags } from '../controllers/TagController';
import { ROUTE } from '../constants';

const tagRouter = express.Router();

tagRouter.get(ROUTE.SUB_URL.INDEX, getAllTags);

export default tagRouter;
