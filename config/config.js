// loads the correct configuration file according to the
// process.env.NODE_ENV environmental variable
module.exports = require('./env/' + process.env.NODE_ENV + 
	'.js');