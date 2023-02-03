const { NOTICE_CATEGORY } = require('../../consts');

const { Notice } = require('../../models');

const getUserNotice = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    category,
    search,
    myNotice,
    favorite,
  } = req.query;
  const skip = (page - 1) * limit;
  const userId = req.user._id;

  let filters = {
    $match: {},
  };

  if (myNotice) {
    filters.$match = {
      ...filters.$match,
      $expr: { $eq: ['$owner', { $toObjectId: userId.toString() }] },
    };
  }

  if (category && NOTICE_CATEGORY.includes(category.toLowerCase())) {
    filters.$match = { ...filters.$match, category: category.toLowerCase() };
  }

  if (search) {
    filters.$match = { ...filters.$match, title: new RegExp(`${search}`) };
  }

  if (favorite) {
    filters.$match = { ...filters.$match, favorite: true };
  }

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
      filters,
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ],
  ];

  const result = await Notice.aggregate(pipelines);

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getUserNotice;
