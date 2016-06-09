angular.module("eventapp.controllers",[])
 .controller('AppCtrl', function ($scope, $state) {

        $scope.logout = function () {
          
            $state.go('app.login');
        };
		$scope.setView = function (view) {
          view="app."+view;
            $state.go(view);
        };
        $scope.revokePermissions = function () {
             
        };

    })
	 .controller('UploadtoPackageCtrl', function($scope,fileUpload){
	 $scope.baseurl=baseurl;
	  $scope.imagefile=[];
	 $scope.videofile=[];
            $scope.uploadFile = function(){
               var imgfile = $scope.images4;
               var videofile = $scope.videos4;
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
 .controller('HomeCtrl', function ($scope, $state) {
 $scope.logged="";
 
 })
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
  url: baseurl+"response/validation.php",
  data:params,
   headers:{
  transformRequest: angular.identity,
  'Content-Type':undefined
  }
}).then(function(response) {
 var isvalid=JSON.stringify(response);
 alert(isvalid);
   if(isvalid.data=="true"){
  
   //Session.create("logged_user",$scope.username);
	$state.go("app.home");
	}else{
	alert("Invalid login");
	}
	
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

    