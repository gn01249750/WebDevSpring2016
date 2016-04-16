/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("adminController", adminController);

    function adminController($scope, AdminService)
    {
        $scope.allUsers = null;
        getAllUsers();
        $scope.deleteUser = deleteUser;
        $scope.selectUser = selectUser;
        $scope.updateUser = updateUser;
        $scope.addUser = addUser;
        var selectedUser = null;

        function deleteUser(user, index)
        {
            console.log(user);
            AdminService
                .deleteUserById(user._id)
                .then(function(response){
                    $scope.allUsers.splice(index,1);
                },function(err){
                    console.log("Error: " + err);
                })
        }

        function selectUser(index)
        {
            var newUser =
            {
                _id: $scope.allUsers[index]._id,
                username : $scope.allUsers[index].username,
                password : $scope.allUsers[index].password,
                firstName : $scope.allUsers[index].firstName,
                lastName : $scope.allUsers[index].lastName,
                roles : $scope.allUsers[index].roles,
                emails: $scope.allUsers[index].emails,
                phones: $scope.allUsers[index].phones
            }
            $scope.chosenUser = newUser;
            selectedUser = $scope.allUsers[index];
        }

        function updateUser(newUser2)
        {

            if(selectedUser != null){
                console.log(newUser2);
                console.log(selectedUser);
                var rolesTemp = null;
                if(newUser2.roles)
                {
                    rolesTemp = newUser2.roles.toString().split(",");
                }
                var newUser =
                {
                    _id: newUser2._id,
                    username: newUser2.username,
                    password: newUser2.password,
                    firstName: newUser2.firstName,
                    lastName: newUser2.lastName,
                    emails: newUser2.emails,
                    phones: newUser2.phones,
                    roles: rolesTemp
                };
                AdminService
                    .updateUser(selectedUser._id, newUser)
                    .then(function(response){
                        selectedUser = null;
                        getAllUsers();
                    },function(err){
                        console.log("Error: " + err);
                    })
            }
        }

        function addUser(user)
        {
            AdminService
                .findUserByUsername(user.username)
                .then(function(response){
                    console.log(response);
                    console.log(response.data);
                    if(response.data == null){
                        AdminService
                            .createUser(user)
                            .then(function(response){
                                getAllUsers();
                            },function(err){
                                console.log("Error: " + err);
                            });
                    }else{
                        alert("username must be unique");
                    }
                }, function(err){
                    console.log("Error: " + err);
                });

        }



        function getAllUsers()
        {
            AdminService.findAllUsers()
                .then(function(response)
                {
                    $scope.allUsers = response.data;
                });
        }


    }
})();