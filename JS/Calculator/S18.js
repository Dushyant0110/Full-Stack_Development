import math from "./Math.js";

let display = document.getElementById("display");

function calculate(){
    try{
        let exp = display.value;
        let match = exp.match(/^(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)$/);

        if(!match) return;

        let a = Number(match[1]);
        let op = match[2];
        let b = Number(match[3]);

        let result;

        if(op==="+") result=math.add(a,b);
        if(op==="-") result=math.sub(a,b);
        if(op==="*") result=math.mul(a,b);
        if(op==="/") result=math.div(a,b);

        display.value=result;
    }
    catch{
        display.value="Error";
    }
}

document.querySelector(".buttons").addEventListener("click",function(e){
    if(!e.target.matches("button")) return;

    let val=e.target.dataset.value;

    if(val==="AC") display.value="";
    else if(val==="DEL") display.value=display.value.slice(0,-1);
    else if(val==="=") calculate();
    else display.value+=val;
});