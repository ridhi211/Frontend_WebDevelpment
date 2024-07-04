// function findVowels(str){
    // vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
//     let count = 0
//     for(let char of str.toLowerCase()){
//         if (vowels.includes(char)){
//             count++
//         } 
//     }
//     return count
// }

function findVowelss(string){
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    let count = 0

    for(let i = 0; i < string.length; i++){

        if(vowels.indexOf(string[i]) !== -1){
                       // string[34] - 35th loop
                       // "s"
            // -1 
                    
            count += 1 
            // count = count+1
            //count  =11+1
            //count  = 12
        }
    }

    return count //12
}

let stringg = "ridhi is a good girl"

const newCount = findVowelss(stringg)
                            //a- 2, e- 5, i- 1, o- 3,u- 1

console.log( stringg, " - has", newCount, "vowels" )

