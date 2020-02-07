import model from '../models';

export const getAllProduct = async (req, res) => {
  try {
    const products = await model.Product.findAll();
    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await model.Product.findOne({ where: { id }});
    return res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}

export const getProductByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await model.Product.findAll();
    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: '' });
  }
}
