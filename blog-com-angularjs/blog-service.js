angular.module('app')
    .service('BlogService', blogService);

function blogService($http) {
    var URL_CONTEUDO = 'https://ng-curso-api.herokuapp.com/conteudos';
    return {
        listar: function() {
            return $http.get(URL_CONTEUDO)
        },
        listarPorId: function(id) {
            return $http.get(URL_CONTEUDO + '/id', {
                params: { id: id }
            })
        }
    }
}