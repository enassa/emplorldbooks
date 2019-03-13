<?php
?>

   <!DOCTYPE html>
   <html lang="en">
<!-- s -->
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>EmplorldBookService.com</title>
      
       <link rel="stylesheet" type="text/css" href="adminpuploadpage.css">
       <link rel="stylesheet" type="text/css" href="animations.css">
       <link rel="stylesheet" type="text/css" href="searchform.css">
      
       <script src="functions.js"></script>
   </head>

   <body> 
     <div id="searchform_container">
         <div id = "searcharea">
            <select onchange="searchcontrolinfo()" id="searchby" type="text" name="categ" value="All" class="searchinputs">
                    <option>Title</option>
                    <option>Author</option>
            </select>
            <input  oninput="searchcontrolinfo()" id="searchbox" type="Search" name="searchbox" value=""  class="searchinputs" placeholder="Search for a book"> 
        </div>
            
        <div id = "viewarea">
        <button class="orderanime" id="donebutton" onclick="Done()" >ORDER</button>
               
                <p id="viewbytext">View by Category</p> <select onchange="viewcontrolinfo()" id="categ" type="text" name="categ" class="searchinputs">
                    <option class="options">All</option>
                    <option>Personality development</option>
                    <option>Financial_Education</option>
                    <option>Christian_literature</option>
                    <option>Novels</option>
                    <option>Academic</option>
                    <option>Lecture_Materials</option>
                    <option>Relationship</option>
                    <option>Others</option>
                </select>
               
        </div>
        </div>
         <button onclick="showform()" id="notfound">Can't find your book? Click me!</button>
         <script> var filevalue=1;</script>
</div>