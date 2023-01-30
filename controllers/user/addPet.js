const { Pet } = require('../../models');


const addPet = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Pet.create({...req.body, owner});

  res.status(201).json(result);
};

module.exports = addPet;