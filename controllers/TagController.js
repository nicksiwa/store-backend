import model from '../models';

export const getAllTags = async (req, res) => {
  try {
    const tags = await model.Tag.findAll();
    return res.status(200).json({
      tags,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}
