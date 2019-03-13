/*
*/

 
var numberofbooks = 0;
var totalPrice = 0;   
var numofbooks = 0;
var chosenid = [];
var chosenprice =[];
var chosentitle = [];
var numbofcopies = [];
var chosenimage = [];
var styles = [];
styles[0]= "0px 0px 5px white";
var numberofclicks = 0;
var strange = 0;
var clickedbookid = "";
var listofbooks = "";


var currency = "&#x20B5";

function uploadfile(){
// Represents the first file selected
document.querySelector('#imageofbook').files[0];

// Represents the second file selected
//document.querySelector('imageofbook').files[1];

document.querySelector('#imageofbook').addEventListener('change', function() {
	// This is the file user has chosen
	var file = this.files[0];

	// In case of multiple files
	//var file2 = this.files[1];
	//var file3 = this.files[2];
});

document.querySelector('#imageofbook').addEventListener('change', function() {
	// This is the file user has chosen
	var file = this.files[0];

	// Allowed types
	//var mime_types = [ 'image/jpeg', 'image/png' ];
	
	// Validate MIME type
	/*if(mime_types.indexOf(file.type) == -1) {
		alert('Error : Incorrect file type');
		return;
	}
*/
	// Max 2 Mb allowed
	if(file.size > 2*1024*1024) {
		alert('Error : Exceeded size 2MB');
		return;
	}

	// Validation is successful
	// This is the name of the file
	//alert('You have chosen the file ' + file.name);
});

var data = new FormData();

var request = new XMLHttpRequest();

// File selected by the user
// In case of multiple files append each of them
data.append('file', document.querySelector('#imageofbook').files[0]);

// AJAX request finished
request.addEventListener('load', function(e) {
	//request.response will hold the response from the server
	//console.log(request.response);
});

request.onreadystatechange=function(e) {
	var percent_complete = (e.loaded / e.total)*100;
	
	// Percentage of upload completed
	//console.log(percent_complete);
}
// Upload progress on request.upload
//request.upload.addEventListener('progress', function(e) {
//	var percent_complete = (e.loaded / e.total)*100;
	
	// Percentage of upload completed
//	console.log(percent_complete);
//});

// If server is sending a JSON response then set JSON response type


// Send POST request to the server side script
request.open('post', 'upload.php'); 
request.send(data);

}




var username="",userhostel="",userroomnumber="",usercontact="",usertext="";

function setusername(nam){

    username = nam;

}

function setusertext(text){
    usertext = text;
}

function setuserhostel(host){
    userhostel = host;
}

function setuserroomnumber(roomnumb){
    userroomnumber = roomnumb;
}

function setusercontact(contact){
    usercontact = contact;
}





var name="";
var gender="";
var hostel="";
var roomnumber="";
var orderinfo = "";
function setname(nam){

    name = nam;

}

function setgender(contact){
    gender = contact;
}

function sethostel(host){
    hostel = host;
}

function setroomnumber(roomnumb){
    roomnumber = roomnumb;
}








//This function inserts new books in the database

var oldimage = "";
function uploadBook(callval){

    var title = uploadform.title.value;
    var author = uploadform.author.value;
    var summery = uploadform.summery.value;
    var category = uploadform.category.value;
    var sp = uploadform.sellingprice.value;
    var qp = uploadform.quantitypurchased.value;
    var image = uploadform.file.value;
      
    
    if(image!="" && image!=oldimage){
        
    var requestnow = new XMLHttpRequest();

    requestnow.onreadystatechange = function(){ //document.getElementById('displaybooks').innerHTML = requestnow.responseText;
        viewcontrolinfo("Category", "All",2 );
    }
    requestnow.open('GET', 'insertupdate.php?title='+escape(title)+'&author='+escape(author)+'&summery='+escape(summery)+'&category='+escape(category)+'&sp='+escape(sp)+'&qp='+escape(qp)+'&image='+escape(image)+'&callvalue='+escape(callval), true);
    requestnow.send();

         
    uploadfile();     
    }

    else{
        alert ("Please fill all spaces");
    }
   
    oldimage = image;
}




