'use strict';

/**
 * @ngdoc function
 * @name weberApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weberApp
 */
angular.module('weberApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
