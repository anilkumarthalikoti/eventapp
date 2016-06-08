<?php 
require "crossdomain.php";
?>
<ion-side-menus>

    <ion-pane ion-side-menu-content>
        <ion-nav-bar class="bar-positive">
            <ion-nav-back-button class="button-clear"><i class="icon ion-ios7-arrow-left"></i></ion-nav-back-button>
        </ion-nav-bar>
        <ion-nav-view name="menuContent" animation="slide-left-right"></ion-nav-view>
    </ion-pane>

    <ion-side-menu side="left">
        <header class="bar bar-header bar-positive">
            <h1 class="title">Event Manager</h1>
        </header>
        <ion-content class="has-header">
            <ion-list>
			<ion-item item-type="item-icon-left" nav-clear menu-close href="#/app/addbusiness">
                    <i class="icon ion-radio-waves"></i>
                    New Business
                </ion-item>
                <ion-item item-type="item-icon-left" nav-clear menu-close href="#/app/uploadtopackage">
                    <i class="icon ion-radio-waves"></i>
                    Package & Menu
                </ion-item>
                <ion-item item-type="item-icon-left" nav-clear menu-close href="#/app/share">
                    <i class="icon ion-share"></i>
                    Share
                </ion-item>
                <ion-item item-type="item-icon-left" nav-clear menu-close href="#/app/person/me/friends">
                    <i class="icon ion-ios7-people"></i>
                    Friends
                </ion-item>
                <ion-item item-type="item-icon-left" nav-clear menu-close href="#/app/profile">
                    <i class="icon ion-person"></i>
                    Profile
                </ion-item>
                <ion-item item-type="item-icon-left" nav-clear menu-close ng-click="logout()">
                    <i class="icon ion-log-out"></i>
                    Logout
                </ion-item>
                <ion-item item-type="item-icon-left" nav-clear menu-close ng-click="revokePermissions()">
                    <i class="icon ion-unlocked"></i>
                    Revoke Permissions
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-side-menu>

</ion-side-menus>
<ion-footer-bar class="bar-positive">

   
   

 

</ion-footer-bar>