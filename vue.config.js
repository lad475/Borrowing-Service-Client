const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
      	path.resolve(__dirname, 'src/assets/stylesheets/*.scss'),
      ]
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
  	? '/Borrowing-Service-Client/' : '/'
}
