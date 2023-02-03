const { Schema, model } = require('mongoose');

const serviceSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    url: {
      type: String,
      required: true,
    },
    addressUrl: {
      type: String,
      required: false,
      default: null,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
      default: null,
    },
    workDays: [
      {
        isOpen: {
          type: Schema.Types.Boolean,
        },
        from: {
          required: false,
          type: Schema.Types.String,
          default: null,
        },
        to: {
          required: false,
          type: Schema.Types.String,
          default: null,
        },
      },
    ],
    phone: {
      type: String,
      required: false,
      default: null,
    },
    email: {
      type: String,
      required: false,
      default: null,
    },
  },
  { versionKey: false, timestaps: true }
);

const Service = model('service', serviceSchema);

module.exports = Service;