function bookschecked(bookid,booktitle,bookauthor,booksummery,bookcategory,bookprice,bookquantity, whattodo,bookimage){

    //alert("click received");

    //checking the value of whattodo 
    if (whattodo == 2){
        var existvalue = bookid;
        existvalue = false;
        //if user whatodo==2. loop through the array holding all the checkd books id and see if it has already been checked
        for ( i=0; i<chosenid.length; i++){
            var checkid = chosenid[i];

            if (checkid == bookid){//if it exist set value to true.
                existvalue = true;

            }
        }


        //if after checking the value is still false then go ahead and add it to the checked book ids

        if(existvalue == false){
            clickedbookid = bookid;
            var boxshadow= "0px 0px 20px #ED4C67";
            //number of clicks holds the number of books that have been entered in the checked ids arrays
            numberofclicks++;
            chosenid[numberofclicks-1] = bookid; 
            chosenprice[numberofclicks-1] = bookprice; 
            chosentitle[numberofclicks-1] = booktitle;
            numbofcopies[numberofclicks-1] = 1;
            chosenimage[numberofclicks-1]= bookimage;
            styles[numberofclicks] = boxshadow;
            //document.getElementById("button").innerHTML = chosenid.length;
            document.getElementById("totalprice_text").innerHTML=numbofcopies[i];

            document.getElementById("quantity_text").innerHTML=numberofclicks;
            //document.getElementById("totalprice_text").innerHTML=totalPrice;
            //document.getElementById("book_image"+bookid).style.backgroundColor = "yellow";   
            //document.getElementById("book_image"+bookid).innerHTML=currency+" "+bookprice;
            document.getElementById(bookid).style.border= "1px solid #DB6A1D";   
            document.getElementById(bookid).style.boxShadow = styles[numberofclicks];

            setlistofbooks();
            document.getElementById("book_list_text").innerHTML = listofbooks;
            listofbooks = "";
          
          
        }

        /*if the books is already part of the checked ids arrays, then remove it from it. meaning user wants to deselect it.*/
        else if(existvalue==true){ 
            //document.getElementById("booklist_text").innerHTML="false";
            
            for(j=0; j<=chosenid.length; j++){
                var replace = chosenid[j];
                if(replace == bookid){

                    chosenid.splice(j,1);
                    chosenprice.splice(j,1); //remove from position j 1 element from the array
                    chosentitle.splice(j,1);
                    numbofcopies.splice(j,1);
                    chosenimage.splice(j,1); 
                    styles.splice(j+1,1);
                    numberofclicks--;
                    document.getElementById("quantity_text").innerHTML=numberofclicks;
                    //document.getElementById("book_image"+bookid).style.backgroundColor = "red";
                    //document.getElementById("book_image"+bookid).innerHTML=bookprice;
                    document.getElementById(bookid).style.boxShadow = styles[0];

                    document.getElementById("totalprice_text").innerHTML = 0;
                    document.getElementById(bookid).style.border= "1px solid transparent ";   

                }  
            }
            setlistofbooks();
            document.getElementById("book_list_text").innerHTML = listofbooks;
            listofbooks = "";


        }
    }

    else if(whattodo == 1){


        var existvalue = false;
        var ccc=1;
        for ( i=0; i<chosenid.length; i++){
            var checkid = chosenid[i];
            if (checkid == bookid){
                existvalue = true;
            }
        }        
        if(existvalue == false){

        }
        else if(existvalue ==true){                      
            for ( i=0; i<chosenid.length; i++){
                var checkid = chosenid[i];
                if (checkid == bookid){
                    numbofcopies[i]++; document.getElementById("totalprice_text").innerHTML = numbofcopies[i];
                    setlistofbooks();
                    document.getElementById("book_list_text").innerHTML = listofbooks;
                    listofbooks = "";

                }
            }
        }

    }

    else if(whattodo == 0){

        var existvalue = false;
        var ccc=1;
        for ( i=0; i<chosenid.length; i++){
            var checkid = chosenid[i];
            if (checkid == bookid){
                existvalue = true;
            }
        }        
        if(existvalue == false){

        }
        else if(existvalue ==true){            
            for ( i=0; i<chosenid.length; i++){
                var checkid = chosenid[i];
                if (checkid == bookid){
                    if (numbofcopies[i]!=1){
                        numbofcopies[i]--; document.getElementById("totalprice_text").innerHTML =numbofcopies[i];
                        setlistofbooks();
                        document.getElementById("book_list_text").innerHTML = listofbooks;
                        listofbooks = "";
                    }
                }
            }
        }

    }





}

