angular.module('app')
    .controller('ListarTodosController', listarTodosController);

listarTodosController.$inject = ['$scope', 'BlogService'];

function listarTodosController($scope, blogService) {
    blogService.listarTodos().then(function(res) {
        $scope.conteudo = res.data
    })

}