// merge environment
module.exports = {
  ...require('./env.dev'),
  ...require('./env.pro'),
};
