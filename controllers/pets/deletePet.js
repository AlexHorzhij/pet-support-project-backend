const { Pet } = require('../../models');
const { NotFound } = require('http-errors');

const deletePet = async (req, res) => {
  const { id } = req.params;
  const result = await Pet.findByIdAndRemove(id);

  if (!result) {
    throw new NotFound('Not found');
  }

  res.json({
    message: 'Pet deleted',
  });
};

module.exports = deletePet;
