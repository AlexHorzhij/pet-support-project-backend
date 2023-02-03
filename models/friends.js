const { Schema, model } = require('mongoose');

const friendsSchema = Schema(
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
    },
    email: {
      type: String,
      required: false,
    },
  },
  { versionKey: false, timestaps: true }
);

const Friends = model('service', friendsSchema);

module.exports = Friends;
