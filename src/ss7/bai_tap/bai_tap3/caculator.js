function plus() {
    let number1= document.getElementById("numberone").value;
    let number2= document.getElementById("numbertwo").value;
    let result= Number(number1) + Number(number2);
    document.getElementById('result').innerHTML = result;
}
function minus() {
    let number1= document.getElementById("numberone").value;
    let number2= document.getElementById("numbertwo").value;
    let result= Number(number1) - Number(number2);
    document.getElementById('result').innerHTML = result;
}