const Koa = require('koa');
const middleware = require('./middleware');
const { PORT } = require('./config');

const PoolInit = require('./pool');


const init = async (app, callback) => {

  // Init DB
  if (await PoolInit(app)) {
    throw('Mongo connect error');
  }
  
  // middleware
  middleware(app);

  // listen
  callback(app);
}

// init
init(new Koa(), app => 
  app.listen(PORT, () => 
    console.log(`Server will run at http://localhost:${PORT}`))
)

// (() => {
//   // Koa
//   const app = new Koa();

//   // Init DB
//   PoolInit(app);

//   // middleware
//   middleware(app);

//   // lister http port
//   app.listen(PORT, () => {
//     console.log(`Server will run at http://localhost:${PORT}`);
//   });
// })();
