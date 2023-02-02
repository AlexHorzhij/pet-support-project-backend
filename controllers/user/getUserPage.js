const { Pet } = require('../../models');
const { User } = require('../../models');
const { NotFound } = require('http-errors');

const getUserPage = async (req, res) => {
  const { _id: owner } = req.user;
  const { name, email, birthdate, phone, city, avatarUrl } = req.user;
  const pets = await Pet.find({ owner });
  if (!pets) {
    throw new NotFound('There is no pets in your collection');
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        name,
        email,
        birthdate,
        phone,
        avatarUrl,
        city,
      },
      pets,
    },
  });
};

module.exports = getUserPage;
