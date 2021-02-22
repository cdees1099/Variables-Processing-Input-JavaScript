var containerEle = document.body.querySelector(".container");


var billAmt=Number(prompt("what is your bill ammount?"));
    
var num2=Number(1.07);

var num3=Number(1.05);

var sum=(billAmt*num2*num3);


containerEle.innerHTML= sum;