<?php 
require "crossdomain.php";
?>
<ion-view title="Event Manager" hide-back-button="true"   hide-nav-bar="false">
<ion-header-bar class="bar-positive">
   
 
</ion-header-bar>
    <ion-content has-header="true" padding="true" ng-controller="HomeCtrl">
	
	<input type="file" style="display:none;" file-model = "myFile" id="imageupload" name="image" accept="image/*" />
	<input type="file" style="display:none;" ng-model="videofile" accept=""/>
	<div class = "row">
	<div class="col-50 text-center">
     <img src="{{baseurl}}img/uploadimage.png" width="128" height="128" ng-click="openimage()" />
 
 </div>
 <div class="col-50 text-center">
    <img src="{{baseurl}}img/video.png" width="128" height="128"  />
	</div>
  </div>
 
  <div class = "row">
  <div class="col-100">
<button class="button button-large"  ng-click="uploadFile()">Upload</button>  </div>
</div>
	  </ion-content>
<ion-footer-bar class="bar-positive">

   
  <h1 class="title">Designed & Developed by ::.</h1>

 

</ion-footer-bar>
</ion