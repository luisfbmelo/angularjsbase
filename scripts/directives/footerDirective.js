var appDirectives = angular.module('appDirectives');

appDirectives.directive('pageFooter', ['LoginService', function (LoginService) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/dir_views/pageFooter.html",
	    replace: true
	 };
}]);