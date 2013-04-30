'use strict';

angular.module('billingstack', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/index.html'}).
        when('/communicate', {templateUrl: 'partials/communicate.html'}).
        when('/documentation', {templateUrl: 'partials/documentation.html'})
    }])