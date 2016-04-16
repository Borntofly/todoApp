/**
 * @ngdoc function
 * @name jsMytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsMytodoApp
 */
jsMytodoApp.controller('mainctrl', function($scope, localStorageService) {

	var todosInStore = localStorageService.get('todos');
	$scope.todos = todosInStore || [];
	$scope.$watch('todos', function() {
		localStorageService.set('todos', $scope.todos);
	}, true);

	$scope.todo = '';

	$scope.addTodo = function() {
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};

	$scope.removeTodo = function(index) {
		$scope.todos.splice(index, 1);
	};
});
//TODO: validate input of doubleentries and show error inside banner
