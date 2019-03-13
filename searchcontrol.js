

function assignstyle(){
    var b = 0;
    var chose="";
    for(g=0; g<chosenid.length; g++){
        chose = chosenid[g];
        console.log(chose);
        console.log(styles[g+1]);
        var element =  document.getElementById(chose);
        if(element!=null){
            element.style.boxShadow = styles[g+1];
            console.log(element);
        }
        else{
            console.log("missing"+element);
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


