<?php
require "crossdomain.php";
if(isset($_POST["service"])){
$service=$_POST["service"];
$response="invalid";
if($service=="validate"){
$user=$_POST["username"];
$pwd=$_POST["password"];
if($user==$pwd){
$response="valid";
}
echo $response;
}

}
 ?>
 