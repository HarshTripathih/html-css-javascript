function validateData(){      //for form 
    var fname = document.forms["form1"]["txtfname"].value;
    if(fname==""){
    alert('Enter the name');
    return false;
    }
    document.write(fname);
    }
    function clearText(){
        document.getElementById('num').value='';
        document.getElementById('num').style="color:red";
        }


        function setText(){
            document.getElementById('num').style="color:gainsboro";
            var data = document.getElementById('num').value;
            if(data==''){
            document.getElementById('num').value='enter a number';
            }
            }


            function checkNum(){   
                var num=parseInt(document.getElementById('num').value);
                if(num>1 && num<10){
                document.getElementById('para1').style.display='block';
                document.getElementById('para1').innerHTML = num;
                }
                else{
                alert('Enter a number between 1 and 10');
                }
                }