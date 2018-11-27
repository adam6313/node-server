const { 
  default: validator,
  object,
  string,
  number } = require('koa-context-validator');

const CreateUser_req = validator({
  body: object().keys({
    name: string().required(),
    age: number().required(),
  }),
});

module.exports = { CreateUser_req };
  