const { Pet } = require('../../models');
const { NotFound } = require('http-errors');

const updatePet = async (req, res, next) => {
  const petId = req.params.id;
  const result = await Pet.findByIdAndUpdate(petId, req.body);

  if (!result) {
    throw new NotFound('Not found');
  }
  res.json(result);
};

module.exports = updatePet;
