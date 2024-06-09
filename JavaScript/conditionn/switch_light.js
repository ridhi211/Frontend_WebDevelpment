let trafficLight;

//------------------------

//create a function and put switch case inside it
//for the switch parameter, pass the value thru function argument/parameter
function name(a){
    switch(a){
        case 1:
            console.log("red")
            break;
    
        case 2:
            console.log("yellow")
            break;
    
        case 3:
            console.log("green")
            break;  //ends the code
    
        default:
            console.log("u may go")
            
    }
} 
name(3)
name(2)
name(1)

