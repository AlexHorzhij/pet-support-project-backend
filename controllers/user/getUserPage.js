const { Pet } = require('../../models');
const { NotFound } = require('http-errors');

const getUserPage = async (req, res) => {
  const { _id: owner } = req.user;
  const {name, email, password, avatarUrl, birthdate, phone, city} = req.user;
  const pets = await Pet.find({ owner });
  if (!pets) {
    throw new NotFound('There is no pets in your collection');
  }
  res.json({ user: {name, email, password, avatarUrl, birthdate, phone, city}, pets });
};

module.exports = getUserPage;
