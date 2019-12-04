angular.module('app')
    .controller('ListarPorIdController', ['BlogService', '$routeParams', '$scope', listarPorIdController])

function listarPorIdController(blogService, $routeParams, $scope) {

    var dominio = {
        html: 24,
        css: 25,
        javascript: 26
    }
    blogService.listarPorId(dominio[$routeParams.pagina] || 0)
        .then(function(res) {
            $scope.conteudo = res.data;
        })
}