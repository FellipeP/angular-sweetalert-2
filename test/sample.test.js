'use strict';

describe('Angular Sweet Alert module test', function() {

  var SweetAlertInstance = null;

  // Inject the module into the karma sandbox
  beforeEach(module('socialbase.sweetAlert'));

  // Compose a new instance of SweetAlert before each test
  beforeEach(inject(function(SweetAlert) {
    SweetAlertInstance = SweetAlert;
  }));

  it('can get an instance of the factory', function() {
    expect(SweetAlertInstance).toBeDefined();
  });

  it('returns an object containing the alert', function(done) {
    try {
      expect(typeof SweetAlertInstance).toBe('object');
      expect(SweetAlertInstance.hasOwnProperty('swal')).toBeTruthy();
      done();
    } catch(e) {
      done(e);
    }
  });

});
