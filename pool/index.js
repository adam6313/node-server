const mongo = require('./mongo');
const { Mongo } = require('../config');
const { isEmpty } = require('lodash');

// init
module.exports = async app => {
  // mongo
  const [ client, err ] = await new mongo(Mongo).init();
  if (err) {
    return err;
  }
  app.context.mongo = client;
}
