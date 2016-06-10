<?php 
/*
upload_max_filesize  = 256M
post_max_size =257
file_uploads = On
max_execution_time = 300
max_input_time = 300
*/
require "crossdomain.php";
 if(isset($_FILES['file'])){
 foreach($_FILES['file']['tmp_name'] as $key => $tmp_name)
{
    $file_name = $key.$_FILES['file']['name'][$key];
	echo $file_name;
    $file_size =$_FILES['file']['size'][$key];
    $file_tmp =$_FILES['file']['tmp_name'][$key];
    $file_type=$_FILES['file']['type'][$key];  
    move_uploaded_file($file_tmp,"../videos/".time().$file_name);
}
   }else{
   echo "NO FILE SET";
   }
?>