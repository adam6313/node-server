const mongo = require('./mongo');
const { Mongo } = require('../config');

// init
module.exports = async app => {
  // mongo
  app.context.mongo = await new mongo(Mongo);

}
