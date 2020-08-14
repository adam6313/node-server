const Response = require('../structs/res');
const { Mongo: { DBName } } = require('../config');
const { isEmpty } = require('lodash');

/**
 * Test
 */
const Test = async ctx => {
  ctx.body = Response(0);
};

/**
 * Get Users info
 */
const Users = async ctx => {
  const [ res, err ] = await ctx.mongo.DB(DBName).col('Customer').find({});
  // mongo error
  if (err !== null) {
    ctx.body = Response(2);
    return;
  }

  // Is empty
  if (isEmpty(res)) {
    ctx.body = Response(0, []);
    return;
  }

  // Response
  ctx.body = Response(0, res);
};

/**
 * Get user by id
 */
const User = async ctx => {
  const { id } =  ctx.request.query;
  if (id.length !== 24) {
    ctx.body = Response(3);
    return;
  }
  const ObjectId = ctx.mongo.ObjectId(id);
  const [ res, err ] = await ctx.mongo.DB(DBName).col('Customer').find({ '_id': ObjectId });
  if (err !== null) {
    ctx.body = Response(2);
    return;
  }

  // Is empty
  if (isEmpty(res)) {
    ctx.body = Response(0);
    return;
  }
  ctx.body = Response(0, res);
}

/**
 * Create user
 */
const CreateUser = async ctx => {
  const { identity, age, sex, name, tel, phone, birthday, marriage, blood, height, weight } = ctx.request.body;

  let [ res, err ] = await ctx.mongo.DB(DBName).col('Customer').find({ identity })

  if (err !== null) {
    console.log(err)
    ctx.body = Response(2);
    return;
  }
  
  // has data
  if (res && !isEmpty(res)) {
    ctx.body = Response(4);
    return;
  }

  // insert data
  [ res, err ] = await ctx.mongo.DB(DBName).col('Customer').insertOne({
    identity,
    age,
    sex, 
    name,
    tel,
    phone,
    registered: new Date(),
    birthday,
    marriage,
    blood,
    height,
    weight
  })

  if (err !== null) {
    ctx.body = Response(2);
    return;
  }

  if (res) {
    ctx.body = Response(0);
    return;
  }
  ctx.body = Response(100);
};

/**
 * 
 * Delete user
 */
const DeleteUser = async ctx => {
  const { id } = ctx.request.body;
  if (id.length !== 24) {
    ctx.body = Response(3);
    return;
  }
  const ObjectId = ctx.mongo.ObjectId(id);
  const [ res, err ] = await ctx.mongo.DB(DBName).col('Customer').remove({ '_id': ObjectId });

  if (err !== null) {
    ctx.body = Response(2);
    return;
  }

  if (res && !isEmpty(res)) {
    ctx.body = Response(0);
    return;
  }
  ctx.body = Response(100);
}

module.exports = { Test, Users, User, CreateUser, DeleteUser };
