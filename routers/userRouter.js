import express from 'express';
import { ROUTE } from '../constants';
import { getAllUsers } from '../controllers/UserController';
import { auth } from '../helpers';

const userRouter = express.Router();

userRouter.use(auth.authMiddleware);
userRouter.get(ROUTE.SUB_URL.INDEX, getAllUsers);

export default userRouter;
