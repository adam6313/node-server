const Koa = require('koa');
const middleware = require('./middleware');
const router = require('./router');
const { PORT } = require('./config');

// Koa
const app = new Koa();

// middleware
middleware(app);

// lister http port
app.listen(PORT, () => {
  console.log(`Server will run at http://localhost:${PORT}`);
});
