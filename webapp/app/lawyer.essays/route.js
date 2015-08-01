/**
 * Created by doyen on 2015/7/31.
 */
define([
	'angular'
], function () {
	return {
		initialize: function () {
			var module = angular.module('Routes');

			module.config([
				'$stateProvider',
				'$urlRouterProvider',
				function ($stateProvider, $urlRouterProvider) {
					$stateProvider
						.state('lawyerEssays', {
							url: '/lawyerEssays',
							templateUrl: 'app/lawyer.essays/lawyer.essays.html'
						});
				}
			]);
		}
	}
});
