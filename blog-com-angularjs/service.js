angular.module('BlogServiceApp', [])
    .service('BlogService', blogService);

function blogService($http) {
    var URL = 'https://ng-curso-api.herokuapp.com/conteudos'
    return {
        listarTodos: function() {
            return $http.get(URL)
        },
        listarPorId: function(id) {
            return $http.get(URL + '/id', {
                params: {
                    id: id
                }
            })
        }
    }
}