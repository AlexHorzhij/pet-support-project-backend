const { Schema, model } = require('mongoose');

const petSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    date: {
      type: String,
      required: false,
      default: null,
    },
    breed: {
      type: String,
      required: false,
      default: null,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
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

const Pet = model('pet', petSchema);

module.exports = Pet;
