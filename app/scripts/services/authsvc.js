'use strict';

/**
 * @ngdoc service
 * @name weberApp.authsvc
 * @description
 * # authsvc
 * Factory in the weberApp.
 */
angular.module('weberApp')
  .factory('authsvc', function ($http, $q, $window) {
   var userInfo;

    function login(userName, password) {
        var deferred = $q.defer();
        if(userName && userName == password){
            userInfo = {
                accessToken: "result.data.access_token",
                userName: "result.data.userName"
            };
            deferred.resolve(userInfo);
        } else {
            deferred.reject("error");
        }
        return deferred.promise;

        $http.post("/api/login", { userName: userName, password: password })
            .then(function (result) {
                userInfo = {
                    accessToken: result.data.access_token,
                    userName: result.data.userName
                };
                $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
                deferred.resolve(userInfo);
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    }

    function logout() {
        var deferred = $q.defer();

        $http({
            method: "POST",
            url: "/api/logout",
            headers: {
                "access_token": userInfo.accessToken
            }
        }).then(function (result) {
            userInfo = null;
            $window.sessionStorage["userInfo"] = null;
            deferred.resolve(result);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getUserInfo() {
        return userInfo;
    }

    function init() {
        if ($window.sessionStorage["userInfo"]) {
            userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
    }
    init();

    return {
        login: login,
        logout: logout,
        getUserInfo: getUserInfo
    };
  });
