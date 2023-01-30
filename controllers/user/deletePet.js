const { Pet } = require('../../models');
const { NotFound } = require('http-errors');

const deletePet = async (req, res) => {
  const { petId } = req.params;
  const result = await Pet.findByIdAndRemove(petId);

  if (!result) {
    throw new NotFound('Not found');
  }

  res.json({
    message: 'Pet deleted',
  });
};

module.exports = deletePet;
