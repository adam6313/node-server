const Koa = require('koa');
const middleware = require('./middleware');
const { PORT } = require('./config');

const PoolInit = require('./pool');

// Koa
const app = new Koa();

// init db
PoolInit(app);

// middleware
middleware(app);

// lister http port
app.listen(PORT, () => {
  console.log(`Server will run at http://localhost:${PORT}`);
});
