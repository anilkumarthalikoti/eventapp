<?php 
require "crossdomain.php";
?>
<ion-view title="CREATE BUSINESS" hide-back-button="true"   hide-nav-bar="false">
<ion-header-bar class="bar-positive">
   
 
</ion-header-bar>
    <ion-content has-header="true" padding="true" ng-controller="NewBusinessCtrl" >
 
	 <div class="list list-inset">
 
 
  <label class="item item-input">
    <i class="icon ion-card"></i>
    <input type="text" placeholder="Business Name" name="businessName" ng-model="businessName">
  </label>
  <br/>
  
 
  <label class="item item-input">
    <i class="icon ion-location"></i>
    <input type="text" placeholder="Location" name="location" ng-model="location">
  </label>
  <br/>
  
 
  <label class="item item-input">
    <i class="icon ion-stats-bars"></i>
    <input type="text" placeholder="City" name="city" ng-model="city">
  </label>
  <br/>
  
  
 
  <label class="item item-input">
    <i class="icon ion-home"></i>
    <input type="text" placeholder="State" name="state" ng-model="state">
  </label>
  <br/>
  
  
 
  <label class="item item-input">
    <i class="icon ion-android-call"></i>
    <input type="text" placeholder="Business Contact" name="contact" ng-model="businessContact">
  </label>
  <br/>
  
  
 
  <label class="item item-input">
    <i class="icon ion-ipad"></i>
    <input type="text" placeholder="Business Mobile" name="businessMobile" ng-model="businessMobile">
  </label>
  <br/>
  <label class="item item-input">
    <i class="icon ion-person"></i>
    <input type="text" placeholder="Manger's Name " name="managerName" ng-model="businessMobile">
  </label>
  <br/>
  <label class="item item-input">
    <i class="icon ion-iphone"></i>
    <input type="text" placeholder="Manager's Contact" name="managerContact" ng-model="managerContact">
  </label>
  <br/>
  
  </div>
<!-- Food Items-->
 
   <ion-list>
        <div ng-repeat="group in groups">
          <ion-item class="item-stable"
                    ng-click="toggleGroup(group)"
                    ng-class="{active: isGroupShown(group)}">
              <i class="icon" ng-class="isGroupShown(group) ? 'ion-minus' : 'ion-plus'"></i>
            &nbsp;
           {{group.name}}
          </ion-item>
          <ion-item class="item-accordion"
                    ng-repeat="item in group.items"
                    ng-show="isGroupShown(group)" >
					<ion-checkbox  > {{item}}</ion-checkbox>
           
          </ion-item>
        </div>
      </ion-list>

	  </ion-content>
<ion-footer-bar class="bar-positive">

   
  <h1 class="title">Designed & Developed by ::.</h1>

 

</ion-footer-bar>
</ion