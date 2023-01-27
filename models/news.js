const { Schema, model } = require('mongoose');

const newsSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    dateOfPublication: {
      type: Date,
      default: Date.now,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestaps: true }
);

const News = model('news', newsSchema);

module.exports = News;
