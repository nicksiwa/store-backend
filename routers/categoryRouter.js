import express from 'express';
import {
  getAllCategoryController,
  getCategoryById,
  createCategory,
  editCategory,
  deleteCategory
} from '../controllers/CategoryController';
import { ROUTE } from '../constants';

const categoryRouter = express.Router();

categoryRouter.get(ROUTE.SUB_URL.INDEX, getAllCategoryController);
categoryRouter.get(ROUTE.SUB_URL.BY_ID, getCategoryById);
categoryRouter.post(ROUTE.SUB_URL.INDEX, createCategory);
categoryRouter.put(ROUTE.SUB_URL.BY_ID, editCategory);
categoryRouter.delete(ROUTE.SUB_URL.BY_ID, deleteCategory);

export default categoryRouter;
