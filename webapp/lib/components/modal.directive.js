/**
 * Created by Administrator on 2015/8/1.
 */
define(['angular'], function (angular) {
    return {
        initialize: function () {
            var module = angular.module('Directives');

            module.directive('modal', function ($timeout, $interval) {
                return {
                    restrict: 'AE',
                    scope: {
                        modal: '='
                    },
                    template: '' +
                        '<div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel">' +
                        '<div class="modal-dialog" role="document">' +
                        '<div class="modal-content">' +
                        '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
                        '<h4 class="modal-title" id="gridModalLabel" ng-bind="modal.title"></h4>' +
                        '</div><div class="modal-body">' +
                        '<div class="container-fluid">' +
                        '<div class="row">' +
                        '<div class="col-sm-9 {{modal.titleStyle}}" ng-bind="modal.content"><div class="row">' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-danger" data-dismiss="modal" ng-click="modal.cancelCallback();">关闭</button>' +
                        '<button type="button" class="btn btn-success" data-dismiss="modal" ng-click="modal.sureCallback();">确定</button>' +
                        '</div>' +
                        '</div><!-- /.modal-content -->' +
                        '</div>' +
                        '</div>',
                    link: function (scope, element, attrs) {

                    }
                }
            })
        }
    }
})
