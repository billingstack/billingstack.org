'use strict';

angular.module('billingstack', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/index.html'}).
        when('/communicate', {templateUrl: 'partials/communicate.html'}).
        when('/documentation', {templateUrl: 'partials/documentation.html'})
    }])


function ListsController($scope, $http) {
    $http.get('mlmmj_lists.php').success(function(response) {
        $scope.lists = response
    })

    $scope.email = null
    $scope.mailinglists = null
    $scope.job = 'subscribe'

    $scope.doSubmit = function() {
        //$http.post('mlmmj.php', data).success(function(response) {
        //})
        angular.forEach($scope.mailinglist, function(ml) {
            var data = {
                email: $scope.email,
                mailinglist: ml,
                job: $scope.job,
                redirect_success: 'x',
                redirect_failure: 'x',
            }
            $http({
                method: 'POST',
                url: 'mlmmj.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .success(function(response) {
                $scope.messages.push("Subscribed to " + ml)
            })
        })
    }
}
