app.controller 'mapCtrl', ($scope, uiGmapGoogleMapApi, AlloCine, Cinema, Position) ->
  Position.getMapCenter (center) ->
    uiGmapGoogleMapApi.then (maps) ->
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
      $scope.map =
        center: center
        zoom: 13
