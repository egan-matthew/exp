/* param 'app' is an instance of the express application 
   uses appliation instance passed in from express.js to 
   mount a new routing configuration
*/
module.exports = function(app) {
	var index = 
		require('../controllers/index.server.controller');
	app.get('/', index.render);
};