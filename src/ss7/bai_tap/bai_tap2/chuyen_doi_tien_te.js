
function changeMoney() {
    let sotien =document.getElementById("sotien").value;
    let fromC =document.getElementById("from").value;
    let toC = document.getElementById("to").value;
    let result
    if ( fromC == "USD" && toC == "VND" ) {
        result = + (sotien * 23000) + " Đ";
        document.write("Relust: " +result)
    }
    else if (fromC == "VND" && toC == "USD"){
        result = + (sotien / 23000) + " $";
        document.write("Result: " +result)
    }
     else if (fromC=="VND") {
        result = + (sotien) + " Đ";
        document.write("Relust: " +result)
     }
     else {
         result = + (sotien) + " $";
        document.write("Relust: " +result)
    }
}
