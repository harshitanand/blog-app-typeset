angular.module("app").controller("ListController", [
  "$scope",
  "$state",
  "BlogPost",
  function($scope, $state, BlogPost) {
    $scope.todos = [];

    function getTodos() {
      BlogPost.getAllPosts().$promise.then(function(results) {
        $scope.posts = results;
      });
    }
    getTodos();

    $scope.changeState = function(id) {
      $state.go("post", { id: id });
    };

    $scope.addTodo = function() {
      BlogPost.create($scope.newTodo).$promise.then(function(todo) {
        $scope.newTodo = "";
        $scope.todoForm.content.$setPristine();
        $(".focus").focus();
        getTodos();
      });
    };

    $scope.removeTodo = function(item) {
      BlogPost.deleteById(item).$promise.then(function() {
        getTodos();
      });
    };
  },
]);
