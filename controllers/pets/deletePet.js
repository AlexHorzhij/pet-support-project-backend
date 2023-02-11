const { Pet } = require('../../models');
const { NotFound } = require('http-errors');

const deletePet = async (req, res) => {
  const { id } = req.params;
  const result = await Pet.findByIdAndRemove(id);

  if (!result) {
    throw new NotFound('Pet not found');
  }

  res.status(200).json({
    message: 'Pet deleted',
    result,
  });
};

module.exports = deletePet;
