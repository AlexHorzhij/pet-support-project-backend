const { Unauthorized } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../../config.js');
;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized('Email is wrong');
  }

  if (!user.verify) {
    throw new Unauthorized('Email is not verify');
  }
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw new Unauthorized('Password is wrong');
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
      token,
      email 
  });
};
module.exports = login;
