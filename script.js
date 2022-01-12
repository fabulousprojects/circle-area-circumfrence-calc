var checker = "area";
var radius;
var step1;
var formula;
var IYC;


function logic() {
    if (checker === "area"){
    radius = document.getElementById("input").value;
    step1 = 3.1415926535 * radius ** 2; 
    formula = "πR^2";
    IYC = `3.1415926535 * ${radius} ^ 2`
    }

   else  {
    radius = document.getElementById("input").value;
    step1 = 2*3.1415926535 * radius;
    formula = "2πR";
    IYC = ` 2 * 3.1415926535 * ${radius}`;
      }

    document.getElementById("result").innerHTML = `Your Answer Is ${step1}
    <br>
    Formula : ${formula}
    <br>
    In Your Case :${IYC}`;
}


function change() {
    checker = "perimeter";
    document.getElementById("tab2").style.background = "rgb(186, 186, 189)"
    document.getElementById("tab1").style.background = "rgb(225, 225, 228)"
    document.getElementById("result").innerHTML = " ";
    document.getElementById("input").innerHTML = "";
}

function changer2() {
    checker = "area";
    document.getElementById("tab2").style.background = "rgb(225, 225, 228)"
    document.getElementById("tab1").style.background = "rgb(186, 186, 189)"
    document.getElementById("result").innerHTML = " ";
    document.getElementById("input").innerHTML = "";
}