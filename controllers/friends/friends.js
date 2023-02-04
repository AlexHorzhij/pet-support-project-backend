const { Friends } = require('../../models');

const getFriends = async (req, res) => {
  const friends = await Friends.find({});
  res.json({
    friends,
  });
};

module.exports = getFriends;
