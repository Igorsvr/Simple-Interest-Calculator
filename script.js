function compute()
{
   var p = document.getElementById("principal");
   var r = document.getElementById("rate");
   var y = document.getElementById("years");
   if(p.value<=0){
       alert("You must enter a positive value");
       p.focus();
       return false;
   }

var f = (parseFloat(p.value) * parseFloat(r.value) * parseInt(y.value))/100;
 // res =  (Amount * Rate * Years / 100);
y = 2021+parseInt(y.value);

document.getElementById("result").innerHTML=
"If you deposit "+"<mark>"+p.value+"</mark>"+"<br>"+"at an interest rate of "+"<mark>"+r.value+"%."+"</mark>"+"<br>"+"You will receive an amount of "+"<mark>"+f+"</mark>"+","+"<br>"+"in the year "+"<mark>"+y+"</mark>"+"."
}

function slider_reader(val){
document.getElementById('rate').value=val;
}
