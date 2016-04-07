'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope) {


});


angular.module('app')
.directive('fsTagExtend', function() {
    return {
        template: '<fs-tag fs-color="tag.color" fs-label="tag.label" fs-tooltip="tag.label"></fs-tag>',
        restrict: 'E',
        scope: {
            tag: '=fsTag'
        },
        link: function ($scope, elem, attrs) {
        } 
    };
}); 