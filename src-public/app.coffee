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
]

app.constant 'ALLOCINE_API_URL', 'http://api.allocine.fr/rest/v3'
app.constant 'ALLOCINE_PARTNER_TOKEN', 'yW5kcm9pZC12M3M'

app.config (
  $locationProvider
  $stateProvider
  $urlRouterProvider
  ParseProvider
) ->

  $locationProvider.hashPrefix '!'

  $stateProvider
  .state 'admin-cinema',
    url: '/admin/cinema'
    controller: 'adminCinemaCtrl'
    templateUrl: 'admin-cinema.html'
  .state 'cinema',
    url: '/cinema'
    controller: 'cinemaCtrl'
    templateUrl: 'cinema.html'

  $urlRouterProvider.otherwise '/cinema'

  ParseProvider.initialize(
    "2Y3JhneedL6TfTswvBgPfJbZ0qxQRJHj8jg0GqEU", # Application ID
    "w1ek8EuSk7dD8bEBDSN5J8XTyXlGuOgx8mv7q7MD"  # REST API Key
  )

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
