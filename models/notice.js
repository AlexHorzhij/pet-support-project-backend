const { Schema, model } = require('mongoose');
const { NOTICE_STATUS } = require('../consts');

const noticeSchema = Schema(
  {
    status: {
      type: String,
      enum: NOTICE_STATUS,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: false,
    },
    birthdate: {
      type: String,
      require: false,
    },
    breed: {
      type: String,
      require: false,
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      require: true,
    },
    create_at: {
      type: Date,
      require: true,
    },
  },
  { versionKey: false, timestaps: true }
);

const Notice = model('notice', noticeSchema);

module.exports = Notice;
