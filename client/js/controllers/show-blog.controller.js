angular.module("app").controller("BlogController", [
  "$scope",
  "$state",
  "$stateParams",
  "BlogPost",
  function($scope, $state, $stateParams, BlogPost) {
    function getTodos() {
      BlogPost.getById({ id: $stateParams.id }).$promise.then(function(
        results
      ) {
        $scope.post = results;
      });
    }
    getTodos();

    $scope.addTodo = function() {
      Todo.create($scope.newTodo).$promise.then(function(todo) {
        $scope.newTodo = "";
        $scope.todoForm.content.$setPristine();
        $(".focus").focus();
        getTodos();
      });
    };

    $scope.removeTodo = function(item) {
      Todo.deleteById(item).$promise.then(function() {
        getTodos();
      });
    };
  },
]);
