// "use strict"

// In an object method, this refers to the object
let name = {
    a: 5,
    b: 7,
    c: 8,
    d: function () {
        console.log( "halo" , this)
    },
    e: {
        f: {
            l : function (){ 
                console.log( "hbh", this )
            },
            k: {
                j: function () {
                    console.log( "hai", this )
                 }

            }
        }
    }
}

name.d()
name.e.f.k.j()
name.e.f.l()

//----------------------------------------

// Alone, this refers to the global object.
console.log( this )
//-------------------------


//In a function, this refers to the global object.
function color(){
    console.log( this )
}
color()
//---------------------


//In a function, in strict mode, this is undefined.
function color2(){
    console.log( this )
}
color2()
//---------------------------------

//In an event, this refers to the element that received the event.
document.getElementById("button1")
    .addEventListener("click", function (){
        console.log( "press" )
        console.log( this )
    })


// Methods like call(), apply(), and bind() can refer this to any object.
//will see this topic atlast



