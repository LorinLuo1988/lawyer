/**
 * Created by doyen on 2015/7/31.
 */
define(['angular'], function (angular) {
	return {
		initialize: function () {
			var module = angular.module('Controllers');

			module.controller('headerController', [
				'$scope',
				'$location',
				function ($scope, $location) {
					$scope.currentPath = $location.$$path.slice(1);
					console.log($scope.currentPath)
				}
			])
		}
	}
})
