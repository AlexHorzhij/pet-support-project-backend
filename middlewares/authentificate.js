const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');
const { User } = require('../models');
const { SECRET_KEY } = require('../config.js');

const authentificate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') {
    next(Unauthorized('Not authorized'));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      next(Unauthorized('Not authorized'));
    }
    req.user = user;
    next();
  } catch {
    next(Unauthorized('Not authorized'));
  }
};
module.exports = authentificate;
