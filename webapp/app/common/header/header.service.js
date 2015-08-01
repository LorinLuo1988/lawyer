/**
 * Created by Administrator on 2015/8/1.
 */
define(['angular'], function (angular) {
    return {
        initialize: function () {
            var module = angular.module('Services');

            module.service('headerService', [function () {
                this.dropdownMenuDisplayToggle = function (isShow) {
                    if (isShow) {
                        $('.btn-group').addClass('open');
                    } else {
                        $('.btn-group').removeClass('open');
                    }
                }
            }]);
        }
    }
})
