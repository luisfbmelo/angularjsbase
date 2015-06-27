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