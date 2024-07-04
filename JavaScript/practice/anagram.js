const anagram = (str1, str2) => {
    if (str1.length !== str2.length){
       return false
    }

    const lowerStr1 = str1.toLowerCase()
    const lowerStr2 = str2.toLowerCase()

    if(lowerStr1 === lowerStr2){
        console.log("lowerStr1 === lowerStr2 is false" ) 

        return false
    }

    const sortStr1 = lowerStr1.split("").sort().join("")
                                        //["e","i","l","n","s","t"]
                                                //"eilnst"
    const sortStr2 = lowerStr2.split("").sort().join("")
                            //["s","i","l","e","n","t"] 
                                        //["e","i","l","n","s","t"]
                                                //"eilnst"
    return sortStr1 === sortStr2
            // "eilnst"==="eilnst"
}

document.getElementById("forms").addEventListener("submit", function (e){

    e.preventDefault()

    const getVal1 = document.getElementById("w1").value
    const getVal2 = document.getElementById("w2").value

    const retVal = anagram(getVal1, getVal2)

    if(retVal){
        console.log("this is anagram")
    }
    else{
        console.log("this is not an anagram")
    }
    
} )

// const strr1 = "Listen"
// const strr2 = "silent"

        //eil
    


