'use strict';
var app;

app = angular.module('alloArtEtEssai', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.templates', 'Parse', 'angulartics', 'angulartics.google.analytics', 'uiGmapgoogle-maps']);

app.constant('ALLOCINE_API_URL', 'http://api.allocine.fr/rest/v3');

app.constant('ALLOCINE_PARTNER_TOKEN', 'yW5kcm9pZC12M3M');

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, ParseProvider, uiGmapGoogleMapApiProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('map', {
    url: '/map',
    controller: 'mapCtrl',
    templateUrl: 'map.html'
  }).state('admin-cinema', {
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
      cinemaData: function(AlloCine, $stateParams) {
        return AlloCine.getCinemaData($stateParams.cinemaId);
      }
    }
  });
  $urlRouterProvider.otherwise('/map');
  ParseProvider.initialize("2Y3JhneedL6TfTswvBgPfJbZ0qxQRJHj8jg0GqEU", "w1ek8EuSk7dD8bEBDSN5J8XTyXlGuOgx8mv7q7MD");
  return uiGmapGoogleMapApiProvider.configure({
    v: '3.20',
    libraries: ''
  });
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
    getCinemaData: function(cinemaId) {
      var cinemaData;
      cinemaData = Cinema.get({
        partner: ALLOCINE_PARTNER_TOKEN,
        alloCineId: cinemaId
      });
      return cinemaData.$promise.then(function(data) {
        return {
          movies: data.feed.theaterShowtimes[0].movieShowtimes,
          cinema: data.feed.theaterShowtimes[0].place.theater
        };
      });
    },
    getCinemaAround: function(geoloc, callback) {
      var CinemaList, cinemaListPromise, yolo;
      if (!((geoloc.latitude != null) && (geoloc.longitude != null))) {
        return;
      }
      CinemaList = $resource(ALLOCINE_API_URL + '/theaterlist?partner=:partner&format=json&count=:count&lat=:lat&long=:long&radius=:radius');
      cinemaListPromise = CinemaList.get({
        partner: ALLOCINE_PARTNER_TOKEN,
        lat: geoloc.latitude,
        long: geoloc.longitude,
        radius: 20,
        count: 200
      });
      return yolo = cinemaListPromise.$promise.then(function(data) {
        return callback(data.feed.theater);
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

var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

app.controller('mapCtrl', function($scope, uiGmapGoogleMapApi, AlloCine, Cinema, Position) {
  var handleDragend, setCinemaList;
  handleDragend = function(maps, eventName, args) {
    var newCenter;
    newCenter = {
      latitude: maps.center.A,
      longitude: maps.center.F
    };
    return setCinemaList(newCenter);
  };
  setCinemaList = function(center) {
    return AlloCine.getCinemaAround(center, function(cinemaList) {
      return Cinema.query().then(function(artEtEssaiCinemas) {
        var artEtEssaiCinemaCodes, c;
        artEtEssaiCinemaCodes = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = artEtEssaiCinemas.length; _i < _len; _i++) {
            c = artEtEssaiCinemas[_i];
            _results.push(c.alloCineId);
          }
          return _results;
        })();
        _.map(cinemaList, function(cinema) {
          return cinema.geoloc = {
            latitude: cinema.geoloc.lat,
            longitude: cinema.geoloc.long
          };
        });
        return $scope.cinemaList = _.filter(cinemaList, function(cinema) {
          var _ref;
          return _ref = cinema.code, __indexOf.call(artEtEssaiCinemaCodes, _ref) >= 0;
        });
      });
    });
  };
  Position.getDefaultCenter(function(center) {
    setCinemaList(center);
    return $scope.map = {
      center: center,
      zoom: 13
    };
  });
  return $scope.events = {
    'dragend': handleDragend
  };
});

app.controller('showtimeCtrl', function($scope, cinemaData) {
  $scope.movies = cinemaData.movies;
  $scope.cinema = cinemaData.cinema;
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

app.factory('Position', function() {
  return {
    getDefaultCenter: function(callback) {
      callback({
        latitude: 48.858181,
        longitude: 2.335000
      });
      return;
      if (navigator.geolocation != null) {
        return navigator.geolocation.getCurrentPosition(function(position) {
          return callback({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        });
      } else {
        return callback({
          latitude: 48.858181,
          longitude: 2.335000
        });
      }
    }
  };
});
