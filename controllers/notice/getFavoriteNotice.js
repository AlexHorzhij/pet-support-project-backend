const { Notice } = require('../../models');

const getFavoriteNotice = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const { userId } = req.user;

  let pipelines = [
    [
      {
        $lookup: {
          from: 'favoritenotices',
          localField: '_id',
          foreignField: 'notice',
          as: 'favoriteNotice',
        },
      },
      {
        $addFields: {
          favorite: {
            $cond: [
              {
                $setIsSubset: [[userId], '$favoriteNotice.user'],
              },
              true,
              false,
            ],
          },
        },
      },
      {
        $unset: 'favoriteNotice',
      },
      {
        $match: { favorite: true },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ],
  ];

  const result = await Notice.aggregate(pipelines);

  res.json(result);
};

module.exports = getFavoriteNotice;
