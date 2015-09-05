app.factory 'Position', ->
  getMapCenter: (callback) ->
    if navigator.geolocation?
      navigator.geolocation.getCurrentPosition (position) ->
        callback
          latitude: position.coords.latitude
          longitude: position.coords.longitude
    else
      #Paris
      callback
        latitude: 48.858181
        longitude: 2.335000
