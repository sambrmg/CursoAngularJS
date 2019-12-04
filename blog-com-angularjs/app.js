angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.

    when('/:pagina', {
        controller: 'BlogController',
        templateUrl: 'conteudo.html'
    }).

    otherwise({ redirectTo: '/:pagina' });

}