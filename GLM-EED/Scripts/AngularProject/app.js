var app = angular.module('glm', [
        'glm.controllers',
        'glm.filters',
        'glm.directives',
        'glm.services'
]);

//app.config(["$routePorvider", function ($routeProvider) {
//    $routePorvider
//        .when("Url", { controller: "controller1", templateUrl: "UrlTemplate" })
//        .otherwise({redirectTo: "Url"})
//}])
