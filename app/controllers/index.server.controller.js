/* To any file requiring this module, it returns an object
	whose render property is the following function
*/
exports.render = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}

	// set lastVisit property in the session object to 
	// current date and time
	req.session.lastVisit = new Date();

	// arg1 is ejs template wthout .ejs
	// arg2 is object containing template vars
	res.render('index', {
		title: 'Hello World'
	});
};