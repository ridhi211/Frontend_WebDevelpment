let calculator = parseInt( prompt("Enter first number:"))
let calculator1 = parseInt( prompt("Enter second number:"))
let symbol = prompt()

if(symbol == "+"){
    document.getElementById("myResult").innerHTML =  calculator + calculator1
}
else if(symbol == "-"){
    document.getElementById("myResult").innerHTML =  calculator - calculator1
}
else if(symbol == "*"){
    document.getElementById("myResult").innerHTML =  calculator * calculator1
}
else if(symbol == "/"){
    document.getElementById("myResult").innerHTML =  calculator / calculator1
}
else if(symbol == "%"){
    document.getElementById("myResult").innerHTML =  calculator % calculator1
}
else{
    document.getElementById("myResult").innerHTML =  "Enter a valid symbol:(eg: +, *, -, /, %)"
}



  

