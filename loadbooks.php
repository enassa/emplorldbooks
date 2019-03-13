<?php
?>

<script >
         
        
        
    function load(){ 
        requestnow = new XMLHttpRequest();
        requestnow.onreadystatechange = function(){       
            document.getElementById('displaybooks').innerHTML = requestnow.responseText;
    }
        requestnow.open('GET', 'showbooks.php?', true);
        requestnow.send();
            
                   }
        load();
        
                  
    </script>