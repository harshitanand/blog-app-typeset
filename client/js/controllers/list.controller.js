angular.module("app").controller("ListController", [
  "$scope",
  "$state",
  "BlogPost",
  function($scope, $state, BlogPost) {
    function getAllPosts() {
      BlogPost.getAllPosts({ skip: 0, limit: 5 }).$promise.then(function(
        results
      ) {
        $scope.posts = results;
      });
    }
    getAllPosts();

    $scope.changeState = function(id) {
      $state.go("post", { id: id });
    };
  },
]);
