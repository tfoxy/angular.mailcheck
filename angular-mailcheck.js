/*!
 * angular.mailcheck v0.1.0
 * https://github.com/tfoxy/angular.mailcheck
 *
 * Copyright 2016 Tomás Fox
 * Released under the MIT license
 */

(function() {
  'use strict';

  angular.module('tf.mailcheck', [])
    .constant('Mailcheck', Mailcheck)
    .directive('tfMailcheck', tfMailcheckDirective);


  tfMailcheckDirective.$inject = ['$parse', 'Mailcheck'];

  function tfMailcheckDirective($parse, Mailcheck) {
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: mailcheckCompile
    };

    function mailcheckCompile(element, attrs) {
      var modelSetter = $parse(attrs.tfMailcheck).assign;
      var optionsGetter = $parse(attrs.tfMailcheckOptions);
      return mailcheckLink;

      function mailcheckLink(scope, element, attrs, ngModelController) {
        scope.$watch(function () {
          return ngModelController.$modelValue;
        }, setSuggestion);

        function setSuggestion(email) {
          var options = {
            email: email
          };
          var moreOptions = optionsGetter(scope, {$email: email});
          angular.extend(options, moreOptions);

          var suggestion = Mailcheck.run(options);
          modelSetter(scope, suggestion || null);
        }
      }
    }
  }
})();
