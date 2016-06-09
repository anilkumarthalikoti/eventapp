angular.module("eventapp.service",[])
.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl,params){
			 
               var fd = new FormData();
               var files=[];
			   for (var i in file) {
			   files.push(file[i]);
			   }
			  	fd.append('file',files);
				$http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){

               })
            
               .error(function(){
               });
            
		
			//fd.append("data", JSON.stringify(params));
               
            }
         }]);