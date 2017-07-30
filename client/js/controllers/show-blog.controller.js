angular.module("app").controller("BlogController", [
  "$scope",
  "$state",
  "$stateParams",
  "BlogPost",
  function($scope, $state, $stateParams, BlogPost) {
    function getPost() {
      BlogPost.getPostById({ id: $stateParams.id }).$promise.then(function(
        results
      ) {
        $scope.post = results;
      });
    }
    getPost();
  },
]);
