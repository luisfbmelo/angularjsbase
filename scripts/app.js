/*APP MODULES*/
var appControllers = angular.module('appControllers',[]);
var appServices = angular.module('appServices',[]);
var appDirectives = angular.module('appDirectives',[]);
var appFilters = angular.module('appFilters',[]);

var app = angular.module('project', [
  'ngRoute',
  'appControllers',
  'appServices',
  'appDirectives',
  'appFilters'
]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'scripts/views/home.html',
				controller: 'mainCtrl'
			}).
			/*when('/project', {
				templateUrl: 'partials/project.html',
				controller: 'ProjectCtrl'
			}).
			when('/artists/:id', {
				templateUrl: 'partials/artists.html',
				controller: 'artistsCtrl'
			}).*/
			otherwise({
				redirectTo: '/'
			});
	}
]);