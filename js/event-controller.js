angular.module("eventapp.controllers",[])
 .controller('AppCtrl', function ($scope, $state) {

        $scope.logout = function () {
         
            $state.go('app.login');
        };

        $scope.revokePermissions = function () {
             
        };

    })
	 .controller('HomeCtrl', function($scope,fileUpload){
	 $scope.baseurl=baseurl;
            $scope.uploadFile = function(){
               var imgfile = $scope.imagefile;
               var videofile = $scope.videofile;
               console.log('file is ' );
              // console.dir(file);
               
               var uploadUrl = $scope.baseurl+"templates/fileupload.php";
			       fileUpload.uploadFileToUrl(imgfile, uploadUrl,{});
				   uploadUrl = $scope.baseurl+"templates/videoupload.php";
				     fileUpload.uploadFileToUrl(videofile, uploadUrl,{});
            }
			
			$scope.openimage=function(){
			document.getElementById("imageupload").click();
			
			}
			
			$scope.openvideos=function(){
			document.getElementById("videoupload").click();
			
			}
         })
 
    .controller('LoginCtrl', function ($scope, $state) {
 $scope.username="";
 $scope.password="";
 
 
        $scope.doLogin = function () {
		var user=$scope.username;
		var pwd=$scope.password;
		 
 if(user=="demo" && user==pwd){
  
  $state.go("app.home");
 
 }
           
        };

    })
 
   ;

    