app.controller 'showtimeCtrl', ($scope, cinemaData) ->
  $scope.movies = cinemaData.movies
  $scope.cinema = cinemaData.cinema
  $scope.versionLabel =
    true: "original"
    false: "doublage"
