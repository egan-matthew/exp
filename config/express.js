var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session');

module.exports = function() {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// configure the views folder
	app.set('views', './app/views');
	// configure the template engine
	app.set('view engine', 'ejs');

	// require routing file and call it as a function
	// passing it the application object
	require('../app/routes/index.server.routes.js') (app);
	require('../app/routes/users.server.routes.js') (app);

	/* by placing this after the routing file(s) Express
	*/
	app.use(express.static('./public'));

	return app;
};