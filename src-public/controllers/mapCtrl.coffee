app.controller 'mapCtrl', ($scope, uiGmapGoogleMapApi, AlloCine, Cinema, Position) ->
  handleDragend = (maps, eventName, args) ->
    newCenter =
      latitude: maps.center.A
      longitude: maps.center.F
    setCinemaList newCenter

  setCinemaList = (center) ->
    AlloCine.getCinemaAround center, (cinemaList) ->
      Cinema.query()
      .then (artEtEssaiCinemas) ->
        artEtEssaiCinemaCodes = (c.alloCineId for c in artEtEssaiCinemas)
        _.map cinemaList, (cinema) ->
          cinema.geoloc =
            latitude: cinema.geoloc.lat
            longitude: cinema.geoloc.long
        $scope.cinemaList = _.filter cinemaList, (cinema) ->
          cinema.code in artEtEssaiCinemaCodes

  Position.getDefaultCenter (center) ->
    setCinemaList center
    $scope.map =
      center: center
      zoom: 13

  $scope.events =
    'dragend': handleDragend
