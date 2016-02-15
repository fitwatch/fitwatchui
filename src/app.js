var angular = require('angular');
require('../styles/vendor/bootstrap/dist/css/bootstrap.min.css');
require('../styles/main.css');

if(ON_TEST){
    require('angular-mocks/angular-mocks');
}

//'ui.bootstrap'

var fitwatch = angular.module('fitwatch', [require('angular-route')]);

fitwatch.factory("sectionid",function(){
    return {};
});

fitwatch.factory("notes",function(){
    var notes = [];
    return {
        addNote: function(sectionid, note){
            if(notes[sectionid] === undefined){

                notes[sectionid] = [];
                notes[sectionid].push(note);
            } else {
                notes[sectionid].push(note);
            }

        },
        deleteNote: function(sectionid, id){

           notes[sectionid].splice(parseInt(id.id), 1)

        },
        getNotes: function(sectionid){

            return notes[sectionid];

        },
        getNote: function(sectionid, id){

            return notes[sectionid][id];

        }
    };
});



fitwatch.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'start.html'
    }).when('/section/:id', {
      controller: 'SectionCtrl',
        templateUrl: 'subcategories.html'
    }).when('/Videos/:sectionId', {
        controller: 'VideosCtrl',
        templateUrl: 'videos.html'
    }).when('/Notes/:sectionId', {
        controller: 'NotesCtrl',
        templateUrl: 'notes.html'
    }).when('/Links/:sectionId', {
        controller: 'LinksCtrl',
        templateUrl: 'links.html'
    }).when('/addLink/:sectionId', {
        controller: 'LinksCtrl',
        templateUrl: 'addLink.html'
    }).when('/addVideo/:sectionId', {
        controller: 'VideosCtrl',
        templateUrl: 'addVideo.html'
    }).when('/addNote/:sectionId', {
            controller: 'NotesCtrl',
            templateUrl: 'addNote.html'
    }).when('/editLink/:linkId', {
        controller: 'LinksCtrl',
        templateUrl: 'editLink.html'
    }).when('/editVideo/:videoId', {
        controller: 'VideosCtrl',
        templateUrl: 'editVideo.html'
    }).when('/editNote/:noteId', {
        controller: 'NotesCtrl',
        templateUrl: 'editNote.html'
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

angular.module('fitwatch').controller('NotesCtrl',function($scope, $routeParams, $location, sectionid, notes){
    $scope.sectionid = sectionid;
    $scope.sectionid = $scope.sectionid.id;
    $scope.notesFac = notes;
    $scope.notes =  $scope.notesFac.getNotes($scope.sectionid);
    console.log("Note id: "+$routeParams.id);
    if($routeParams.noteId !== undefined){
        $scope.note = $scope.notesFac.getNote($scope.sectionid, $routeParams.noteId);
    }





    var self = this;
    $scope.saveNote = function(note){

        $scope.notesFac.addNote($scope.sectionid, {'title':note});


        $location.url('/Notes/'+$scope.id);
    }

    $scope.deleteNote = function(id){

        $scope.notesFac.deleteNote($scope.sectionid, {'id':id.toString()});


        $location.url('/Notes/'+$scope.id);
    }

    $scope.editNote = function(note, id){

     $location.url('/Notes/'+$scope.id);

    }


});

angular.module('fitwatch').controller('VideosCtrl',function($scope, $routeParams, $location, sectionid){
    $scope.sectionid = sectionid;
    $scope.id = $scope.sectionid.id;


});

angular.module('fitwatch').controller('LinksCtrl',function($scope, $routeParams, $location, sectionid) {
    $scope.sectionid = sectionid;
    $scope.id = $scope.sectionid.id;

    $scope.links = [

    {'title': 'Great Link # 1', 'url': 'www.bbc.co.uk'},
    {'title': 'Great Link # 2', 'url': 'www.bbc.co.uk'},
    {'title': 'Great Link # 3', 'url': 'www.bbc.co.uk'}

    ]


});




// Templates

require('ng-cache!./templates/views/subcategories.html');
require('ng-cache!./templates/views/start.html');
require('ng-cache!./templates/views/videos.html');
require('ng-cache!./templates/views/notes.html');
require('ng-cache!./templates/views/links.html');
require('ng-cache!./templates/views/addLink.html');
require('ng-cache!./templates/views/addVideo.html');
require('ng-cache!./templates/views/addNote.html');
require('ng-cache!./templates/views/editLink.html');
require('ng-cache!./templates/views/editVideo.html');
require('ng-cache!./templates/views/editNote.html');
