var angular = require('angular');
require('../styles/vendor/bootstrap/dist/css/bootstrap.min.css');

if(ON_TEST){
    require('angular-mocks/angular-mocks');
}



angular.module('fitwatch', [require('angular-route')]).controller('MainCtrl',[ function(){
var self = this;
    self.name = "FWatch";


}]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'start.html'
    }).when('/climbing', {
        templateUrl: 'subcategories.html'
    }).when('/cycling', {
        templateUrl: 'subcategories.html'
    }).when('/swimming', {
        templateUrl: 'subcategories.html'
    }).otherwise({redirectTo: '/'});

}]);

// Templates
require('ng-cache!./templates/views/choose.html');
require('ng-cache!./templates/views/subcategories.html');
require('ng-cache!./templates/views/start.html');
