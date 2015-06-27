var appControllers = angular.module('appControllers');

appControllers.controller('mainCtrl', ['$scope', function ($scope) {
	
}]);
var appFilters = angular.module('appFilters');

//home background
appDirectives.filter('myFilter',  function () {
	return function(input, optional1, optional2) {
		//INJECT FILTER
		//$filter('date')(new Date(), 'yyyy-MM-01');
		
		
		var output;

		// Do filter work here

		return output;

	}
});
var appServices = angular.module('appServices');

appServices.factory('LoginService', ['$rootScope', function ($rootScope) {
	return {
	    isLogedin: function() {
	       return [
	          false, 1
	       ];
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('pageFooter', ['LoginService', function (LoginService) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/dir_views/pageFooter.html",
	    replace: true
	 };
}]);
/*ALL DIRECTIVES FROM HOMEPAGE*/

var appDirectives = angular.module('appDirectives');

//home background
appDirectives.directive('homeBackground',  function () {
	return {
	    restrict: 'A',
	    link: function(scope, element, attr){
	    	
	    }
	 };
});
var appDirectives = angular.module('appDirectives');

appDirectives.directive('navMenu', ['LoginService', function (LoginService) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/dir_views/pageHeader.html",
	    scope:true,
	    replace:true,
	    controller: function($scope){
	    	var loginStatus = LoginService.isLogedin();
			if (loginStatus){
				$scope.loggedin = loginStatus[0];
				$scope.logType = loginStatus[1];
			}
			
	    },
	    link: function(scope, el, attr){
	    	scope.menuOptions = [
				{id_arts:1, art: 'Artes Digitais'},
				{id_arts:2, art: 'Artes Plásticas'},
				{id_arts:3, art: 'Cinema e Vídeo'},
				{id_arts:4, art: 'Literatura'},
				{id_arts:5, art: 'Música'},
				{id_arts:6, art: 'Performance'},
				{id_arts:7, art: 'Tradicional'},
				{id_arts:8, art: 'Organizações'}
			];
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('showtab', function () {
    return {
        link: function (scope, element, attrs) {
            element.on('click',function(e) {
                e.preventDefault();
                angular.element(element).tab('show');
            });
        }
    };
});