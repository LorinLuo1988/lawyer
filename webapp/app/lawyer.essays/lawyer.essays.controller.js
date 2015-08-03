/**
 * Created by doyen on 2015/8/3.
 */
define(['angular'], function (angular) {
	return {
		initialize: function () {
			var module = angular.module('Controllers');

			module.controller('lawyerEssaysController', [
				'$scope',
				function ($scope) {
					$scope.lawyerEssays = [
						{date: '2012-01-12', content: '律师随笔1'},
						{date: '2013-04-12', content: '律师随笔2'},
						{date: '2013-10-12', content: '律师随笔3'},
						{date: '2014-01-12', content: '律师随笔4'},
						{date: '2015-01-13', content: '律师随笔5'}
					];
				}
			]);
		}
	}
})
