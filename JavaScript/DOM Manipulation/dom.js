const domElem = document.getElementById( "dom" )
// console.log(domElem)
//-------------------------------------

const domElemm = document.getElementsByClassName( "element" )
// console.log(domElemm[0])
// console.log(domElemm[1])
// console.log(domElemm[2])
// -----------------------------

const domElem3 = document.getElementsByTagName( "p" )
// console.log(domElem3) //HTMLCollection(5) [p.element, p.element, p.element, p, p]

// console.log(domElem3.length) //5
// console.log(domElem3[4]) // <p> how  uuu</p>
// console.log(domElem3.length-1) //4

// console.log(
//     domElem3[4]
// ) 
// console.log(
//     domElem3[ domElem3.length-1 ]
// )
//---------------------------------------

const qSelctr =document.querySelector( ".element" )
// console.log(qSelctr)
//------------------------------------

const qSelctrA =document.querySelectorAll( "#dom" )
// console.log(qSelctrA)
//-------------------------------------

// Managing nodes
const inElem = document.getElementById( "dom" ).innerHTML
// console.log(inElem)

const inElem2 = document.getElementsByTagName("body")[0].innerHTML

// console.log(document.getElementsByTagName("body")) 
// console.log(document.getElementsByTagName("body")[0])
// console.log( document.getElementsByTagName("body")[0].innerHTML )
//-----------------------

const crEle = document.createElement( "p" )
// console.log(crEle)
//--------------------------

const appEle = document.getElementById("foo").append( crEle )
console.log(appEle)

