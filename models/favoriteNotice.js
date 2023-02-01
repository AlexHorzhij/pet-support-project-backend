const { Schema, model } = require('mongoose');

const favoriteNoticeSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      require: true,
    },
    notice: {
      type: Schema.Types.ObjectId,
      ref: 'notice',
      require: true,
    },
  },
  { versionKey: false, timestaps: true }
);

const FavotiteNotice = model('favoriteNotice', favoriteNoticeSchema);

module.exports = FavotiteNotice;
