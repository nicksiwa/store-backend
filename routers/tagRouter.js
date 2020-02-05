import express from 'express';
import { getAllTags, createTag, deleteTag } from '../controllers/TagController';
import { ROUTE } from '../constants';

const tagRouter = express.Router();

tagRouter.get(ROUTE.SUB_URL.INDEX, getAllTags);
tagRouter.post(ROUTE.SUB_URL.INDEX, createTag);
tagRouter.delete(ROUTE.SUB_URL.BY_ID, deleteTag);

export default tagRouter;
