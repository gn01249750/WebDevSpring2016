/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("BountyShopApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html",
                controller: "MainController"
            })
            .when("/register", {
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "views/login/login.view.html",
                controller: "LoginController"
            })
            .when("/missionboard", {
                templateUrl: "views/missionboard/missionboard.view.html",
                controller: "MissionBoardController"
            })
            .when("/treasurehunt", {
                templateUrl: "views/treasurehunt/treasurehunt.view.html",
                controller: "TreasurehuntController"
            })
            .when("/profile", {
                templateUrl: "views/profile/profile.view.html",
                controller: "ProfileController"
            })
            //.when("/admin", {
            //    templateUrl: "views/admin/admin.view.html",
            //    controller: "adminController",
            //    resolve: {
            //        loggedin: checkAdmin
            //    }
            //})
            //.when("/forms", {
            //    templateUrl: "views/forms/forms.view.html",
            //    controller: "FormController",
            //    resolve: {
            //        loggedin: checkLoggedin
            //    }
            //})
            //.when("/fields", {
            //    templateUrl: "views/forms/fields.view.html",
            //    controller: "FieldController",
            //    resolve: {
            //        loggedin: checkLoggedin
            //    }
            //})
            .when("/treasurehunt/:treasureId/treasure", {
                templateUrl: "views/treasurehunt/treasure.view.html",
                controller: "TreasureController"
                //resolve: {
                //    loggedin: checkLoggedin
                //}
            })
            .when("/treasurehunt/search/:searchKeyWord", {
                templateUrl: "views/treasurehunt/treasureSearch.view.html",
                controller: "TreasureSearchController"
            })
            .when("/missionboard/:id/mission", {
                templateUrl: "views/missionboard/mission.view.html",
                controller: "MissionDetailController"
                //resolve: {
                //    loggedin: checkLoggedin
                //}
            })
            .when("/treasurehunt/similar/:searchKeyWord", {
                templateUrl: "views/treasurehunt/treasureSimilar.view.html",
                controller: "TreasureSimilarController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }


    //var checkLoggedin = function($q, $http, $location, $rootScope)
    //{
    //    var deferred = $q.defer();
    //    $http.get('/api/assignment/loggedin')
    //        .then(function(user)
    //        {
    //            console.log(user.data[0]);
    //            if (user.data[0] != '0')
    //            {
    //                $rootScope.currentUser = user.data[0];
    //
    //                deferred.resolve();
    //            }
    //            else
    //            {
    //                deferred.reject();
    //                $location.url('/login');
    //            }
    //        });
    //
    //    return deferred.promise;
    //};
    //
    //var checkAdmin = function($q, $rootScope, $http)
    //{
    //    var deferred = $q.defer();
    //
    //    $http.get('/api/assignment/loggedin')
    //        .then(
    //            function (response) {
    //                console.log(response);
    //                var user = response.data;
    //                if (user !== '0' && user[0].roles.indexOf('admin') != -1) {
    //                    $rootScope.currentUser = user[0];
    //                    deferred.resolve();
    //                }else{
    //                    deferred.reject();
    //                    $location.url('/login');
    //                }
    //            },
    //            function (err) {
    //                deferred.reject();
    //            });
    //
    //    return deferred.promise;
    //};
})();