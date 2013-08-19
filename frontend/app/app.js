Kiss.App = angular.module('Kiss', []);

Kiss.App.config(['$routeProvider', function($routeProvider) {
	/**
	 * Routes
	 */
	$routeProvider.
		when('/', {
			templateUrl: Kiss.Config.templateUrl + 'overview.html',
			controller: 'KissOverviewController'
		}).
		when('/:name', {
			templateUrl: Kiss.Config.templateUrl + 'kiss.html',
			controller: 'KissController'
		}).
		otherwise({redirectTo: '/'});
	}
]);

Kiss.App.run([function () {
	// initialise the app
}]);