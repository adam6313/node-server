const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const crash = require('./crash');
const Validation = require('./Validation');

/**
 * Root middleware
 * @param { Object } app
 * @param { Object } router
 */
module.exports = (app, router) => {
  app.use(crash)
     .use(Validation)
     .use(logger())
     .use(bodyParser())
     .use(router.routes())
     .use(router.allowedMethods())
};