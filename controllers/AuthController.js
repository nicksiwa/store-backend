import model from '../models';
import { MESSAGE } from '../constants';
import { auth } from '../helpers';

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await model.User.findOne({
      where: { username }
    });
    if (user) {
      const isValid = await user.isValidPassword(password);
      if (isValid) {
        const token = auth.signToken(user);
        res.status(200).json({
          user: {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          token,
          message: MESSAGE.USER.SIGNIN_SUCCESS,
        });
      } else {
        res.status(401).json({
          message: MESSAGE.USER.INVALID_PASSWORD,
        });
      }
    } else {
      res.status(401).json({
        message: MESSAGE.USER.USER_NOT_FOUND,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: MESSAGE.ERROR.SOMETHING_WENT_WRONG,
    });
  }
}

export const signUp = async (req, res) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName,
    } = req.body;
    const oldUser = await model.User.findOne({
      where: { username }
    });
    if (!oldUser) {
      const user = await model.User.create({
        username,
        password,
        firstName,
        lastName,
      });
      return res.status(201).json({
        username: user.username,
        message: MESSAGE.USER.SIGNUP_SUCCESS,
      });
    } else {
      return res.status(500).json({
        message: MESSAGE.USER.ALREADY_REGISTERED,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: MESSAGE.ERROR.SOMETHING_WENT_WRONG,
    });
  }
}
