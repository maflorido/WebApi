app.controller("groceryController", function ($scope, $http) {
    var self = this;
    
    self.Listar = function () {        
        $http.get("/api/GroceryShop").then(function (pl) { $scope.produtos = pl.data },
          function (errorPl) {
              $scope.error = errorPl;
          });        
    }
});