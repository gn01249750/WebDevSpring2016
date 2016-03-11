/**
 * Created by PO on 3/9/2016.
 */
(function()
{
    angular
        .module("BountyShopApp", [])
        .controller("UserController", UserController);

    function UserController($scope)
    {
        $scope.selectedIndex = -1;
        var users = [
            {
                "username":"ed",
                "password":"ed",
                "email":"ed@ed.com",
                "usertype":"buyer"
            },
            {
                "username":"bob",
                "password":"bob",
                "email":"bob@bob.com",
                "usertype":"buyer"
            },
            {
                "username":"allen",
                "password":"allen",
                "email":"allen@allen.com",
                "usertype":"seller"
            },
            {
                "username":"oliva",
                "password":"oliva",
                "email":"oliva@oliva.com",
                "usertype":"admin"
            }
        ];

        $scope.users = users;
        $scope.addUser = addUser;
        $scope.deleteUser = deleteUser;
        $scope.selectUser = selectUser;
        $scope.updateUser = updateUser;

        function updateUser(data)
        {
            if($scope.selectedIndex != -1)
            {
                users[$scope.selectedIndex] =
                {
                    "username":data.username,
                    "password":data.password,
                    "email":data.email,
                    "usertype":data.usertype
                }
                $scope.selectedIndex = -1;
            }
        }

        function selectUser(index)
        {
            $scope.selectedIndex = index;
            var data = users[index];
            var temp =
            {
                "username":data.username,
                "password":data.password,
                "email":data.email,
                "usertype":data.usertype
            };
            $scope.user = temp;
        }

        function deleteUser(index)
        {
            users.splice(index,1);
        }

        function addUser(data)
        {
            var newm =
            {
                "username":data.username,
                "password":data.password,
                "email":data.email,
                "usertype":data.usertype
            };
            users.push(newm);
            console.log(users);
        }


    }
})();
