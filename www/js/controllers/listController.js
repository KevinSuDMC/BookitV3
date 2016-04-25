angular.module('controllers', [])

.controller('ListController', ['$scope', '$http', '$state', function($scope, $http, $state){
  $http.get('js/data.json').success(function(data){
    $scope.rooms = data.rooms;
    $scope.whichroom = $state.params.aId;

    $scope.toggleHeart = function (item){
    	item.heart =! item.heart;
    };

  });
}]);
