const dotenv = require('dotenv');
dotenv.config();
// from this file we will be accessing our port
// url : https://www.npmjs.com/package/dotenv
// simliar hai require('dotenv').config() . humlog bas dotenv name ka variable bana liye hai phir uske baad .config() function attach kiye h 


module.exports = {
    PORT : process.env.PORT,
}