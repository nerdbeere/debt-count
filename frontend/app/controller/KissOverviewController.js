Kiss.App.controller('KissOverviewController', function($scope, $routeParams, Kiss) {
    $scope.kisses = Kiss.get();
});