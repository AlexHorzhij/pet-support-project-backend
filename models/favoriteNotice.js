const { Schema, model } = require('mongoose');

const favoriteNoticeSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      require: true,
    },
    notice: {
      type: Schema.Types.ObjectId,
      ref: 'notices',
      require: true,
    },
  },
  { versionKey: false, timestaps: true }
);

const FavotiteNotice = model('favoriteNotice', favoriteNoticeSchema);

module.exports = FavotiteNotice;
