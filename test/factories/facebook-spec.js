describe('Facebook factory', function() {
  var factory;

  beforeEach(module('ngSocialNetworks'));

  beforeEach(inject(function ($injector) {
    factory = $injector.get('FacebookManager');
  }));

  describe('FacebookManager', function () {

    it('Should be defined', function () {
      expect(factory).toBeDefined();
    });

    it('Should set parameters', function () {
      var helloWorld = factory.set({});
      expect(factory.get()).toEqual({});
    });
  });
});
