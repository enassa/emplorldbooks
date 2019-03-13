

<?php

include 'dbdetails.php';

$loadbooks = "SELECT * FROM books ORDER by id ASC";

$displaybooks = mysqli_query($contobookinfo, $loadbooks);
$onclick = "";
while($extract = mysqli_fetch_array($displaybooks)){
    // = "SELECT * FROM books ORDER by id ASC";
   // $price = $extract['id'];
    $bookid =  $extract['id'];
    $booktitle = $extract['title'];
    $bookauthor = $extract['author'];
    $booksummery = $extract['summery'];
    $bookcategory = $extract['category'];
    $booksp = $extract['sp'];
    $bookqp = $extract['qp'];
    $bookimage =  $extract['image'];
    $parameters = 9;
    $num = 1;
    $addtobooks = 1;
    $subfrombooks=0;
    $stockings =2;
    $idofbookimg = "book_image".$bookid;
    
    echo "<div class='books' id=".$bookid."  ><div style= \"background-image:url('".$bookimage."'); background-repeat:none; background-size:cover;  background-position: center;\" class='book_image' id='".$idofbookimg."' onmouseover='moreinfo(".$bookid.")' onmouseout='lessinfo(".$bookid.")'  onclick = 'bookschecked(".$bookid.",\"".$booktitle."\",\"". $bookauthor."\",\"".$booksummery."\",\"".$bookcategory."\",".$booksp.",".$bookqp.",".$stockings.",\"".$bookimage."\")'>
    <div id='a".$bookid."'  class = 'textonimage'> Price: &#x20B5 ".$booksp." <br><br>Author: ".$bookauthor."<br><br> Category: ".$bookcategory."  </div></div>
    
    <div class='control' id=".$bookid."+c' > <div class='minus' onclick = 'bookschecked(".$bookid.",\"".$booktitle."\",\"". $bookauthor."\",\"".$booksummery."\",\"".$bookcategory."\",".$booksp.",".$bookqp.",".$subfrombooks.",\"".$bookimage."\")' id=".$bookid."+c'><h1>-</h1></div>
    
    <div class='plus' onclick = 'bookschecked(".$bookid.",\"".$booktitle."\",\"". $bookauthor."\",\"".$booksummery."\",\"".$bookcategory."\",".$booksp.",".$bookqp.",".$addtobooks.",\"".$bookimage."\")' ><h1>+</h1></div></div></div>";
    $counter=$counter+1;


}

?>