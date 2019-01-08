const Response = require('../structs/res');
const Validation = require('./Validation');

/**
 * crash hook
 * @returns Obj Response(100)
 */
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err)
    // Validation
    if (Validation(err)) {
      ctx.body = Response(1);
      return;
    }

    ctx.body = Response(100);
    // ctx.app.emit('error', err, ctx);
  }
}
