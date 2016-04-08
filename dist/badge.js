
(function () {
    'use strict';

    angular.module('fs-angular-badge',[])
    .directive('fsBadge', function() {
        return {
            template: '<div class="fs-badge {{class}}" ng-class="{ \'fs-badge-circle\': shape==\'circle\', \'fs-badge-image\': image }" ng-style="styles">{{circle}}<md-tooltip ng-show="tooltip">{{tooltip}}</md-tooltip>{{label}}</div>',
            restrict: 'E',
            replace: true,
            scope: {
                color: '=fsColor',
                label: '=fsLabel',
                tooltip: '=fsTooltip',
                size: '=fsSize',
                shape: '=fsShape',
                image: '=fsImage',
                class: '=fsClass'
            },
            link: function ($scope, elem, attrs) {

                $scope.styles = {};
                if($scope.color) {
                    $scope.styles['background-color'] = $scope.color;
                }

                if($scope.size) {
                    $scope.styles['width'] = $scope.size + 'px';

                    if($scope.shape=='circle') {
                        $scope.styles['height'] = $scope.size + 'px';
                        $scope.styles['line-height'] = $scope.size + 'px';
                    }
                }

                if($scope.image) {
                    $scope.styles['background-image'] = 'url(' + $scope.image + ')';
                }
            } 
        };
    });
     
})();

