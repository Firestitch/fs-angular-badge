
(function () {
    'use strict';

    angular.module('fs-angular-badge',[])
    .directive('fsBadge', function() {
        return {
            template: '<div class="fs-badge {{class}}"\
            				ng-class="{ \'fs-badge-circle\': shape==\'circle\', \'fs-badge-image\': type==\'image\', \'fs-badge-text\': type==\'text\' }"\
            				ng-style="styles">\
            					<md-icon ng-if="!image && icon"ng-style="iconStyle">{{icon}}</md-icon>\
            					<md-tooltip ng-if="tooltip">{{tooltip}}</md-tooltip>\
            					{{label}}\
            			</div>',
            restrict: 'E',
            replace: true,
            scope: {
                color: '=fsColor',
                label: '=fsLabel',
                tooltip: '=fsTooltip',
                size: '=?fsSize',
                shape: '=fsShape',
                image: '=fsImage',
                class: '=fsClass',
                icon: '=fsIcon',
                iconSize: '=fsIconSize',
                iconColor: '=fsIconColor'
            },
            link: function ($scope, elem, attrs) {
                $scope.type = attrs.fsImage===undefined ? 'text' : 'image';
                $scope.styles = {};

                $scope.$watchGroup(['color','size','image'],function(value) {
                    $scope.styles = {};

                    if ($scope.color) {
                        $scope.styles['background-color'] = $scope.color;
                    }

                    if ($scope.size) {
                        $scope.styles['width'] = $scope.size + 'px';
                        $scope.styles['min-width'] = $scope.size + 'px';

                        if ($scope.shape == 'circle') {
                            $scope.styles['height'] = $scope.size + 'px';
                            $scope.styles['line-height'] = $scope.size + 'px';
                        }
                    }

                    if($scope.image) {
                        $scope.styles['background-image'] = 'url(' + $scope.image + ')';
                    }
                });

                $scope.iconStyle = {};
                if($scope.iconSize) {
                	$scope.iconStyle['transform'] = 'scale(' + $scope.iconSize + ')';
                }

                if($scope.iconColor) {
                	$scope.iconStyle['color'] = $scope.iconColor;
                }
            }
        };
    });

})();
