function pal(str){
    return str === str.split("").reverse().join("")
        //"mam"
                    //["m","a","m"]     
                                //["m","a","m"] 
                                            //"mam"
}

const retval = pal("kajol") 

if(retval){
    console.log("This is a palindrome")

}
else{
    console.log("This is not a palindrome")

}

