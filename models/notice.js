const { Schema, model } = require('mongoose');

const noticeSchema = Schema(
  {
    status: {
      type: String,
      enum: ['lost/found', 'in good hands', 'sell'],
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    breed: {
      type: String,
      default: null,
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
      type: String,
      require: true,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      require: true,
    },
  },
  { versionKey: false, timestaps: true }
);

const Notice = model('notice', noticeSchema);

module.exports = Notice;
