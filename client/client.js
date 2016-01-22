/**
 * Created by user on 1/21/16.
 */
var app = angular.module('routeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/bernie', {
            templateUrl: 'views/bernie.html',
            controller: 'BernieController'
        })

        .when('/bernie', {
            templateUrl: 'views/bernie.html',
            controller: 'BernieController'
        })

        .when('/hilary', {
            templateUrl: 'views/hilary.html',
            controller: 'HilaryController'
        })

        .when('/martin', {
            templateUrl: 'views/martin.html',
            controller: 'MartinController'
        })

        .when('/marco', {
            templateUrl: 'views/marco.html',
            controller: 'MarcoController'
        })

        .when('/donald', {
            templateUrl: 'views/donald.html',
            controller: 'DonaldController'
        })

        .when('/ted', {
            templateUrl: 'views/ted.html',
            controller: 'TedController'
        })

    //this prevents page from getting an error when you refresh
    $locationProvider.html5Mode(true);

}]);

app.controller('BernieController', ['$scope', function($scope){

}]);

app.controller('HilaryController', ['$scope', function($scope){

}]);

app.controller('MartinController', ['$scope', function($scope){

}]);

app.controller('MarcoController', ['$scope', function($scope){

}]);

app.controller('DonaldController', ['$scope', function($scope){

}]);

app.controller('TedController', ['$scope', function($scope){

}]);
