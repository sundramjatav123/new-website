const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, enum: ['blogs', 'faqs', 'projects', 'services'] },
    title: String,
    excerpt: String,
    description: String,
    question: String,
    answer: String,
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Content', contentSchema);
