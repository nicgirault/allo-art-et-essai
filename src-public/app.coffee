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

app.config (
  $locationProvider
  $stateProvider
  $urlRouterProvider
  ParseProvider
) ->

  $locationProvider.hashPrefix '!'

  $stateProvider
  .state 'cinema',
    url: '/:locale'
    controller: 'cinemaCtrl'
    templateUrl: 'cinema.html'

  $urlRouterProvider.otherwise '/fr'

  ParseProvider.initialize(
    "2Y3JhneedL6TfTswvBgPfJbZ0qxQRJHj8jg0GqEU", # Application ID
    "w1ek8EuSk7dD8bEBDSN5J8XTyXlGuOgx8mv7q7MD"  # REST API Key
  )

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
