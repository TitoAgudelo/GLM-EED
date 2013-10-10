'use strict';

/* Directives */

var directives = angular.module('glm.directives', []);

directives.directive('directive1', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "Url/index.html",
        scope: {
                
        }
    }
});