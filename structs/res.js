const codeMap = require('./codeMap');


const Layout = {
  data: null,
  ststus: {
    code: '',
    time: '',
    message: '',
  },
};

module.exports = (code, data = null) => {
  Layout.data = data;
  Layout.ststus.time = new Date();
  Layout.ststus.message = codeMap[code] || codeMap[100];
  Layout.ststus.code = codeMap[code] ? code : 100;
  
  return Layout;
}