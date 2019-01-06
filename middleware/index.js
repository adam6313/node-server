const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const crash = require('./crash');
const Validation = require('./Validation');
const router = require('../router');
/**
 * Root middleware
 * @param { Object } app
 */
module.exports = app => {
  app.use(crash)
     .use(logger())
     .use(bodyParser())
     .use(router.routes())
     .use(router.allowedMethods())
};