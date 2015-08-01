/**
 * Created by doyen on 2015/7/31.
 */
define(['angular'], function (angular) {
	return {
		initialize: function () {
			var module = angular.module('Routes');

			module.config([
				'$urlRouterProvider',
				'$stateProvider',
				function ($urlRouterProvider, $stateProvider) {
					$stateProvider.state('lawSense', {
						url: '/lawSense',
						templateUrl: 'app/law.sense/law.sense.html'
					})
				}
			])
		}
	}
})