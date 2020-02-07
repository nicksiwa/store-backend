import model from '../models';

export const getAllCategoryController = async (req, res) => {
  try {
    const caterories = model.Category.findAll();
    return res.status(200).json({ caterories });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const category = model.Category.create({ name, description });
    return res.status(200).json({ category });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}

export const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const category = await model.Category.findOne({ where: { id }});
    if (category) {
      await category.update({ name, description });
    }
    return res.status(200).json({ category });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await model.Category.destroy({ where: { id }});
    return res.status(200).json({ id });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await model.Category.findOne({ where: { id }});
    return res.status(200).json({ category });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}
