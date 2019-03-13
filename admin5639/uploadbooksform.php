<?php
?>

<!DOCTYPE html>
   <html lang="en">
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
     <div id="form_container">
            <form name = "uploadform" id="uploadform" enctype="multipart/form-data" method="post">
                <input type="text" name="title" placeholder="Title" class="inputs" id="title">
                <input type="text" name="author" placeholder="Author" class="inputs">

                <input type="number" name="sellingprice" value="" placeholder="Selling Price" class="inputs">
                <input type="text" name="quantitypurchased" value=""  class="inputs" placeholder="Quantity Purchased">
                <select type="text" name="category" class="inputs">
                    <option>Category</option>
                    <option>Personality development</option>
                    <option>Financial_Education</option>
                    <option>Christian_literature</option>
                    <option>Novels</option>
                    <option>Academic</option>
                    <option>Lecture_Materials</option>
                    <option>Relationship</option>
                    <option>Others</option>
                </select>
                <input type="file" name="file"  class="inputs"  id="imageofbook">
                 <textarea type="" name="summery" placeholder="Summery..." class="inputs" style="width:30%; height: 70%; border-radius: 10px; "></textarea>
            </form>
            <button type="submit" onclick="uploadBook()" id="button">Done</button>
        </div>
    </body>
    <script>
        var filevalue=0;
    </script>

    <?php include 'searchbooksform.php' ?>
</html>
<!--uploadBook()Done()-->