//close the confirm sheet
function closesheet() {

    document.getElementById("overlay").style.display = "none";
    document.getElementById("layer2").style.display = "none";

    document.getElementById("lists").style.height="100%"; document.getElementById("address_details").style.height="0%";
    document.getElementById("address_details").style.display="none";
    document.getElementById("thankyou").style.height="0%";
    document.getElementById("thankyou").style.display="none";
    document.getElementById("Submit").innerHTML = "Confirm";
    document.getElementById("Submit").style.visibility= "visible";
    document.getElementById("booklist").style.background="#13343F";
    TotalP = 0;
    Quantity=0
    confirmstate =0;
}

var confirmstate = 0;
function Okay(){

    if(confirmstate==0){
        document.getElementById("lists").style.height="0%"; 
        document.getElementById("address_details").style.height="100%";
        document.getElementById("address_details").style.display="flex";

        document.getElementById("submit_text").innerHTML = "Submit Order";
        confirmstate =1;
    }

    else if(confirmstate==1){
        if(name!=""&&hostel!=""&&roomnumber!=""){
            
            var counting = 0;
    for(i=0; i<chosenid.length; i++){ 
        //"+chosenimage[i]+"
        counting++;
        listofbooks += "("+counting+") "+chosentitle[i]+"   GHS"+chosenprice[i]+"   "+numbofcopies[i]+" Copy \n";

      
    } 


            var thanks = "Thank you for buying " +Quantity+ " books costing "+currency+" "+TotalP+", "+name+". We hope to see you again.";  
            document.getElementById("lists").style.height="0%"; 
            document.getElementById("address_details").style.height="0%";
            document.getElementById("address_details").style.display="none";
            document.getElementById("booklist").style.background=" #1C1D1F";
            document.getElementById("thankyou").style.height="100%";
            document.getElementById("thankyou").style.display="flex";
            document.getElementById("Submit").style.visibility= "hidden";
            document.getElementById("thanks_text").innerHTML=thanks;

            //alert("hello");
            confirmstate =0;
            orderinfo = listofbooks+" Total number of books: "+ Quantity+" Total price: "+TotalP;
            text="";
            email(name,gender,hostel,roomnumber,orderinfo,text);
           listofbooks = "";
        }
        else{
           
            alert("All fieds are required");


        }

    }
}


    function requestbook(){

        if(username!=""&&userhostel!=""&&userroomnumber!=""&&usercontact!=""){

          
      

       //alert("aaaaa");
       var requestform= document.getElementById("requestform");
       var layer3= document.getElementById("layer3");
       var requestsent = document.getElementById("requestsent");
       var senttext= document.getElementById("senttext");
       //layer3.className = layer3.className.replace(/\bunfold\b/g, "");
      //layer3.classList.add('fold');

      email(username,userhostel,userroomnumber,usercontact,usertext);
     // requestform.classList.add('unfold');
     showsentconfirma();
      // requestform.classList.add('fold2');
      // requestsent.classList.add('unfold2');
       //requestform.style.display="flex";
      // layer3.classList.add("vanish");
       //buyerdetails.classList.add('hiderequestform');
    }
    else{
       
        alert("All fieds are required");


    }

    }

function showform(){
    var layer3 = document.getElementById("layer3");
    layer3.classList.add('unfold');
    layer3.style.display="flex";
    layer3.className = layer3.className.replace(/\bfold\b/g, "");
}

