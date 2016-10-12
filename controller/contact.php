<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

if(isset($_POST) and ($_SERVER['SERVER_NAME']=="picnframes.com")){
$message = "Name: ".$_POST['name']."\nPhone: ".$_POST['phone']."\nEmail: ".$_POST['email']."\nMessage: ".$_POST['message'];
mail("info@picnframes.com", "Picnframes.com Enquiry", $message);
echo "true";
}else{
 echo "false";
}

?>
