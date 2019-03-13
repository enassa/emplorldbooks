<?php

include 'dbdetails.php';

$valueofcall = addslashes($_REQUEST['callvalue']);
$title = addslashes($_REQUEST['title']);
$author = addslashes($_REQUEST['author']);
$summery = addslashes($_REQUEST['summery']);
$category = addslashes($_REQUEST['category']);
$sp = (int) $_REQUEST['sp'];
$qp = (int) $_REQUEST['qp'];
$image = (int) $_REQUEST['image'];

$insertquery = "INSERT INTO books(title, author, summery, category,image,sp,qp) VALUES ('$title','$author','$summery','$category','$image','$sp','$qp')";

mysqli_query($contobookinfo, $insertquery);

//include 'showbooks.php';
    ?>



