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
    },
    imageUrl: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    workDays: [
      {
        isOpen: {
          type: Schema.Types.Boolean,
        },
        from: {
          required: false,
          type: Schema.Types.String,
        },
        to: {
          required: false,
          type: Schema.Types.String,
        },
      },
    ],
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  { versionKey: false, timestaps: true }
);

const Service = model('service', serviceSchema);

module.exports = Service;
