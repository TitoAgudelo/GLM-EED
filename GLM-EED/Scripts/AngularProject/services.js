'use strict';

/* Services */

var services = angular.module('glm.services', []);

services.service('dataService', ['$http', function ($http) {
    var urlBase = '../api/person';

    this.getPersons = function () {
        return $http.get(urlBase);
    };

    this.getPerson = function (id) {
        return $http.get(urlBase + '/' + id);
    };

}]);


services.factory('dataFactory', ['$http', function ($http) {
    var urlBase = '../api/person';
    var dataFactory = {};

    //get person by method get at the service in personController
    dataFactory.getPersons = function (email) {
        return $http.get(urlBase + '?email=' + email);
    };

    dataFactory.getPerson = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    return dataFactory;
}]);
