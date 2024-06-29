const arr =["red", "blue", "green", "yellow", "violet", "grey"]
// console.log("green".indexOf("e"))
// console.log("yelllow".indexOf("o"))
// console.log("grey".indexOf("ey"))
// console.log("violet".indexOf("vio"))
// console.log("green".indexOf("p"))

// array methods
   // document.getElementById("search")
   //    .addEventListener("change", (event) => {
   //       console.log(
   //          "kajol".indexOf(event.target.value) 
   //       ) 
   //    } )

   document.getElementById("search")
      .addEventListener("change", (event) => {
        const filteredArr = arr.filter( (elm) => {
            return elm.indexOf(event.target.value) != -1
         })
         document.getElementById("output").innerHTML =  filteredArr

      })
