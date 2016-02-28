/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("TestApp", [])
        .controller("HelloWorldController", HelloWorldController)
        .controller("GG", Gee)
        .controller("NgModelController", NgModelController);

    function NgModelController($scope) {

        $scope.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

        $scope.setAuthor2 = setAuthor;

        function setAuthor(author) {
            $scope.theAuthor = author;
        }

        $scope.setAuthor3 = function(author) {
            $scope.theAuthor = author;
        }
    }


    function HelloWorldController($scope) {
        $scope.hello = "Hello World from AngularJS";

    }

    function Gee($scope){
        $scope.hello2 = "dsklfjkld";

    }
})();