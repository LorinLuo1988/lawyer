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
                'headerService',
				function ($scope, $location, headerService) {
					$scope.currentPath = $location.$$path.slice(1);

				    $scope.dropdownMenuDisplayToggle = function (isShow) {
                        headerService.dropdownMenuDisplayToggle(isShow);
					};

					$scope.$on('$stateChangeSuccess', function (event) {
						$scope.currentPath = $location.$$path.slice(1);
					});
				}
			])
		}
	}
})
