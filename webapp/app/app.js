/**
 * Created by doyen on 2015/7/31.
 */
define([
	'pace',
	'angular',
	'appRoute',
	'appService',
	'appFilter',
	'appDirective',
	'appController',
	'ngRoute',
	'bootstrap'
], function (pace, angular, routes, services, filters, directives, controllers) {
	paceOptions = {
		ajax: true,
		document: true,
		eventLag: true,
		elements: {
			selectors: ['*']
		},
		restartOnRequestAfter: false,
		restartOnPushState: false
	};

	pace.start({
		document: true
	});

	var initialize = function () {
		var controllersModule = angular.module('Controllers', []);
		var filtersModule = angular.module('Filters', []);
		var directivesModule = angular.module('Directives', []);
		var servicesModule = angular.module('Services', []);
		var routeModule = angular.module('Routes', ['ui.router']);

		var app = angular.module('app', [
			'Controllers',
			'Filters',
			'Directives',
			'Services',
			'Routes'
		]);

        app.run(['$rootScope', function ($rootScope) {
            $rootScope.modalOption = {
                content: ''
            };

            $rootScope.$on('modalOptionSetup', function (event, modalOption) {
                $rootScope.modalOption = modalOption;
            });
        }]);

		routes.initialize();
        services.initialize();
		controllers.initialize();
        directives.initialize();

		angular.bootstrap(angular.element(document), ['app']);
	};

	return {initialize: initialize};
})