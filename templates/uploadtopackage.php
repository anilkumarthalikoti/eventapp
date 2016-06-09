<?php 
require "crossdomain.php";
?>
<ion-view title="{{app_title}}" hide-back-button="true"   hide-nav-bar="false">
<ion-header-bar class="bar-positive">
   
 
</ion-header-bar>
    <ion-content has-header="true" padding="true" ng-controller="UploadtoPackageCtrl">
	
	<input type="file" style="display:none;" file-model = "imagefile" id="imageupload" name="image" accept="image/*" />
	<input type="file" style="display:none;" file-model = "videofile" id="videoupload" accept="video/*"/>
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
 <div class = "row">
	<div class="col-50 text-center">
     <div style="width:100%; height:250px; border:1px solid #cccccc"></div>
 </div>
 <div class="col-50 text-center">
   <div style="width:100%; height:250px; border:1px solid #cccccc; "></div>
	</div>
  </div>
  <div class = "row">
  <div class="col-100" style="height:25px; position:absolute; bottom:0px;">
<button class="button button-large"  ng-click="uploadFile()">Upload</button>  </div>
</div>
	  </ion-content>
<ion-footer-bar class="bar-positive">

   
  <h1 class="title">{{fotter}}</h1>

 

</ion-footer-bar>
</ion