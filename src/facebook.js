/**
 * cordova-angular-social-networks
 *
 * @author Matthieu COLLE
 * @url https://github.com/raiseandfall/cordova-angular-social-networks
 */

ngSocialNetworks.factory('FacebookManager', [
	'$http',
	'$q',
	'Cordova',
	function FacebookManager($http, $q, Cordova) {

		'use strict';

		var _self = this,
				login,
				share,
        get,
        set;

		/**
		 * @function	authorize
		 *
		**/
		_self.authorize = function() {

		};


		/**
		 * @function			getLoginURL
		 * @description		Returns URL to the facebook authentication dialog
		**/
		_self.getLoginURL = function() {
			return  'https://www.facebook.com/dialog/oauth' +
							'?client_id=' + _self.FB_APP.clientId +
							'&redirect_uri=' + _self.FB_APP.redirectUri +
							'&response_type=code' +
							'&scope=email,user_relationships,user_friends,publish_actions';
		};

		/**
		 * @function			getAccessToken
		 * @description		Get an access token from Facebook
		**/
		_self.getAccessToken = function(code) {

		};


		/**
		 * @function			set
		 * @description		set Facebook app ID & SECRET
		**/
		set = function( obj ) {
			_self.FB_APP = obj;
		};

    /**
     * @function			get
     * @description		get Facebook app ID & SECRET
    **/
    get = function() {
      return _self.FB_APP;
    };


		/**
		 * @function	login
		**/
		login = function() {

		};


		/**
		 * @function			share
		 * @description		Shares content on Facebook's user wall
		**/
		share = function(content) {

		};


		return {
      get: get,
      set: set,
			login: login,
			share: share
		};
	}
]);
