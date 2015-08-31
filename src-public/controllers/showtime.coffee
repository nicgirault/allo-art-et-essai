app.controller 'showtimeCtrl', ($scope, movies) ->
  $scope.movies = movies
  $scope.versionLabel =
    true: "original"
    false: "doublage"
