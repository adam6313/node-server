const Response = require('../structs/res');

/**
 * Validation hook
 * @returns Obj Response(100)
 */
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const hasName = Object.hasOwnProperty.call(error, 'name');
    if (hasName && error.name === 'ValidationError') {
      ctx.body = Response(1);
      return;
    }
    ctx.body = Response(100);
    ctx.app.emit('error', error, ctx);
  }
}