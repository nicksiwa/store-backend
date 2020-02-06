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

export const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const tag = await model.Tag.create({ name });
    return res.status(200).json({ tag });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}

export const deleteTag = async (req, res) => {
  try {
    const { id } = req.params;
    await model.Tag.destroy({
      where: { id },
    });
    return res.status(200).json({ id });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}

export const editTag = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const tag = await model.Tag.findOne({ where: { id }});
    if (tag) {
      await tag.update({ name });
    }
    return res.status(200).json({ tag });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}

export const getTagById = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await model.Tag.findOne({ where: { id }});
    return res.status(200).json({ tag });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: '',
    });
  }
}
