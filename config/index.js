// merge env obj
module.exports = {
  ...require('./env.dev'),
  ...require('./env.pro'),
};
