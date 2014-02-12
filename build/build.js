/**
 * cordova-angular-social-networks
 *
 * @author Matthieu COLLE
 * @url https://github.com/raiseandfall/cordova-angular-social-networks
 */

var ngSocialNetworks = angular.module('ngSocialNetworks', []);
/**
 * cordova-angular-social-networks
 *
 * @author Matthieu COLLE
 * @url https://github.com/raiseandfall/cordova-angular-social-networks
 */

ngSocialNetworks.service('Cordova', [
	'$document',
	'$q',
	'$timeout',
  function($document, $q, $timeout) {

		'use strict';

    var d = $q.defer(),
        resolved = false;

    var self = this;
    this.ready = d.promise;

    document.addEventListener('deviceready', function() {
      resolved = true;
      d.resolve(window.cordova);
    });

    // Did we miss the event ?
    $timeout(function() {
      if (!resolved) {
        if (window.cordova) {
          d.resolve(window.cordova);
        }
      }
    }, 3000);
  }
]);
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
