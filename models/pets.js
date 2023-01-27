const { Schema, model } = require('mongoose');

const petSchema = Schema(
  {
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
    avatarURL: {
      type: String,
      required: true,
    },
    comment: {
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

const Pet = model('pet', petSchema);

module.exports = Pet;
