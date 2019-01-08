const Response = require('../structs/res');
const { Mongo } = require('../config');

// test data
const UserList = [{
  uuid: '121hf12',
  name: 'adam',
  age: 26,
}, {
  uuid: '19283121',
  name: 'Peter',
  age: 20,
}, {
  uuid: '1231423',
  name: 'Tina',
  age: 30,
}, {
  uuid: '1231423',
  name: 'Mao',
  age: 23,
}];

/**
 * Get Users info
 */
const Users = async ctx => {
  const { DBName } = Mongo;
  const [ res, err ] = await ctx.mongo.DB(DBName).col('Customer').find({});
  console.log(res)


  // Data
  const Data = Object.assign([], UserList)

  // Response
  ctx.body = Response(0, Data);
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
  const { uuid, name, age } = ctx.request.body;

  const arr = UserList.push({
    uuid,
    name,
    age
  })
  ctx.body = Response(0, arr)
};

const DeleteUser = async ctx => {
  const { uuid } = ctx.request.body;
  ctx.body = Response(0, uuid);
}

module.exports = { Users, User, CreateUser, DeleteUser };
