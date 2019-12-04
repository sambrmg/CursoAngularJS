angular.module('app', ['ngRoute', 'BlogServiceApp'])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
    when('/', {
        controller: 'ListarTodosController',
        templateUrl: 'listar-todos.html'
    }).
    when('/:pagina', {
        controller: 'ListarPorIdController',
        templateUrl: 'conteudo.html'
    }).
    otherwise({ redirectTo: '/' });

}