/**
 * Created by Administrator on 2015/8/1.
 */
define(['angular'], function (angular) {
    return {
        initialize: function () {
            var module = angular.module('Directives');

            module.directive('carousel', function ($timeout, $interval) {
                return {
                    restrict: 'AE',
                    scope: {
                        carousel: '=',
                        ulStyle: '@'
                    },
                    template: '<div style="width: 100%;overflow: hidden; background: url(style/images/carousel-bg.jpg) no-repeat; background-size: 100% 100%; margin-bottom: 10px;">' +
                        '<ul class="clear-fix" style="margin: 0px; position: relative; left: 0px; top: 0px;">' +
                        '<li style="text-align: center; float: left;" class="carouselLi" ng-repeat="img in carousel">' +
                        '<img style="height: 300px; margin: 0 auto; border: 1px solid #4dff6f; box-shadow: 1px 1px 10px 1px #4dff6f, 1px 1px 10px 1px #4dff6f inset;" ng-src="{{img}}"/>' +
                        '</li>' +
                        '</ul>' +
                        '</div>',
                    link: function (scope, element, attrs) {
                       $(element[0]).find('ul').css({
                           width: element.width() * scope.carousel.length,
                           height: '100%',
                           listStyleType: 'none'
                       });

                       $timeout(function () {
                            $(element[0]).find('li').css({
                                width: element.width()
                            });

                          $timeout( scope.carouselStart, 5000);
                       },0);

                       scope.carouselStart = function () {
                           var liWidth = parseInt($(element[0]).find('ul').find('li').css('width'));
                           var timer = $interval(function () {
                               $(element[0]).find('ul').css({
                                    left: parseInt($(element[0]).find('ul').css('left')) - 10
                               });

                               if (Math.abs(parseInt($(element[0]).find('ul').css('left'))) >= liWidth) {
                                   $interval.cancel(timer);
                                   $(element[0]).find('ul').css({
                                       left: 0
                                   });
                                   var firstLiNode = $(element[0]).find('ul').find('li:first-child').clone();
                                   $(element[0]).find('ul').append(firstLiNode);
                                   $(element[0]).find('ul').find('li:first-child').remove();
                                   $timeout(function () {
                                       scope.carouselStart();
                                   }, 5000);
                               }
                           }, 10);
                       }
                    }
                }
            })
        }
    }
})
