'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope) {


});


angular.module('app')
.directive('fsBadgeExtend', function() {
    return {
        template: '<fs-badge fs-color="badge.color" fs-label="badge.label" fs-tooltip="badge.label"></fs-badge>',
        restrict: 'E',
        scope: {
            badge: '=fsBadge'
        },
        link: function ($scope, elem, attrs) {
        } 
    };
}); 