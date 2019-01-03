// merge environment
const { NODE_ENV } = process.env;
const Product = NODE_ENV === 'develop' ? {} : require('./env.pro');

module.exports = {
  ...require('./env.dev'),
  ...Product,
};
