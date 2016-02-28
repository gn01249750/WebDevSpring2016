/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeCnotroller", HomeCnotroller);


    function HomeCnotroller($scope, $location, UserService) {
        $scope.$location = $location;
        $scope.allUsers = UserService.findAllUsers(returnFunction)
        $scope.createUserd = helper

        function helper()
        {
            var temp ={
                name: "gg"
            };
            UserService.createUser(temp,gg );
        }

        function gg(data)
        {
            $scope.curU = data;
        }

        function returnFunction(data)
        {
            $scope.dd = data;

        }
    }
})();