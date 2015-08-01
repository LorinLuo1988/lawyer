/**
 * Created by doyen on 2015/7/31.
 */
define([
    'angular',
    'common/header/header.service'
], function () {
    Array.prototype.shift.apply(arguments);
    var services = arguments;

    return {
        initialize: function () {
            angular.forEach(services, function (service) {
                service.initialize();
            });
        }
    }
})
