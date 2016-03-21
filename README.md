# angular.mailcheck

[![npm version](http://img.shields.io/npm/v/angular.mailcheck.svg)](https://npmjs.org/package/angular.mailcheck) [![bower version](https://img.shields.io/bower/v/angular.mailcheck.svg)](https://github.com/tfoxy/angular.mailcheck/releases) [![build status](https://img.shields.io/travis/tfoxy/angular.mailcheck.svg)](https://travis-ci.org/tfoxy/angular.mailcheck)

Reduce user-misspelled email addresses in your angular forms.


## Requirements

  - [AngularJS](https://github.com/angular/angular.js)
  - [mailcheck.js](https://github.com/mailcheck/mailcheck)


## Load into your app

You can get it from [Bower](http://bower.io/)

```sh
bower install angular.mailcheck
```

or [npm](http://npmjs.com/)

```sh
npm install angular.mailcheck
```

Load the script files in your application:

```html
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/mailcheck/src/mailcheck.js"></script>
<script type="text/javascript" src="bower_components/angular.mailcheck/angular-mailcheck.js"></script>
```

Add the specific module to your dependencies:

```javascript
angular.module('myApp', ['tf.mailcheck', ...])
```


## Usage examples

[Live demo](http://jsbin.com/sigopi/embed?html,output)

```html
<div>
  <input
    type="email"
    ng-model="vm.email"
    tf-mailcheck="vm.suggestion"
  />
  <div ng-if="vm.suggestion">
    Did you mean 
    <a href ng-click="vm.email = vm.suggestion.full">
      {{vm.suggestion.full}}</a>?
  </div>
</div>


<!-- Pass options with tf-mailcheck-options -->
<!-- Options: https://github.com/mailcheck/mailcheck#usage-without-jquery -->
<div>
  <input
    type="email"
    ng-model="vm.email2"
    tf-mailcheck="vm.suggestion2"
    tf-mailcheck-options="{secondLevelDomains: ['foobar']}"
  />
  <div ng-if="vm.suggestion2">
    Did you mean 
    <a href ng-click="vm.email2 = vm.suggestion2.full">
      {{vm.suggestion2.full}}</a>?
  </div>
</div>
```
