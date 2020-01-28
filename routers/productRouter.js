import express from 'express';
import {} from '../controllers/ProductController';
import { ROUTE } from '../constants';

const productRouter = express.Router();

productRouter.get(ROUTE.SUB_URL.INDEX);

export default productRouter;
