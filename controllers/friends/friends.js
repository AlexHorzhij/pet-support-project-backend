const { Friends } = require('../../models');

const getFriends = async (req, res) => {
  const friends = await Friends.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: friends,
    },
  });
};

module.exports = getFriends;
