app.controller 'adminCinemaCtrl', ($scope, Cinema, AlloCine) ->

  $scope.addCinema = ->
    $scope.newCinema.save().then (cinema) ->
      $scope.fetchCinemas()
    $scope.newCinema = new Cinema

  $scope.removeCinema = (cinema) ->
    cinema.destroy().then () ->
      _.remove $scope.cinemas, (cinema) ->
        cinema.objectId is null

  $scope.editingCinema = (cinema) ->
    cinema.editing = true

  $scope.editCinema = (cinema) ->
    cinema.save()
    cinema.editing = false

  $scope.cancelEditing = (cinema) ->
    cinema.alloCineId = cinema._cache.alloCineId
    cinema.editing = false

  $scope.fetchCinemas = ->
    Cinema.query()
    .then (cinemas) ->
      for cinema in cinemas
        AlloCine.feedCinema cinema
      $scope.cinemas = cinemas

  $scope.fetchCinemas()
  $scope.newCinema = new Cinema
