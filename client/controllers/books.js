/**
 * Created by Dewmi on 8/31/2016.
 */
var myApp = angular.module('myApp');

myApp.controller('booksController', function ($scope,$http) {

    console.log("books controller loaded....");
    $scope.getBook = function () {
        $http.get('/api/books').success(function (response) {
             $scope.books = response;
        })
    }

});





