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