function hiderequestform(){
    //alert("hahahah")
    var layer3 = document.getElementById("layer3");
    layer3.classList.add('fold');
    layer3.className = layer3.className.replace(/\bunfold\b/g, "");
    
}
function showsentconfirma(){
   
    var layer3= document.getElementById("layer3");
    layer3.style.height = "70%";
    var senttext = document.getElementById("senttext");
    var requestform= document.getElementById("requestform");
    var requestsent = document.getElementById("requestsent");
    requestform .classList.add('fold2');
   // requestsent .style.display="flex";
    //layer3.className = layer3.className.replace(/\bunfold\b/g, "");
    layer3.classList.add('vanish');
    requestsent .classList.add('unfold2');
    requestsent.style.display = "flex";
    //layer3.className = layer3.className.replace(/\bunfold\b/g, "");
    senttext.innerHTML="Thank you great "+username+" for your request, You will hear from us shortly";
    layer3.classList.add('vanish');
   setTimeout(autohide, 3000);

   function autohide(){
    var requestsent = document.getElementById("requestsent");
    var requestform= document.getElementById("requestform");
    var requestsent = document.getElementById("requestsent");
    var layer3= document.getElementById("layer3");
    layer3.className = layer3.className.replace(/\bunfold\b/g, "");
    layer3.className = layer3.className.replace(/\bfold\b/g, "");
    layer3.className = layer3.className.replace(/\bvanish\b/g, "");
    requestform.className = requestform.className.replace(/\bfold2\b/g, "");
    requestform.className = requestform.className.replace(/\bunfold2\b/g, "");
    requestsent.className = requestsent.className.replace(/\bunfold2\b/g, "");
    requestsent.className = requestsent.className.replace(/\bfold2\b/g, "");
    requestform.style.height="100%";
    layer3.style.height="0%";
    requestsent.style.height="0%";
    layer3.style.display="none";
    requestsent.style.display = "none";
    
   // clearInterval(showsentconfirma);
}
   
}




var TotP= 0;
var quant = 0

var TotalP = 0;
var Quantity = 0;
function Done(e){


    for(i=0; i<chosenid.length; i++){ 
        //"+chosenimage[i]+"
        listofbooks += "<div id =\"bookselected\" ><br><div id=\"btitle\" class=\"chosen\" >"+chosentitle[i]+"<\/div><div id=\"bprice\" class=\"chosen\" >  &#160 "+currency+" "+chosenprice[i]+" <\/div> <div id='bcopies' class=\"chosen\" >&#160  "+numbofcopies[i]+" Copy &#160 <\/div><div id='bimage' class=\"chosen\" ><img src="+escape(chosenimage[i])+"><\/div><br><\/div>";

        TotalP += chosenprice[i] * numbofcopies[i]; 
        Quantity +=numbofcopies[i];
    } 

    //document.getElementById("book_list_text").innerHTML = listofbooks;
    document.getElementById("numofbooks").innerHTML = Quantity;

    document.getElementById("lists").innerHTML = listofbooks;
    document.getElementById("price_text").innerHTML = currency+" "+TotalP;

    document.getElementById("overlay").style.display = "flex";
    document.getElementById("layer2").style.display = "flex";
    listofbooks = "";

    

}

var TotalP2 = 0;
var Quantity2 = 0;
function setlistofbooks(e){


    for(i=0; i<chosenid.length; i++){ 

        listofbooks += "<div id =\"bookselected2\" ><br><div id=\"btitle2\" class=\"chosen\" ><p>"+chosentitle[i]+"<\/p><\/div><div id=\"bprice2\" class=\"chosen\" ><p>  "+currency+" "+chosenprice[i]+" <\/p><\/div> <div id='bcopies2' class=\"chosen\" ><p>  "+numbofcopies[i]+" Copy  <\/p> <\/div><div id='bimage2' class=\"chosen\" ><\/div><br><\/div>";


        TotalP2 += chosenprice[i] * numbofcopies[i]; 
        Quantity2 +=numbofcopies[i];
    } 

}


