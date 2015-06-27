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