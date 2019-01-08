const mongo = require('./mongo');
const { Mongo } = require('../config');

// init
module.exports = async app => {
  // // mongo
  // const [ mongoConnect, mongoErr ] = await mongo();
  // if (mongoErr) {
  //   throw new Error('mongo connect error');
  // }
  // // set app.context property
  // app.context.mongo = mongoConnect;
  app.context.mongo = await new mongo(Mongo);
}
