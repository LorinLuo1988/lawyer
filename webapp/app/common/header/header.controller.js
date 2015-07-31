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
					$scope.dropdownMenuToggle = true;

					$scope.dropdownMenuDisplayToggle = function (show) {
						if (show) {
							$scope.dropdownMenuToggle = true;
						} else {
							$scope.dropdownMenuToggle = false;
						}
					};

					$scope.$on('$stateChangeSuccess', function (event) {
						$scope.currentPath = $location.$$path.slice(1);
					});
				}
			])
		}
	}
})
