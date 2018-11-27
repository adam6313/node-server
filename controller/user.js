const Response = require('../structs/res');

/**
 * Get Users info
 */
const Users = async ctx => {
  // Data
  const data = [{
    name: 'Adam',
    age: 26,
  }, {
    name: 'Peter',
    age: 20,
  }];

  // Response
  ctx.body = Response(0, data);
};

/**
 * crash hook Demo
 */
const User = async ctx => {
  console.log(not_Variable); // crash script
  
  ctx.body = Response(0);
}

/**
 * Create user
 */
const CreateUser = async ctx => {
  const { name, age } = ctx.request.body;
  ctx.body = Response(0, {
    name,
    age
  })
};

module.exports = { Users, User, CreateUser };
