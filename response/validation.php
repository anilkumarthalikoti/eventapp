<?php
require "crossdomain.php";
$request_body = file_get_contents('php://input');
 $data = json_decode($request_body);

 if(isset($data->service)){
 
$service=$data->service;
$isvalid="false";
if($service=="validate"){
 //echo $data->service."Checking login";
$user=$data->username;
$pwd=$data->userpwd;
if($user==$pwd){
$isvalid="true";
}
echo $isvalid;
}

}
 ?>
 