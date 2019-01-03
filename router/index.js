const Router = require('koa-router');

// router
const router = new Router();
const { Users, User, CreateUser, DeleteUser } = require('../controller/user');
const { CreateUser_req, DeleteUser_req } = require('../structs/req');

// Get users
router.get('/users', Users);

// Get user
router.get('/user', User);

// Create user
router.post('/user', CreateUser_req, CreateUser);

// Delete user
router.del('/user', DeleteUser_req, DeleteUser);

module.exports = router;
