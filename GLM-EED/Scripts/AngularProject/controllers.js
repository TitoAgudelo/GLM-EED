'use strict';

/* Controllers */

function CtrlForm($scope, $http) {
    //$scope.updateOptions = function () {
    //    $scope.glm = $scope.email.endsWith('@glm.edu.co');
    //    $scope.google = $scope.email.endsWith('@gmail.com');
    //    $scope.outlook = $scope.email.endsWith('@hotmail.com');
    //    $scope.yahoo = $scope.email.endsWith('@yahoo.com');
    //    $scope.user = $scope.email.endsWith('@register.com');
    //    $scope.newpassword = $scope.email.endsWith('@password.com');
    //    $scope.newregister = $scope.email.endsWith('@noregister.com');
    //};

    var provider;

    $scope.updateOptions = function () {
        var email = $scope.email;
        var apiUrl = '../api/person';

        if (provider) {
            $scope[provider] = false;
        }

        $http.get(apiUrl + '?email=' + email).
        success(function (data, status, headers, config) {
            if (data) {
                provider = data.Provider;
                console.log(data);
                $scope[provider] = true;
            } else {
                console.log("error data is undefind");
            }
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.  
            console.log(data);
        });
    };
}