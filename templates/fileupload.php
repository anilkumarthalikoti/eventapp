<?php 
require "crossdomain.php";
 
 if(isset($_FILES['file'])){
 foreach($_FILES['file']['tmp_name'] as $key => $tmp_name)
{
    $file_name = $key.$_FILES['file']['name'][$key];
	echo $file_name;
    $file_size =$_FILES['file']['size'][$key];
    $file_tmp =$_FILES['file']['tmp_name'][$key];
    $file_type=$_FILES['file']['type'][$key];  
    move_uploaded_file($file_tmp,"../images/".time().$file_name);
}
   }else{
   echo "NO FILE SET";
   }
?>