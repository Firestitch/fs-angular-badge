
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

                applyStyles($scope);

                var group = ['color', 'size', 'shape'];
                $scope.$watchGroup(
                    group,
                    function(newValues, oldValues, scope) {
                        if (newValues !== oldValues) {
                            var newStyles = {};
                            for (var i in group) {
                                newStyles[group[i]] = newValues[i];
                            }

                            applyStyles(newStyles);
                        }
                    }
                );

                function applyStyles(styles) {
                    if (styles['color']) {
                        $scope.styles['background-color'] = styles['color'];
                    }
                    else {
                        delete $scope.styles['background-color'];
                    }

                    if (styles['size']) {
                        $scope.styles['width'] = styles['size'] + 'px';

                        if (styles['shape'] == 'circle') {
                            $scope.styles['height'] = styles['size'] + 'px';
                            $scope.styles['line-height'] = styles['size'] + 'px';
                        }
                        else {
                            delete $scope.styles['height'];
                            delete $scope.styles['line-height'];
                        }
                    }
                    else {
                        delete $scope.styles['width'];
                    }

                    if(styles['image']) {
                        $scope.styles['background-image'] = 'url(' + styles['image'] + ')';
                    }
                    else {
                        delete $scope.styles['background-image'];
                    }
                }

            }// End of link() func
        };
    });
     
})();

