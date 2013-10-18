'use strict';

/* Controllers */

var ctrls = angular.module('glm.controllers', []);

// Controller for header nav aside elements 
ctrls.controller('navController', ['$scope', function ($scope) {
    $scope.content = false;
    $scope.options = function () {
        $scope.content = !$scope.content;
    };
}]);

// Controller for WS email for validate user and login
ctrls.controller('personsController', ['$scope', 'dataFactory',
        function ($scope, dataFactory) {
            var provider;
            $scope.updateOptions = function () {
                var email = $scope.email;

                if (provider) {
                    $scope[provider] = false;
                }

                getPersons();

                function getPersons() {
                    dataFactory.getPersons(email)
                        .success(function (pers) {
                            if (pers) {
                                provider = pers.Provider;
                                $scope[provider] = true;
                            }
                        })
                        .error(function (error) {
                            $scope.noUser = true;
                        });
                }
            };
        }]);


// Controller for menu lunch
ctrls.controller('menuController', ['$scope', 'dataFactory',
    function ($scope, dataFactory) {
        $scope.listItems = function (category) {
            var cat = category.category;

            dataFactory.getItems(cat)
                .success(function (items) {
                    if (items) {
                        $scope.contentItem = true;
                        $scope.itemList = items;
                    }
                })
                .error(function (error) {

                });
        };
        $scope.closeWindow = function () {
            $scope.contentItem = false;
        }
    }
]);

//function CtrlForm($scope, $http) {
//$scope.updateOptions = function () {
//    $scope.glm = $scope.email.endsWith('@glm.edu.co');
//    $scope.google = $scope.email.endsWith('@gmail.com');
//    $scope.outlook = $scope.email.endsWith('@hotmail.com');
//    $scope.yahoo = $scope.email.endsWith('@yahoo.com');
//    $scope.user = $scope.email.endsWith('@register.com');
//    $scope.newpassword = $scope.email.endsWith('@password.com');
//    $scope.newregister = $scope.email.endsWith('@noregister.com');
//};



