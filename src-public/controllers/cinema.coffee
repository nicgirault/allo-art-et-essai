app.controller 'cinemaCtrl', ($scope, Cinema, AlloCine) ->
  $scope.fetchCinemas = ->
    Cinema.query()
    .then (cinemas) ->
      for cinema in cinemas
        AlloCine.feedCinema cinema
      $scope.cinemas = cinemas

  $scope.fetchCinemas()
