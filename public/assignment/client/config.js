/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html",
                controller: "HomeCnotroller"
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/admin", {
                templateUrl: "views/admin/admin.view.html",
                controller: "adminController",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/forms", {
                templateUrl: "views/forms/forms.view.html",
                controller: "FormController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/fields", {
                templateUrl: "views/forms/fields.view.html",
                controller: "FieldController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/forms/:formId/fields", {
                templateUrl: "views/forms/fields.view.html",
                controller: "FieldController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .otherwise({
                redirectTo: "/home"
            });
    }


    var checkLoggedin = function($q, $http, $location, $rootScope)
    {
        var deferred = $q.defer();
        $http.get('/api/assignment/loggedin')
            .then(function(user)
            {
                console.log(user.data[0]);
                if (user.data[0] != '0')
                {
                    $rootScope.currentUser = user.data[0];

                    deferred.resolve();
                }
                else
                {
                    deferred.reject();
                    $location.url('/login');
                }
            });

        return deferred.promise;
    };

    var checkAdmin = function($q, $rootScope, $http, $location)
    {
        var deferred = $q.defer();

        $http.get('/api/assignment/loggedin')
            .then(
                function (response) {
                    var user = response.data;
                    if (user !== '0' && user[0].roles.indexOf('admin') != -1) {
                        $rootScope.currentUser = user[0];
                        deferred.resolve();
                    }else{
                        deferred.reject();
                        $location.url('/login');
                    }
                },
                function (err) {
                    deferred.reject();
                });

        return deferred.promise;
    };
})();