var angular = require('angular');
require('../styles/vendor/bootstrap/dist/css/bootstrap.min.css');

if(ON_TEST){
    require('angular-mocks/angular-mocks');
}

var fitwatch = angular.module('fitwatch', [require('angular-route')]);

fitwatch.factory("sectionid",function(){
    return {};
});



fitwatch.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'start.html'
    }).when('/section/:id', {
      controller: 'SectionCtrl',
        templateUrl: 'subcategories.html'
    }).when('/Videos', {
        controller: 'VideosCtrl',
        templateUrl: 'videos.html'
    }).when('/Notes', {
        controller: 'NotesCtrl',
        templateUrl: 'notes.html'
    }).when('/Links', {
        controller: 'LinksCtrl',
        templateUrl: 'links.html'
    }).otherwise({redirectTo: '/'});

}]);



angular.module('fitwatch').controller('MainCtrl',['$scope', function($scope){
    var self = this;
    self.name = "FWatch";
    $scope.sections = [
        {'name':'Cycling'},
        {'name':'Climbing'},
        {'name': 'Swimming'}
    ]
}]);

angular.module('fitwatch').controller('SectionCtrl',function($scope, $routeParams, $location, sectionid){

    var self = this;
    $scope.sectionid = sectionid;

    $scope.section = $scope.sections[$routeParams.id];
    $scope.id = $routeParams.id;
    $scope.sectionid.id =  $scope.id

    $scope.contents = [
        {'name':'Videos'},
        {'name':'Notes'},
        {'name': 'Links'}
    ]
});

angular.module('fitwatch').controller('NotesCtrl',function($scope, $routeParams, $location, sectionid){
    $scope.sectionid = sectionid;
    $scope.id = $scope.sectionid.id;
    console.log("Notes"+ $scope.id);

});

angular.module('fitwatch').controller('VideosCtrl',function($scope, $routeParams, $location, sectionid){
    $scope.sectionid = sectionid;
    $scope.id = $scope.sectionid.id;
    console.log("Vidoes");

});

angular.module('fitwatch').controller('LinksCtrl',function($scope, $routeParams, $location, sectionid){
    $scope.sectionid = sectionid;
    $scope.id = $scope.sectionid.id;
    console.log("Links");

});




// Templates

require('ng-cache!./templates/views/subcategories.html');
require('ng-cache!./templates/views/start.html');
require('ng-cache!./templates/views/videos.html');
require('ng-cache!./templates/views/notes.html');
require('ng-cache!./templates/views/links.html');
