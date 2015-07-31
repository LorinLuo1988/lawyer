/**
 * Created by doyen on 2015/7/31.
 */
require.config({
	baseUrl: '/lawyer/webapp/app',
	paths: {
		startup: './app',
		angular: '../lib/angular/angular',
		ngRoute: '../lib/angular/angular-ui-router',
		jquery: '../lib/jquery/jquery',
		bootstrap: '../lib/bootstrap/bootstrap',
		pace: '../lib/pace/pace',
		appController: 'tp.loader/controller.all',
		appDirective: 'tp.loader/directive.all',
		appFilter: 'tp.loader/filter.all',
		appRoute: 'tp.loader/route.all',
		appService: 'tp.loader/service.all',

		headerController: './common/header/header.controller'
	},
	shim: {
		angular: {
			exports: 'angular',
			deps: ['jquery']
		},
		ngRoute: {
			exports: 'ngRoute',
			deps: ['angular']
		},
		bootstrap: {
			exports: 'bootstrap',
			deps: ['jquery']
		}
	},
	package: {

	}
});

require(['startup'], function (app) {
	app.initialize();
});