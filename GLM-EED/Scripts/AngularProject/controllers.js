'use strict';

/* Controllers */

function CtrlForm($scope) {
  $scope.updateOptions = function () {
    $scope.glm = $scope.email.endsWith('@glm.edu.co');
    $scope.google = $scope.email.endsWith('@gmail.com');
    $scope.outlook = $scope.email.endsWith('@hotmail.com');
    $scope.yahoo = $scope.email.endsWith('@yahoo.com');
    $scope.user = $scope.email.endsWith('@register.com');
    $scope.newpassword = $scope.email.endsWith('@password.com');
    $scope.newregister = $scope.email.endsWith('@noregister.com');
  }
}