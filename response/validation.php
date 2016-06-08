<?php
header("access-control-allow-origin: *");
 
if(isset($_POST["service"])){
$service=$_POST["service"];
$response="invalid";
if($service=="validate"){
$user=$_POST["username"];
$pwd=$_POST["userpwd"];
if($user==$pwd){
$response="valid";
}
echo $response;
}

}
 ?>
 