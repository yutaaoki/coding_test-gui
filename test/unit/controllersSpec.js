'use strict';

/* jasmine specs for controllers go here */

describe('TestListCtrl', function(){
  beforeEach(module('codingAdminApp'));


  it('create json data', inject(function($controller) {
    //spec body
    var scope {},
      ctrl = = $controller('TestListCtrl', { $scope: scope });
    expect(scope.tests.length).toBe(2);
  }));

});
