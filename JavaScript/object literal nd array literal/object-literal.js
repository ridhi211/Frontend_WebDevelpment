// object literal
let bdayTreat = { name:"kajol", bday:"Nov 2", place:"chennai", favColors:["violet", "blue", "black"] }
console.log(bdayTreat.name)
console.log(bdayTreat.bday)
console.log(bdayTreat.place)

//---------------------------

// array literal
let bdayTreat2 = [ "kajol", "nov 2", "chennai" ]
console.log(bdayTreat2.length)
console.log(bdayTreat2[0])
console.log(bdayTreat2[1])
console.log(bdayTreat2[2])
// console.log(bdayTreat2[3]) //undefined

//------------------------------------

//we can store multiple values in object and literals
//array value is accessed by index num (starts from 0)
//object value is accessed by property name (object_name.property_name )
//it can contain any type of data
let color=["red", "blue", 34, null, undefined, true,[1,2] ,{name:"kajol"} ] 

// real-time example
const bdayTreat3 = [
    {
        name: "ridhi",
        dob: "02-11-2003",
        place:"nanganallur"
    },
    {
        name: "rinku",
        dob: "07-02-1999",
        place:"tharamani"
    },
    {
        name: "jay",
        dob: "31-07-1996",
        place:"velachery"
        
    },
    {
        name: "karthi",
        dob: "5-5-1992",
        place:"meenambakkam"
    }
]
console.log(bdayTreat3[0].name)
console.log(bdayTreat3[2].dob)
console.log(bdayTreat3.length)


for(let i=0; i<bdayTreat3.length; i++){
    console.log(bdayTreat3[i].place)
}
