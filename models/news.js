const { Schema, model } = require('mongoose');

const newsSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestaps: true }
);

const News = model('news', newsSchema);

module.exports = News;
