/**
 * cordova-angular-social-networks
 *
 * @author Matthieu COLLE
 * @url https://github.com/raiseandfall/cordova-angular-social-networks
 */

ngSocialNetworks.factory('Facebook', [
	'$http',
	'$q',
	'Cordova',
	function Facebook($http, $q, Cordova) {

		'use strict';

		var _self = this,
				login,
				share;

		//
		// @function	authorize
		//
		_self.authorize = function() {

		};


		//
		// @function	getLoginURL
		//
		// Returns URL to the facebook authentication dialog
		_self.getLoginURL = function() {

		};

		//
		// @function	getAccessToken
		//
		// Get an access token from Facebook
		_self.getAccessToken = function(code) {

		};


		//
		// @function	login
		//
		login = function() {

		};


		//
		// @function	share
		//
		// Shares content on Facebook's user wall
		share = function(content) {

		};


		return {
			login: login,
			share: share
		};
	}
]);
