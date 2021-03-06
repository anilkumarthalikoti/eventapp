var baseurl="http://192.168.1.68/eventapp/";
angular.module("eventapp",['ionic','ngCordova','ngRoute','ngCordova.plugins.fileTransfer','eventapp.controllers','eventapp.directives','eventapp.service'])
   	  .run(function ($ionicPlatform, $state,$http) {
 
    $ionicPlatform.registerBackButtonAction(function (event) {
    if($state.current.name=="app.home"){
     // navigator.app.exitApp();
	  
    }
	else
	 if($state.current.name=="app.login"){
      navigator.app.exitApp();
    }
    else {
      navigator.app.backHistory();
    }
  }, 100);


    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

})
 
 
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
		.state('app.uploadtopackage', {
                url: "/uploadtopackage",
                views: {
                    'menuContent': {
                        templateUrl: baseurl+"templates/uploadtopackage.php",
                        controller: "UploadtoPackageCtrl"
                    }
                }
            })	
			 .state('app.addbusiness', {
                url: "/addbusiness",
                views: {
                    'menuContent': {
                        templateUrl: baseurl+"templates/addbusiness.php",
                        controller: "NewBusinessCtrl"
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