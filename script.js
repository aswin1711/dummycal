let outputScreen=document.getElementById("output-screen");
function display(num){
    outputScreen.value +=num;
}
function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        alert("invalid")
    }
}
function Clear(){
    outputScreen.value= " ";

}
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
function modulus(){
    outputScreen.value=outputScreen.value/100;
}