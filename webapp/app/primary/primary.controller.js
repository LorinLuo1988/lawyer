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

                    $scope.messageInfo = '';

                    $scope.messageSubmitCheck = function (type) {
                        if ( $scope.messageInfo == '' ||  $scope.messageInfo == null || $scope.messageInfo == undefined) {
                            $scope.modalOption = {
                                content: '你还没有输入留言信息，请输入！',
                                title: '警告',
                                titleStyle: 'text-danger',
                                sureCallback: function () {

                                },
                                cancelCallback: function () {

                                }
                            };

                            $scope.$emit('modalOptionSetup',  $scope.modalOption);
                            $('#modal').modal('show');
                            return false;
                        }
                        if (type == 'submit') {
                            $scope.modalOption = {
                                content: '确定要提交留言信息吗？',
                                title: '提交留言信息',
                                titleStyle: 'text-success',
                                sureCallback: function () {

                                },
                                cancelCallback: function () {

                                }
                            };
                        } else if (type == 'reset') {
                            $scope.modalOption = {
                                content: '确定要重写留言信息吗？',
                                title: '重写留言信息',
                                titleStyle: 'text-danger',
                                sureCallback: function () {
                                    $scope.messageInfo = '';
                                },
                                cancelCallback: function () {

                                }
                            };
                        }

                        $scope.$emit('modalOptionSetup',  $scope.modalOption);
                        $('#modal').modal('show');
                    };
                }
            ]);
        }
    }
})
