angular.module("groceryApp", [])
    .controller("groceryController", [function ($scope, $http) {
        var self = this;

        self.Listar = function () {
            alert('chamou');
        }
    }]);