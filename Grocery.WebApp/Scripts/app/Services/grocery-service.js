app.factory('GroceryService', ['$http', function ($http) {
    var urlBase = '/api';
    var GroceryService = {};

    GroceryService.GetProducts = function () {
        return $http.get(urlBase + '/GroceryShop');
    };

    return GroceryService;
}]);