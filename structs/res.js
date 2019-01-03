const codeMap = require('./codeMap');

// Default response struct
const Layout = {
  data: null,
  status: {
    code: '',
    time: '',
    message: '',
  },
};

module.exports = (code, data = null) => {
  Layout.data = data;
  Layout.status.time = new Date();
  Layout.status.message = codeMap[code] || codeMap[100];
  Layout.status.code = codeMap[code] ? code : 100;
  
  return Layout;
}