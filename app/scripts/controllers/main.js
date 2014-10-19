'use strict';

/**
 * @ngdoc function
 * @name weberApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weberApp
 */
angular.module('weberApp')
  .controller('MainCtrl', function ($scope, Weberservice) {
      
    Weberservice.query(function(data) {
        $scope.users = data;
    });
    
    $scope.posts = [
      {title: 'post 1', upvotes: 4},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];
    
    $scope.addPost = function(){
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = '';
    };
    
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
    
    
  });
