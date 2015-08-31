app.factory 'Cinema', (Parse) ->
  class Cinema extends Parse.Model
    @configure "Cinema", "alloCineId"
