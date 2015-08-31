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
