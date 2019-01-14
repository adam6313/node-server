const { 
  default: validator,
  object,
  string,
  boolean,
  number } = require('koa-context-validator');

User_req = validator({
  query: object().keys({
    id: string().required(),
  })
})

const CreateUser_req = validator({
  body: object().keys({
    identity: string().required(),
    age: number().required(),
    sex: string().required(),
    name: string().required(),
    tel: string().required(),
    phone: number().required(),
    birthday: string().required(),
    marriage: boolean().required(),
    blood: string().required(),
    height: number().required(),
    weight: number().required(),
  }),
})

const DeleteUser_req = validator({
  body: object().keys({
    id: string().required()
  })
})

module.exports = { User_req, CreateUser_req, DeleteUser_req };
