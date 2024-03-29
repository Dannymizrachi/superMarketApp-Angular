const expressJwt = require('express-jwt');
const config = require('../config.json');

// Extracting the text from the secret's JSON
let { secret } = config;

function authenticateJwtRequestToken() {
	// Load secret into
	return expressJwt({ secret }).unless({
		path: [
			// public routes that don't require authentication
			'/users/login',
			'/home',
			'/users/register',
			'/users/forgotPassword',
			'/cities',
			'/uploads/.*',
			'/uploads/:name',
		],
	});
}

module.exports = authenticateJwtRequestToken;
