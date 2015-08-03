/**
 * Created by doyen on 2015/7/31.
 */
define([
	'angular',
	'common/header/header.controller',
    'primary/primary.controller',
    'lawyer.essays/lawyer.essays.controller'
], function () {
	var controllers = Array.prototype.slice.call(arguments, 1);

	return {
		initialize: function () {
			angular.forEach(controllers, function (controller) {
				controller.initialize();
			})
		}
	}
})
