/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeCnotroller", HomeCnotroller);


    function HomeCnotroller($scope, $location, UserService) {
        $scope.$location = $location;
        ggg();
        //console.log($scope.allUsers);
        $scope.createUserd = helper
        $scope.addUser = addUser;
        $scope.deleteUser = deleteUser;
        $scope.updateUser = updateUser;

        function updateUser()
        {
            var temp = {"gg":1233};
            UserService.updateUser(123,temp);
        }

        function deleteUser()
        {
            UserService.deleteUserById(123);
        }


        function addUser(user)
        {
            UserService.createUser(user)
                .then(function(response)
                {
                    $scope.allUsers = response.data;
                    console.log($scope.allUsers);
                });
        }


        function ggg()
        {
            UserService.findAllUsers()
                .then(function(response)
                {
                    //console.log(response);
                    $scope.allUsers = response.data;
                    console.log($scope.allUsers);
                });
        }

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