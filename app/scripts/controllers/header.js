jsMytodoApp.controller('headerctrl', [
	'$scope',
	'$location',
	function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      console.log('location path: '+$location.path());
      return viewLocation === $location.path();
    };
	}
]);
