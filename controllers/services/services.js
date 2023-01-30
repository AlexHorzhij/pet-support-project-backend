const { Service } = require('../../models');

const getServices = async (req, res) => {
  const services = await Service.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: services,
    },
  });
};

module.exports = getServices;
