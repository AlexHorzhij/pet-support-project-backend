const { User } = require('../../models');
const { NotFound } = require('http-errors');
const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const userPassword = req.body.password;
  if(userPassword) {
    req.body.password = bcrypt.hashSync(userPassword, bcrypt.genSaltSync(10))
  }
  const result = await User.findByIdAndUpdate(_id, req.body);

  if (!result) {
    throw new NotFound('Not found');
  }
  res.json(result);
};

module.exports = updateUser;
