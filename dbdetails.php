<?php

$tablename = "books";
$dbname = "bookinfo";
$servername = "localhost";   
$username="root";
$password="";
$counter = 1;
$bookname = 0;
/*
$tablename = "books";
$dbname = "bookinfo";
$servername = "us-cdbr-iron-east-03.cleardb.net";   
$username="bb30eefa963844";
$password="7e160ae6";
*/
$counter = 1;
$bookname = 0;

$contobookinfo = new mysqli($servername, $username, $password, $dbname);

if(!$contobookinfo){
    die ("CONNECTION FAILED:".mysqli_connect_error());
}
else{
    echo "";
}

?>