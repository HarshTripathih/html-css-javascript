
function getPercentage(){
    if(document.getElementById('res').value==''){
    alert('Wrong Expression');
    return false;
    }
    let value1 = document.getElementById('res').value;
    value1 = eval(value1)/100;
    document.getElementById('res').value=value1;
    }
function clearRes(){
    document.getElementById('res').value='';
    }

    function solve(){
        /* global scope*/
        var value1 = document.getElementById('res').value;
        /*
        let will reduce the scope of a varibale as a block scope
        */
        let result = eval(value1);
        document.getElementById('res').value=result;
        }
        
        

function setValue(data){
    var value = document.getElementById('res').value;
    if(document.getElementById('res').value=='' && (data=='+' || data=='-' || data=='%'
    ||data=='*' ||data=='/' || data=='0' || data=='**')){
    alert('Press a number first');
    }
    else if(document.getElementById('res').value=='' && data=='.'){
    document.getElementById('res').value=0+data;
    }
    else{
    document.getElementById('res').value = value+data;
    }
    
    }