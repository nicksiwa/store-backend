import model from '../models';

export const getAllUsers = async (req, res) => {
  try {
    const users = await model.User.findAll();
    return res.status(200).json({
      users,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}

export const getUserInfo = async (req, res) => {
  try {
    const username = '';
    const user = model.User.findOne({
      where: { username },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}

export const editUserInfo = async (req, res) => {
  try {
    const username = '';
    const userInfo = req.body;
    const user = model.User;
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}
