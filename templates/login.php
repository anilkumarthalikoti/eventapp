<?php 
require "crossdomain.php";
?>
<ion-view title="Event Manager-NEw" hide-back-button="true"   hide-nav-bar="false">
<ion-header-bar class="bar-positive">
   
  <h1 class="title">Login-New</h1>
   
</ion-header-bar>
    <ion-content has-header="true" padding="true">
	<form  ng-controller="LoginCtrl">
      <div class="list list-inset">
  <label class="item item-input">
    <i class="icon ion-email placeholder-icon"></i>
    <input type="text" placeholder="Email" name="username" ng-model="username">
  </label>
  <br/>
  <label class="item item-input">
    <i class="icon ion-locked placeholder-icon"></i>
    <input type="password" placeholder="Password" name="password" ng-model="password">
  </label>
  <br/>
   <label class="item" style="padding:0px; border:0px; float:right;">
          <button class="button button-large"  ng-click="doLogin()">Sign In</button> 
          
        </label>
</div>
       
  </form>
     
 
    </ion-content>
<ion-footer-bar class="bar-positive">

   
  <h1 class="title">Designed & Developed by ::.</h1>

 

</ion-footer-bar>
</ion-view>