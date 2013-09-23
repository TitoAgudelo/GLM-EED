'use strict';

/* Controllers */


app.controller('personsController', ['$scope', 'dataFactory',
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
                            $scope.status = 'Unable to load person data: ' + error.message;
                        });
                }
            };
        }]);

app.controller('navController', ['$scope', function ($scope) {
        $scope.content = false;
        $scope.options = function () {
            $scope.content = !$scope.content;
        };
    }]);


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



