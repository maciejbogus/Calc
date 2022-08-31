var i=0;
var i2=0;
var result=0;
var matChar;


function enterValue(buttonID){ 
    
    var displayElement = document.getElementById("display");
    var buttonValue = document.getElementById(buttonID).value;
    if(i2==0) displayElement.value="";
    if(displayElement.value=="0" && buttonValue!='.'){
        displayElement.value=null;
        displayElement.value+=buttonValue;
    }
    else if(displayElement.value.indexOf(".")!=-1 && buttonValue=="."){
    }
    else if(displayElement.value.length==9){
    }
    else if(displayElement.value=="" && buttonValue=="."){
        displayElement.value=0+buttonValue;
    }
    else{
        displayElement.value+=buttonValue;
    }
    i2++;
}

function clearDisplay(){
    document.getElementById("display").value="";
    document.getElementById("charField").value="";
    i=0;
    i2=0;
    result=0;
}

function operation(char){
    
    if(document.getElementById("display").value.length!=0){
        number=parseFloat(document.getElementById("display").value);
        if(i==0) result=number;
        else{
            if(matChar=="+") result=result+number;
            else if(matChar=="-") result=result-number;
            else if(matChar=="/") result=result/number;
            else if(matChar=="*") result=result*number;
            if(i!=0){
                document.getElementById("display").value=result;
            }
        }
        
        i2=0;
        i++;
        matChar=document.getElementById(char).value;
        document.getElementById("charField").value=matChar;
    }
}

function isEqual(){
    operation("mtp");
    i=0;
    i2=0;
    result=0;
    document.getElementById("charField").value="";
}