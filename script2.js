function alertClick(callback){
   alert('This submit button has been clicked');
   var len=document.getElementsByTagName("input").length;
  //  console.log(len);
    inputvalues=document.getElementsByTagName("input");
    var message=[];
    
    for(var i=0;i<len-1;i++)
    {
        key=inputvalues[i].id;
        val= inputvalues[i].value;
        if(inputvalues[i].type=="text"){
        output = key + " ; "+ val +" " ;
        message.push(output);
        
        }
    }
    callback(message);
    
}

function displayConsole(message){
    
    if(message){
        for(i=0;i<message.length;i++)
        {
            console.log(message[i]);
        }
    
    window.alert("you have displayed to console ");
    }

    else{
        window.alert("couldnt display the message");
    }
}

//INVOKING CALL
function alertAndDisplay(){
    alertClick(displayConsole);
}