const { Schema, model } = require('mongoose');

const serviceSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    logoURL: {
      type: String,
      required: true,
    },
    workingDays: {
      type: String,
      required: true,
    },
    WorkingTimeStart: {
      type: String,
      required: true,
    },
    WorkingTimeEnd: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestaps: true }
);

const Service = model('service', serviceSchema);

module.exports = Service;
