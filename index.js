import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ROUTE } from './constants';
import {
  authRouter,
  userRouter,
  tagRouter,
} from './routers';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Router
app.use(ROUTE.AUTH.INDEX, authRouter);
app.use(ROUTE.USER.INDEX, userRouter);
app.use(ROUTE.TAG.INDEX, tagRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
