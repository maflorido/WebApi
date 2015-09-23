var app = angular.module("groceryApp", ["ngRoute"]);

app.factory("ShareData", function () {
    value: 0
});

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/ListarProdutos',
                        {
                            templateUrl: 'Views/Home/_ListarProdutos.cshtml',
                            controller: 'groceryController'
                        });

    $locationProvider.html5Mode({
        enbled: true,
        requireBase: false
    }).hashPrefix('!');
}]);