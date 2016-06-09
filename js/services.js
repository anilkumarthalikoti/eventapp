angular.module("eventapp.service",[])
.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl,params){
			 
               
               
			   for (var i in file) {
			   var fd = new FormData();
			  	fd.append('file',file[i]);
				$http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){

               })
            
               .error(function(){
               });
            }
		
			//fd.append("data", JSON.stringify(params));
               
            }
         }]);