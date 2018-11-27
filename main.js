const Koa = require('koa');
const middleware = require('./middleware');
const router = require('./router');
const { PORT } = require('./config');

// Koa
const app = new Koa();
const s = process.env.NODE_ENV
console.log(s)

// middleware
middleware(app, router);

// lister http port
app.listen(PORT, () => {
  console.log(`Server will run at http://localhost:${PORT}`);
});
