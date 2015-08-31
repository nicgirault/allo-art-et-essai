require 'cloud/app.js'

Parse.Cloud.beforeSave "Cinema", (request, response) ->
  request.object.set "random", Math.floor((Math.random() * 100) + 1)
  response.success()
  return
