describe('mailcheck directive', function() {
  'use strict';
  var $rootScope, $compile;

  function compileAndDigest(html) {
    var element = angular.element(html);
    $compile(element)($rootScope);
    $rootScope.$digest();

    return element;
  }

  beforeEach(module('tf.mailcheck'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  it('should compile and digest successfully', function() {
    var t = '<input ng-model="model" tf-mailcheck="suggestion">';
    compileAndDigest(t);
  });

  it('should set suggestion to null when model is empty', function() {
    $rootScope.model = '';
    var t = '<input ng-model="model" tf-mailcheck="suggestion">';
    compileAndDigest(t);
    expect($rootScope.suggestion).to.equal(null);
  });

  it('should set suggestion when mailcheck suggests an email of model', function() {
    $rootScope.model = 'user@hotnail.con';
    var t = '<input ng-model="model" tf-mailcheck="suggestion">';
    compileAndDigest(t);
    expect($rootScope.suggestion).to.be.an('object');
  });

  it('should listen to view changes', function() {
    $rootScope.model = '';
    var t = '<input ng-model="model" tf-mailcheck="suggestion">';
    var el = compileAndDigest(t);
    var ngModelController = el.controller('ngModel');
    ngModelController.$setViewValue('user@hotnail.con');
    expect($rootScope.suggestion).to.be.an('object');
  });

  it('should listen to model changes', function() {
    $rootScope.model = '';
    var t = '<input ng-model="model" tf-mailcheck="suggestion">';
    var el = compileAndDigest(t);
    el.controller('ngModel');
    $rootScope.model = 'user@hotnail.con';
    $rootScope.$digest();
    expect($rootScope.suggestion).to.be.an('object');
  });

  it('should extend options usign tf-mailcheck-options', function() {
    var emptyFired = false;
    $rootScope.model = '';
    $rootScope.options = {
      empty: function() {
        emptyFired = true;
      }
    };
    var t = '<input ng-model="model" tf-mailcheck="suggestion" tf-mailcheck-options="options">';
    compileAndDigest(t);
    expect(emptyFired).to.equal(true);
  });

});
