<?php 
require "crossdomain.php";
 if(isset($_FILES['file'])){
      $errors= array();
	  echo $_FILES['file']['name'];
      $file_name = $_FILES['file']['name'];
      $file_size =$_FILES['file']['size'];
      $file_tmp =$_FILES['file']['tmp_name'];
      $file_type=$_FILES['file']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));
      
      $expensions= array("mp4","avi","3gp");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
       
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"../videos/".$file_name);
         echo "Success";
      }else{
         print_r($errors);
      }
   }else{
   echo "NO FILE SET";
   }
?>