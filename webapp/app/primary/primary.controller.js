/**
 * Created by Administrator on 2015/8/1.
 */
define(['angular'], function (angular) {
    return {
        initialize: function () {
            var module = angular.module('Controllers');

            module.controller('primaryController', [
                '$scope',
                function ($scope) {
                    $scope.carouselImgSrc = [
                        './style/images/carousel-1.jpg',
                        './style/images/carousel-2.jpg',
                        './style/images/carousel-3.jpg',
                        './style/images/carousel-4.jpg'
                    ];

                    $scope.modalOption = {
                        content: '确定要提交留言信息吗',
                        title: '提交留言信息'
                    };

                    $scope.messageSubmitCheck = function () {
                        $('#modal').modal('show');
                    };

                    $scope.$emit('modalOptionSetup',  $scope.modalOption);
                }
            ]);
        }
    }
})
