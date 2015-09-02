'use strict'

app = angular.module 'alloArtEtEssai', [
  'ng'
  'ngResource'
  'ui.router'
  'ui.bootstrap'
  'app.templates'
  'Parse'
  'angulartics'
  'angulartics.google.analytics'
  'uiGmapgoogle-maps'
]

app.constant 'ALLOCINE_API_URL', 'http://api.allocine.fr/rest/v3'
app.constant 'ALLOCINE_PARTNER_TOKEN', 'yW5kcm9pZC12M3M'

app.config (
  $locationProvider
  $stateProvider
  $urlRouterProvider
  ParseProvider
  uiGmapGoogleMapApiProvider
) ->

  $locationProvider.hashPrefix '!'

  $stateProvider
  .state 'map',
    url: '/map'
    controller: 'mapCtrl'
    templateUrl: 'map.html'
  .state 'admin-cinema',
    url: '/admin/cinema'
    controller: 'adminCinemaCtrl'
    templateUrl: 'admin-cinema.html'
  .state 'cinema',
    url: '/cinema'
    controller: 'cinemaCtrl'
    templateUrl: 'cinema.html'
  .state 'showtime',
    url: '/cinema/:cinemaId/showtime'
    controller: 'showtimeCtrl'
    templateUrl: 'showtime.html'
    resolve:
      movies: (AlloCine, $stateParams) ->
        return AlloCine.getMovies $stateParams.cinemaId

  $urlRouterProvider.otherwise '/map'

  ParseProvider.initialize(
    "2Y3JhneedL6TfTswvBgPfJbZ0qxQRJHj8jg0GqEU", # Application ID
    "w1ek8EuSk7dD8bEBDSN5J8XTyXlGuOgx8mv7q7MD"  # REST API Key
  )

  uiGmapGoogleMapApiProvider.configure {
    #key: 'AIzaSyDXUwacxRBdrqDyJ0x7kqqD9DuvVxJjngI'
    v: '3.20'
    libraries: ''
  }

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
