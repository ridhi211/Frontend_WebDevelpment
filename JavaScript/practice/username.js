const users = [
    {
        id:1,
        name: "harry",
        isActive: true

    },
    {
        id:2,
        name: "styles",
        isActive: true
    },
    {
        id:3,
        name: "mike",
        isActive: false
    }
]

function a(name, users){
    const user = users.find((user) =>
        user.name === name
        //harry === mike 
        //styles === mike
        // mike === mike - 3rd loop
    )
    console.log(user)
    return Boolean(user)

}
const namee = "mike"

const finalUsers = a(namee,users)

if(finalUsers){
    console.log(namee, "this username exists" )
}
else{
    console.log(namee, "this username does not exists")
}
