angular.module('app')
    .controller('BlogController', ['$scope', '$routeParams', 'BlogService', blogController]);

function blogController($scope, $routeParams, blogService) {
    var id = 0;
    console.log($routeParams.pagina);

    switch ($routeParams.pagina) {
        case 'html':
            id = 24;
            break;
        case 'css':
            id = 25;
            break;
        case 'javascript':
            id = 26;
            break;
        default:
            break;
    }
    blogService.listarPorId(id).then(function(retorno) {
        $scope.item = retorno.data
    });
}