const fs = require('fs');

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Visie - Teste';
      return args;
    });
  },
  devServer: {
    host: 'localhost',
    https: {
      key: fs.readFileSync('./licensed+5-key.pem'),
      cert: fs.readFileSync('./licensed+5.pem'),
    },
  },
};
