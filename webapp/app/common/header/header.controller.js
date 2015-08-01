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
                '$window',
                '$interval',
                'headerService',
				function ($scope, $location, $window, $interval, headerService) {
					$scope.currentPath = $location.$$path.slice(1);

					$scope.$on('$stateChangeSuccess', function (event) {
						$scope.currentPath = $location.$$path.slice(1);
                        $scope.scrollTop();
                    });

                    $scope.scrollTop = function () {
                        var interval = $interval(function () {
                            $window.scrollTo(0, angular.element(document).scrollTop() - 30);

                            if (angular.element(document).scrollTop() - 30 <= 0) {
                                $window.scrollTo(0, 0);
                                $interval.cancel(interval);
                            }
                        }, 10);

                    };
				}
			])
		}
	}
})
