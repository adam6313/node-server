const Response = require('../structs/res');

/**
 * crash hook
 * @returns Obj Response(100)
 */
// module.exports = () => (
//   async (ctx, next) => {
//     try {
//       await next();
//     } catch (err) {
//       ctx.body = Response(100);
//       ctx.app.emit('error', err, ctx);
//     }
//   }
// );

module.exports = async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.body = Response(100);
      ctx.app.emit('error', err, ctx);
    }
  }
