
(function () {
    'use strict';

    angular.module('fs-angular-tag',[])
    .directive('fsTag', function() {
        return {
            template: '<div class="fs-tag" style="background-color: {{color}};"><md-tooltip ng-show="tooltip">{{tooltip}}</md-tooltip>{{label}}</div>',
            restrict: 'E',
            replace: true,
            scope: {
                color: '=fsColor',
                label: '=fsLabel',
                tooltip: '=fsTooltip'
            },
            link: function ($scope, elem, attrs) {
            } 
        };
    });
     
})();

