'use strict';
var app;

app = angular.module('alloArtEtEssai', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.templates', 'Parse', 'angulartics', 'angulartics.google.analytics']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, ParseProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('cinema', {
    url: '/:locale',
    controller: 'cinemaCtrl',
    templateUrl: 'cinema.html'
  });
  $urlRouterProvider.otherwise('/fr');
  return ParseProvider.initialize("2Y3JhneedL6TfTswvBgPfJbZ0qxQRJHj8jg0GqEU", "w1ek8EuSk7dD8bEBDSN5J8XTyXlGuOgx8mv7q7MD");
});

app.run(function($rootScope, $state) {
  return $rootScope.$state = $state;
});

app.controller('cinemaCtrl', function($scope, Cinema) {
  $scope.addCinema = function() {
    $scope.newCinema.save().then(function(cinema) {
      return $scope.fetchCinemas();
    });
    return $scope.newCinema = new Cinema;
  };
  $scope.removeCinema = function(cinema) {
    return cinema.destroy().then(function() {
      return _.remove($scope.cinemas, function(cinema) {
        return cinema.objectId === null;
      });
    });
  };
  $scope.editingCinema = function(cinema) {
    return cinema.editing = true;
  };
  $scope.editCinema = function(cinema) {
    cinema.save();
    return cinema.editing = false;
  };
  $scope.cancelEditing = function(cinema) {
    cinema.alloCineId = cinema._cache.alloCineId;
    return cinema.editing = false;
  };
  $scope.fetchCinemas = function() {
    return Cinema.query().then(function(cinemas) {
      return $scope.cinemas = cinemas;
    });
  };
  $scope.fetchCinemas();
  return $scope.newCinema = new Cinema;
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app.factory('Cinema', function(Parse) {
  var Cinema;
  return Cinema = (function(_super) {
    __extends(Cinema, _super);

    function Cinema() {
      return Cinema.__super__.constructor.apply(this, arguments);
    }

    Cinema.configure("Cinema", "alloCineId");

    return Cinema;

  })(Parse.Model);
});
