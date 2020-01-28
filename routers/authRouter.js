import express from 'express';
import { signIn, signUp } from '../controllers/AuthController';
import { ROUTE } from '../constants';

const authRouter = express.Router();

authRouter.post(ROUTE.AUTH.SIGNIN, signIn);
authRouter.post(ROUTE.AUTH.SIGNUP, signUp);

export default authRouter;
