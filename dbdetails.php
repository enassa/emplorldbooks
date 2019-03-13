<?php
/*
$tablename = "books";
$dbname = "heroku_64357b7c6a8e2fc";
$servername = "us-cdbr-iron-east-03.cleardb.net";   
$username="bca0d264f64203";
$password="f4f0322a";
$counter = 1;
$bookname = 0;
*/

$cleardb_url      = parse_url(getenv("CLEARDB_DATABASE_URL"));
$servername   = $cleardb_url["host"];
$username = $cleardb_url["user"];
$password = $cleardb_url["pass"];
$dbname       = substr($cleardb_url["path"],1);
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