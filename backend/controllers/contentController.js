const Content = require('../models/Content');

exports.getByType = async (req, res) => {
  const items = await Content.find({ type: req.params.type }).sort({ createdAt: -1 });
  res.json(items);
};

exports.createByType = async (req, res) => {
  const item = await Content.create({ ...req.body, type: req.params.type, image: req.file?.path || req.body.image });
  res.status(201).json(item);
};

exports.updateByType = async (req, res) => {
  const item = await Content.findOneAndUpdate(
    { _id: req.params.id, type: req.params.type },
    { ...req.body, image: req.file?.path || req.body.image },
    { new: true }
  );
  res.json(item);
};

exports.deleteByType = async (req, res) => {
  await Content.findOneAndDelete({ _id: req.params.id, type: req.params.type });
  res.json({ message: 'Deleted successfully' });
};
