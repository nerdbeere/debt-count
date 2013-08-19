Kiss.App.controller('KissController', function($scope, $routeParams, Kiss) {
    $scope.kissCount = Kiss.get($routeParams.name);
    $scope.name = $routeParams.name;

    $scope.add = function(plus) {
        Kiss.add($routeParams.name, plus);
        $scope.kissCount = Kiss.get($routeParams.name);
    }
});