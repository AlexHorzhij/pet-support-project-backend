const regexName = /^[a-zA-Z\s,\u0400-\u04FF]*$/;
const regexDate =
  /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
const regexPhone = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;

module.exports = {
  regexDate,
  regexName,
  regexPhone,
};
