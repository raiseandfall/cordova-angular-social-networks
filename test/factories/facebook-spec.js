describe('Facebook factory', function() {
  var factory,
      mockParams = {
    clientId: 'client_id_mock',
    redirectUri: 'http://redirect_uri_mock.url',
    scope: 'email,publish_actions',
    reponseType: 'code'
  };

  beforeEach(module('raiseandfall.ngSocialNetworks'));

  beforeEach(inject(function ($injector) {
    factory = $injector.get('FacebookManager');
  }));

  describe('FacebookManager', function () {

    it('Should be defined', function () {
      expect(factory).toBeDefined();
    });

    it('Should set and get Facebook app parameters', function () {
      factory.set(mockParams);
      expect(factory.get()).toEqual(mockParams);
    });
  });
});
