const Router = require('koa-router');

// router
const router = new Router();
const { Test, Users, User, CreateUser, DeleteUser } = require('../controller/user');
const { User_req, CreateUser_req, DeleteUser_req } = require('../structs/req');

// Test
router.get('/test', Test);

// Get users
router.get('/users', Users);

// Get user
router.get('/user', User_req, User);

// Create user
router.post('/user', CreateUser_req, CreateUser);

// Delete user
router.del('/user', DeleteUser_req, DeleteUser)

module.exports = router;
