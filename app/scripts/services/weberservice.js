'use strict';

/**
 * @ngdoc service
 * @name weberApp.weberService
 * @description
 * # weberService
 * Service in the weberApp.
 */
angular.module('weberApp')
  .service('Weberservice', function ($resource) {
        return $resource('http://beta.json-generator.com/api/json/get/Hv964QM');
  });
