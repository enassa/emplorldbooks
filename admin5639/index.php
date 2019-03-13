<?php
include 'uploadbooksform.php';
?>

<!-- i -->
<link rel="stylesheet" type="text/css" href="mediaqueries.css">
<link rel="stylesheet" type="text/css" href="animations.css">
    <div id="main_container"> 
            <div id="content_main">
                <div class="animate" id="left_side">
                    <div id="price_main">
                        <div id="price_tag"><p id="price_tag_text">Copies</p></div>
                        <div id="price"><p id="totalprice_text"></p></div>
                    </div>
                    <div id="quantity_main">
                        <div id="quantity_tag" ><p id="price_tag_text">Number of books</p>
                        </div>
                        <div id="quantity"><p id="quantity_text"></p></div>
                    </div>
                    <div id="book_list">
                        <div id="book_tag"><p id="book_tag_text">Selected Books</p></div>
                        <div id="book_list_text"></div>
                    </div>
                </div>
                <div class="loadbooks" id="displaybooks"></div>
                <div id="right_side" ></div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="layer2">
            <div id="topoflayer2"><button onclick="closesheet()" id="close">X</button></div>
            <div id="confirm">
                <div id="booklist">
                    <div id="thankyou"><h1 id="thanks_text"></h1></div>
                    <div id="address_details">
                        <form name="buyerdetails" id="buyerdetails">
                            <input  onblur="setname(this.value)" name="name" class="textbox" placeholder="Name" type="text" required />                           
                            <input onblur="sethostel(this.value)"  name="Hostel" class="textbox" placeholder="Hostel" type="text" />
                            <input onblur="setroomnumber(this.value)" name="roomnumber" class="textbox" placeholder="Room Number" type="text" />
                            <input onblur="setgender(this.value)" name="gender" class="textbox" placeholder="Contact" >
                        </form>

                    </div>

                    <div id="lists">
                        <ul>
                            <li></li>
                        </ul>
                    </div>

                </div>
                <div id="expenses">
                    <div id="totalpriceforselected" ><div class="top">Total Price</div><div class="down" id="price_text"></div></div>

                    <div id="totalnumberselected"><div class="top"> Total Number</div><div class="down" id="numofbooks"></div></div>
                </div>
            </div>
            <div id="Submit" onclick="Okay()"><p id="submit_text">Confirm</p></div>
        </div>
        <div id="layer3" >
            <div class="senttext" id="requestsent"><h1  id="senttext"></h1></div>
             <form name="buyerdetails" id="requestform" class="requestbook">
                            <input  onblur="setusername(this.value)" name="name" class="textbox2" placeholder="Name" type="text" required />                           
                            <input onblur="setuserhostel(this.value)"  name="Hostel" class="textbox2" placeholder="Hostel" type="text" />
                            <input onblur="setuserroomnumber(this.value)" name="roomnumber" class="textbox2" placeholder="Room Number" type="text" />
                            <input type="text" onblur="setusertext(this.value)" name="gender" class="textbox2" placeholder="Bookname 1, Bookname 2, ..." >
                            <input onblur="setusercontact(this.value)" name="gender" class="textbox2" placeholder="Contact" >
                            <div id="request" onclick="requestbook()"  class="textbox2" ><p>Request</p></div>
                            <div id="exit" onclick="hiderequestform(this.value)" name="exit" class="textbox2" ><p>X</p></button>

            </form>
        </div>

    </body>
    <script>
    if (filevalue == 0){
        //insertview(0,"All",2);
       
    }
    else{
        searchcontrolinfo();
    }
    </script>
    
    

</html>