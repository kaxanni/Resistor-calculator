function check(){
    if(document.getElementById("four").checked)
        document.getElementById("sel5").disabled=true;
    if(document.getElementById("five").checked)
        document.getElementById("sel5").disabled=false;
}    


function change_color1(select) {
    document.getElementById("sel1").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color2(select) {
    document.getElementById("sel2").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color3(select) {
    document.getElementById("sel3").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color4(select) {
    document.getElementById("sel4").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color5(select) {
    document.getElementById("sel5").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color1(select) {
    document.getElementById("small_rectangle1").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color2(select) {
    document.getElementById("small_rectangle2").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color3(select) {
    document.getElementById("small_rectangle4").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color4(select) {
    document.getElementById("small_rectangle5").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color5(select) {
    document.getElementById("small_rectangle3").style.backgroundColor=select.options[select.selectedIndex].textContent;
}


function calculate(){
    var num,tol,mul;
    if(document.getElementById("four").checked)
        num=parseInt(document.getElementById("sel1").value.toString()+document.getElementById("sel2").value.toString());
    if(document.getElementById("five").checked)
        num=parseInt(document.getElementById("sel1").value.toString()+document.getElementById("sel2").value.toString()+document.getElementById("sel5").value.toString());
    
    if(document.getElementById("sel4").value=="10")
        tol=10;
    if(document.getElementById("sel4").value=="11")
        tol=5;
        
    var tempMul = parseInt(document.getElementById("sel3").value);
    if (tempMul == 10)
           mul = 0.1;
    else if (tempMul == 11)
           mul = 0.01;
    else       
           mul=Math.pow(10,tempMul);    
           
    //console.log(num*mul*(1+tol/100)); 
    document.getElementById("ans").innerHTML="Required resistance is <b>"+num*mul+" Ω = "+abbrNum(num*mul,2).toString()+" Ω</b>.<br>Tolerance may vary from "+Math.round(num*mul*(1-tol/100))+" Ω to "+Math.round(num*mul*(1+tol/100))+" Ω.";   
}


function abbrNum(number, decPlaces) {
    
    decPlaces = Math.pow(10,decPlaces);

    
    var abbrev = [ "K", "M", "B", "T" ];

    
    for (var i=abbrev.length-1; i>=0; i--) {

       
        var size = Math.pow(10,(i+1)*3);

 
        if(size <= number) {
           
            number = Math.round(number*decPlaces/size)/decPlaces;


            number += abbrev[i];

    
            break;
        }
    }

    return number;
}
function reset(){
    document.getElementById("four").checked=true;
    document.getElementById("five").checked=false;
    document.getElementById("sel1").value="--";
    document.getElementById("sel1").style.backgroundColor='white';
    document.getElementById("sel2").value="--";
    document.getElementById("sel2").style.backgroundColor='white';
    document.getElementById("sel3").value="--";
    document.getElementById("sel3").style.backgroundColor='white';
    document.getElementById("sel4").value="--";
    document.getElementById("sel4").style.backgroundColor='white';
    document.getElementById("sel5").value="--";
    document.getElementById("sel5").disabled="true";
    document.getElementById("sel5").style.backgroundColor='white';
    document.getElementById("ans").innerHTML="";    
}