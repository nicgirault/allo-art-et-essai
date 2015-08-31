'use strict';
var app;

app = angular.module('alloArtEtEssai', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.templates', 'Parse', 'angulartics', 'angulartics.google.analytics']);

app.constant('ALLOCINE_API_URL', 'http://api.allocine.fr/rest/v3');

app.constant('ALLOCINE_PARTNER_TOKEN', 'yW5kcm9pZC12M3M');

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, ParseProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('admin-cinema', {
    url: '/admin/cinema',
    controller: 'adminCinemaCtrl',
    templateUrl: 'admin-cinema.html'
  }).state('cinema', {
    url: '/cinema',
    controller: 'cinemaCtrl',
    templateUrl: 'cinema.html'
  }).state('showtime', {
    url: '/cinema/:cinemaId/showtime',
    controller: 'showtimeCtrl',
    templateUrl: 'showtime.html',
    resolve: {
      movies: function(AlloCine, $stateParams) {
        return AlloCine.getMovies($stateParams.cinemaId);
      }
    }
  });
  $urlRouterProvider.otherwise('/cinema');
  return ParseProvider.initialize("2Y3JhneedL6TfTswvBgPfJbZ0qxQRJHj8jg0GqEU", "w1ek8EuSk7dD8bEBDSN5J8XTyXlGuOgx8mv7q7MD");
});

app.run(function($rootScope, $state) {
  return $rootScope.$state = $state;
});

app.factory('AlloCine', function($resource, ALLOCINE_API_URL, ALLOCINE_PARTNER_TOKEN) {
  var Cinema;
  Cinema = $resource(ALLOCINE_API_URL + '/showtimelist?partner=:partner&format=json&theaters=:alloCineId');
  return {
    feedCinema: function(cinema) {
      return Cinema.get({
        partner: ALLOCINE_PARTNER_TOKEN,
        alloCineId: cinema.alloCineId
      }, function(data) {
        var place;
        if (data.feed) {
          place = data.feed.theaterShowtimes[0].place.theater;
          cinema.name = place.name;
          cinema.address = place.address;
          cinema.postalCode = place.postalCode;
          cinema.city = place.city;
          cinema.picture = place.picture.href;
          cinema.allocineLink = place.link[0].href;
          cinema.geoloc = place.geoloc;
          return cinema.area = place.area;
        }
      });
    },
    getMovies: function(cinemaId) {
      var cinemaData;
      cinemaData = Cinema.get({
        partner: ALLOCINE_PARTNER_TOKEN,
        alloCineId: cinemaId
      });
      return cinemaData.$promise.then(function(data) {
        return data.feed.theaterShowtimes[0].movieShowtimes;
      });
    }
  };
});

app.controller('adminCinemaCtrl', function($scope, Cinema, AlloCine) {
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
      var cinema, _i, _len;
      for (_i = 0, _len = cinemas.length; _i < _len; _i++) {
        cinema = cinemas[_i];
        AlloCine.feedCinema(cinema);
      }
      return $scope.cinemas = cinemas;
    });
  };
  $scope.fetchCinemas();
  return $scope.newCinema = new Cinema;
});

app.controller('cinemaCtrl', function($scope, Cinema, AlloCine) {
  $scope.fetchCinemas = function() {
    return Cinema.query().then(function(cinemas) {
      var cinema, _i, _len;
      for (_i = 0, _len = cinemas.length; _i < _len; _i++) {
        cinema = cinemas[_i];
        AlloCine.feedCinema(cinema);
      }
      return $scope.cinemas = cinemas;
    });
  };
  return $scope.fetchCinemas();
});

app.controller('showtimeCtrl', function($scope, movies) {
  $scope.movies = movies;
  return $scope.versionLabel = {
    "true": "original",
    "false": "doublage"
  };
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
