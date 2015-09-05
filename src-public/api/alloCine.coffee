app.factory 'AlloCine', ($resource, ALLOCINE_API_URL, ALLOCINE_PARTNER_TOKEN) ->
  Cinema = $resource ALLOCINE_API_URL + '/showtimelist?partner=:partner&format=json&theaters=:alloCineId'

  feedCinema: (cinema) ->
    Cinema.get {
      partner: ALLOCINE_PARTNER_TOKEN,
      alloCineId: cinema.alloCineId
    }, (data) ->
      if data.feed
        place = data.feed.theaterShowtimes[0].place.theater
        cinema.name = place.name
        cinema.address = place.address
        cinema.postalCode = place.postalCode
        cinema.city = place.city
        cinema.picture = place.picture.href
        cinema.allocineLink = place.link[0].href
        cinema.geoloc = place.geoloc
        cinema.area = place.area

  getMovies: (cinemaId) ->
    cinemaData = Cinema.get {
      partner: ALLOCINE_PARTNER_TOKEN,
      alloCineId: cinemaId
    }
    cinemaData.$promise.then (data) ->
      return data.feed.theaterShowtimes[0].movieShowtimes

  getCinemaAround: (geoloc, callback) ->
    return unless geoloc.latitude? and geoloc.longitude?
    CinemaList = $resource ALLOCINE_API_URL + '/theaterlist?partner=:partner&format=json&count=:count&lat=:lat&long=:long&radius=:radius'
    cinemaListPromise = CinemaList.get {
      partner: ALLOCINE_PARTNER_TOKEN,
      lat: geoloc.latitude
      long: geoloc.longitude
      radius: 20
      count: 200
    }

    yolo = cinemaListPromise.$promise.then (data) ->
      callback data.feed.theater
