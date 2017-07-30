angular.module("app", ["lbServices", "ui.router"]).config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("list", {
        url: "",
        templateUrl: "views/blog-list.html",
        controller: "ListController",
      })
      .state("post", {
        url: "/post/:id",
        templateUrl: "views/show-blog.html",
        controller: "BlogController",
      });
    $urlRouterProvider.otherwise("list");
  },
]);
