<?php 
require "crossdomain.php";
?>
<ion-view title="{{app_title}}" hide-back-button="true"   hide-nav-bar="false">
<ion-header-bar class="bar-positive">
   
 
</ion-header-bar>
    <ion-content has-header="true" padding="true" ng-controller="UploadtoPackageCtrl">
	
	   
	<!--	
	<input type="file" style="display:none;" file-model = "imagefile" id="imageupload" name="image" accept="image/*" />
	<input type="file" style="display:none;" file-model = "videofile" id="videoupload" accept="video/*"/>-->
	<div class = "row">
	<div class="col-50 text-center">
	<div class="icon ion-camera"  ng-click="openimage()" style="font-size:128px;"></div>
	<!--
     <img src="{{baseurl}}img/uploadimage.png" width="128" height="128" />
 -->
 </div>
 <div class="col-50 text-center">

 <div class="icon ion-videocamera"  ng-click="openvideos()" style="font-size:128px;"></div>
    
	</div>
  </div>
  <div> 
            

            <input  
                type="file" 
                accept="image/*" 
					image="images"
                 id="imageupload"  resize-max-height="300"
    resize-max-width="250"
    resize-quality="0.7" ng-model="imageupload"  onchange="angular.element(this).scope().getFileDetails(this)"   style="display:none;"  multiple />
            
               <input  
                type="file" 
                accept="video/*" 
             
                id="videoupload" ng-model="videoupload" onchange="angular.element(this).scope().getFileDetails(this)"  style="display:none;"    multiple />
           
            
        </div>
		<div style="width:100%;">
		<div style="width:50%; height:250px; text-align:center; overflow:hidden;">
		<div style="width:250px; height:25px; overflow:auto; text-align:center; border:1px solid #CCCCCC; background:#CCCCCC">
		Image selected
		</div>
		<div style="width:250px; height:250px; overflow:auto; text-align:center; border:1px solid #CCCCCC">
		
		<img ng-repeat="img in images" ng-src="{{img.resized.dataURL}}"/>
		</div>
		
		</div>
		<div style="width:50%; height:250px; text-align:center; overflow:hidden; ">
		<div style="width:250px; height:250px; overflow:auto; text-align:center; border:1px solid #CCCCCC">
		 
		</div>
		</div>
	 <p  ><progress id="pro" value="0" style="display:none;"></progress></p>
  
 
 <div style="width:100%; text-align:center">
<button class="button button-large"  ng-click="uploadFiles()">Upload Images</button> 
<button class="button button-large"  ng-click="uploadVideos()">Upload Videos</button> 
 </div>
</div>
	  </ion-content>
<ion-footer-bar class="bar-positive">

   
  <h1 class="title">{{fotter}}</h1>

 

</ion-footer-bar>
</ion