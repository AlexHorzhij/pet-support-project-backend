const DatauriParser = require('datauri/parser');

const parser = new DatauriParser();

const formatParcer = (fileFormat, buffer) => parser.format(fileFormat, buffer);

module.exports = formatParcer;
