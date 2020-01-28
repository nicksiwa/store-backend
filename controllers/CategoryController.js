import model from '../models';

export const getAllCategoryController = async (req, res) => {
  try {
    const caterories = model.Category.findAll();
    return res.status(200).json({
      caterories,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: ''
    });
  }
}
