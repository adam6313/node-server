const Router = require('koa-router');

// router
const router = new Router();
const { Users, User, CreateUser } = require('../controller/user');
const { CreateUser_req } = require('../structs/req');

// End port
router.get('/users', Users);
router.get('/user', User);
router.post('/user', CreateUser_req, CreateUser);

module.exports = router;