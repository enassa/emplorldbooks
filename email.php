<?php
$name = addslashes($_REQUEST['name']);
$gender = addslashes($_REQUEST['gender']);
$hostel = addslashes($_REQUEST['hostel']);
$roomnumber = addslashes($_REQUEST['roomnumber']);
$orderinfo= addslashes($_REQUEST['orderinfo']);

$eaddress = "assanenathaniel@gmail.com";
$subject =" ".$name.", ".$gender.", ".$hostel.",  ".$roomnumber."";
$from = "From: Bookorder@emplorldbooks.ga";
mail($eaddress,$subject,$orderinfo,$from);

/*
echo "$gender";
echo "$hostel";
echo "$roomnumber";
*/


?>