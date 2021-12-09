function addition(){
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("answer").value=a+b
   console.log(a);
   console.log(b);
}
function subtraction(){
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("answer").value=a-b

}
function Multiplication(){
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("answer").value=a*b

}
function Division(){
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("answer").value=a/b

}
