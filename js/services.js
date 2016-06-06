angular.module("eventapp.service",[])
.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl,params){
               var fd = new FormData();
               fd.append('file', file);
			fd.append("data", JSON.stringify(params));
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