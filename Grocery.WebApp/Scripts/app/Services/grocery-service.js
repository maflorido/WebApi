app.factory('GroceryService', ['$http', function ($http) {
    var urlBase = '/api';
    var CityService = {};

    CityService.GetProducts = function () {
        return $http.get(urlBase + '/GroceryShop');
    };

    return CityService;
}]);