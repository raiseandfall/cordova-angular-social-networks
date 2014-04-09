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
	function FacebookManager ($http, $q, Cordova) {

		'use strict';

		var FB_APP_PARAMS,
        login,
				share,
        get,
        set;

		/**
		 * @function	authorize
		 *
		**/
		var _authorize = function () {

		};


		/**
		 * @function			getLoginURL
		 * @description		Returns URL to the facebook authentication dialog
		**/
		var _buildLoginURL = function () {
			return  'https://www.facebook.com/dialog/oauth' +
							'?client_id=' + FB_APP_PARAMS.clientId +
							'&redirect_uri=' + FB_APP_PARAMS.redirectUri +
							'&response_type=' + FB_APP_PARAMS.reponseType +
							'&scope=' + FB_APP_PARAMS.scope;
		};

		/**
		 * @function			getAccessToken
		 * @description		Get an access token from Facebook
		**/
		var _getAccessToken = function (code) {

		};


		/**
		 * @function			set
		 * @description		set Facebook app ID & SECRET
		**/
		set = function (obj) {
			FB_APP_PARAMS = obj;
		};

    /**
     * @function			get
     * @description		get Facebook app ID & SECRET
    **/
    get = function () {
      return FB_APP_PARAMS;
    };


		/**
		 * @function	login
		**/
		login = function () {

		};


		/**
		 * @function			share
		 * @description		Shares content on Facebook's user wall
		**/
		share = function (content) {

		};


		return {
      get: get,
      set: set,
			login: login,
			share: share
		};
	}
]);