function email(name,gender,hostel,roomnum,orderinfo,text){
    var emailxhr = new XMLHttpRequest();


    emailxhr.onreadystatechange = function(){
        //document.getElementById('price_text').innerHTML=emailxhr.responseText;
        console.log(emailxhr.responseText);
    }
    emailxhr.open('GET', 'email.php?name='+escape(name)+'&gender='+escape(gender)+'&hostel='+escape(hostel)+'&roomnumber='+escape(roomnum)+'&orderinfo='+escape(orderinfo)+'&text='+escape(text), true);
    emailxhr.send();

    
}



function moreinfo(bookimage){
    document.getElementById("a"+bookimage).style.height="97%";
}

function lessinfo(bookimage){
    document.getElementById("a"+bookimage).style.height="10%";
}



function assignstyle(){
    var b = 0;
    var chose="";
    for(g=0; g<chosenid.length; g++){
        chose = chosenid[g];
        //console.log(chose);
        //console.log(styles[g+1]);
        var element =  document.getElementById(chose);
        if(element!=null){
            element.style.boxShadow = styles[g+1];
            //console.log(element);
        }
        else{
            //console.log("missing"+element);
        }
        
        
    }
}

function searchcontrol(value1, value2, value3){

    var xhrparam =  new XMLHttpRequest();
    xhrparam.onreadystatechange= function(){    
       if(this.readyState==4){
        document.getElementById('displaybooks').innerHTML= xhrparam.responseText;
        //console.log(xhrparam.responseText)
        //Maintain color after search
        assignstyle();
       }
    }   
    xhrparam.open ('GET','Conductsearch.php?value1='+value1+'&value2='+value2+'&value3='+value3, true)
    xhrparam.send();
}

function viewcontrol(value1,value2, value3){
    
    var xhrparam =  new XMLHttpRequest();
    xhrparam.onreadystatechange = function(){
        if(this.readyState==4){
           
            document.getElementById('displaybooks').innerHTML= xhrparam.responseText;
            assignstyle()
        }
    }
    xhrparam.open ('GET','Conductsearch.php?value1='+value1+'&value2='+value2+'&value3='+value3, true)
    xhrparam.send();

}



function searchcontrolinfo (){
    var searchtext = document.getElementById("searchbox");
    var searchtype = document.getElementById("searchby");
    searchcontrol(searchtype.value, searchtext.value, 1);
}
function viewcontrolinfo (){
    var category = document.getElementById("categ");
    viewcontrol("Category",category.value,2);
}

function insertview(value1, value2, value3){

    var xhrparam =  new XMLHttpRequest();
    xhrparam.onreadystatechange= function(){    
       if(this.readyState==4){
        document.getElementById('displaybooks').innerHTML= xhrparam.responseText;
        //console.log(xhrparam.responseText)
        //Maintain color after search
        assignstyle();
       }
    }   
    xhrparam.open ('GET','Conductsearch.php?value1='+value1+'&value2='+value2+'&value3='+value3, true)
    xhrparam.send();
}

function dthese(){
    
    for(c=0; c<chosenid.length; c++){
        searchcontrol(chosenid[c],0,3); //When third param of this function = 3. it deleetes the book with id param 1
        console.log(chosenid[c]);
       
    }
   viewcontrolinfo("Category", "All",2 ); //When the value of viewocntrol is 2, and the param 2 is "Äll", All files are displayed
   
   for(j=0; j<=chosenid.length; j++){
    var replace = chosenid[j];
    if(replace == clickedbookid){

        chosenid.splice(j,1);
        chosenprice.splice(j,1); //remove from position j 1 element from the array
        chosentitle.splice(j,1);
        numbofcopies.splice(j,1);
        chosenimage.splice(j,1); 
        styles.splice(j+1,1);
        numberofclicks--;
        document.getElementById("quantity_text").innerHTML=numberofclicks;
        //document.getElementById("book_image"+bookid).style.backgroundColor = "red";
        //document.getElementById("book_image"+bookid).innerHTML=bookprice;
        document.getElementById(clickedbookid).style.boxShadow = styles[0];
        document.getElementById("totalprice_text").innerHTML = 0;
        document.getElementById(clickedbookid).style.border= "1px solid transparent ";   
        setlistofbooks();
        document.getElementById("book_list_text").innerHTML = listofbooks;
        listofbooks = "";
    }  
}}
//#EA2027