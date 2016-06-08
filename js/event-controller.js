angular.module("eventapp.controllers",[])
 .controller('AppCtrl', function ($scope, $state) {

        $scope.logout = function () {
         
            $state.go('app.login');
        };

        $scope.revokePermissions = function () {
             
        };

    })
	 .controller('UploadtoPackageCtrl', function($scope,fileUpload){
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
 .controller('HomeCtrl', function ($scope, $state) {})
    .controller('LoginCtrl', function ($scope, $state,$http) {
 $scope.username="";
 $scope.password="";
 
 
        $scope.doLogin = function () {
		var user=$scope.username;
		var pwd=$scope.password;
		 var params={};
		 params["username"]=user;
		 params["userpwd"]=pwd;
		 params["service"]="validate";
		 $http({
  method: 'POST',
  url: baseurl+"response/validation.php"
  
}).then(function validLogin(response) {
   if(response=="valid"){
	$state.go("app.home");
	}else{
	alert("Invalid login");
	}
	
  }, function errorCallback(response) {
alert("Invalid credentals")
  });
 
           
        };

    })
 .controller('NewBusinessCtrl', function ($scope, $state) {
 var food={name:"Foods",items:["Veg","Non-Veg","Gluten Food","Jain","Bar food"]};
 var drinks={name:"Drinks",items:["Drinks Allowed","Cock-Tail","Mock-Tail","Bar Area"]};
 var equipment={name:"Equipment",items:["Generator","Projector","Wifi","Microphone","Sound System"]};
 var parking={name:"Parking",items:["Valet Parking","Four Wheeler","Two Wheeler"]};
 var seating={name:"Seating",items:["Classical Style","Theater Style","Confrence Style","U Shape","Open"]};
  var facility={name:"Facilites",items:["Air Condition","Stage","Swimming pool","Wheel chair","Lift","Outside decorater","Havan","Plaintain Leaf Service"]};
 $scope.groups = [food,drinks,equipment,parking,seating,facility];
 //$scope.headers=["Food","Drinks","Equipments","Parking","Seating"];
 /*
  for (var i=0; i<$scope.headers.length; i++) {
    $scope.groups[i] = {
      name: $scope.headers[i],
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }*/
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
 })
   ;

    