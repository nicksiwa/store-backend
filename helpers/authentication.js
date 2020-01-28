import jwt from 'jsonwebtoken';
import { MESSAGE } from '../constants';
const SECRET_KEY = 'THIS IS SECRET KEY';

export const signToken = user => {
  return jwt.sign({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  }, SECRET_KEY);
}

export const verifyToken = token => {
  return jwt.verify(token, SECRET_KEY);
}

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      verifyToken(token);
      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({
        message: MESSAGE.AUTH.TOKEN_ERROR,
      });
    }
  } else {
    res.status(401).json({
      message: MESSAGE.AUTH.AUTHENTICATION_ERROR,
    });
  }
}
