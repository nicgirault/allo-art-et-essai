app.controller 'layoutCtrl', ($scope, $aside) ->
  # asideInstance = $aside.open {
  #   templateUrl: 'aside.html'
  #   controller: 'AsideCtrl'
  #   placement: 'left'
  #   size: 'lg'

  $scope.asideState = open: false

  $scope.openAside = (position, backdrop) ->
    postClose = ->
      $scope.asideState.open = false
      return

    $scope.asideState =
      open: true
      position: position
    $aside.open(
      templateUrl: 'aside.html'
      placement: position
      size: 'sm'
      backdrop: backdrop
      controller: 'asideCtrl'
    )
    return
