/**
 * Created by doyen on 2015/7/31.
 */
define([
    'angular',
    'carouselDirective',
    'modalDirective'
], function () {
    var directives = Array.prototype.slice.call(arguments, 1);

    return {
        initialize: function () {
            angular.forEach(directives, function (directive) {
                directive.initialize();
            });
        }
    }
})
