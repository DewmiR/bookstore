var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'booksController',
        templateUrl: 'views/books.html'
    })

        .when('/book', {
            controller: 'booksController',
            templateUrl: 'views/books.html'
        })

        .when('/books/details/:id', {
            controller: 'booksController',
            templateUrl: 'views/book_details.html'
        })
        .when('/books/add', {
            controller:'booksController',
            templateUrl:'views/add_book.html'
        })
        .when('/books/edit/:id', {
            controller:'booksController',
            templateUrl:'views/edit_book.html'
        })
        .otherwise({
            redirectTo:'/'
        })

});

