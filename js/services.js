angular.module("eventapp.service",[])
.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl,params){
			console.log("Uploading "+file.length+" files");
               var fd = new FormData();
               
			   for (var i in file) {
                fd.append('file', file[i]);
            }
			//fd.append("data", JSON.stringify(params));
               $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){

               })
            
               .error(function(){
               });
            }
         }]);