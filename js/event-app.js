var baseurl="http://192.168.1.68/eventapp/";
angular.module("eventapp",['ionic','eventapp.controllers','eventapp.directives','eventapp.service'])
    .config(function ($stateProvider, $urlRouterProvider) {
                 $stateProvider 
				 .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: baseurl+"templates/menu.php",
                controller: "AppCtrl"
            })
.state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: baseurl+"templates/home.php",
                        controller: "HomeCtrl"
                    }
                }
            })
           .state('app.login', {
                url: "/login",
                views: {
                    'menuContent': {
                        templateUrl: baseurl+"templates/login.php",
                        controller: "LoginCtrl"
                    }
                }
            })
			

			
            .state('app.logout', {
                url: "/logout",
                views: {
                    'menuContent': {
                        templateUrl: baseurl+"templates/logout.php",
                        controller: "LogoutCtrl"
                    }
                }
            });

            

        // fallback route
        $urlRouterProvider.otherwise('/app/login');

    });