//browser events :

//mouse events -
//click
//dblclick
//mouseenter
//mouseleave
//mouseover
//mouseoutter
//mousemove

//keyboard events -
//keydown
//keyup
//keypress

//form events -
//submit
//focus
//blur

//window events -
//resize
//scroll
//load

//document events -
//DOMContentLoaded

// let a = document.getElementsByClassName("containerTwo")[0]
// a.onclick=()=>{
//     let b = document.getElementsByClassName("containerTwo")[0]
//     b.innerHTML="hello world"
// }


//>>>>>>>>>>>>>>>>>>>>**********handling events****************<<<<<<<<<<<<<<<<<<<<<<<<<<<

//1. addEventListener() 
// btn.addEventListener("click",()=>{
//     alert("hi everyone")
// })

// let a = document.getElementById("btn")
// a.addEventListener("click",()=>{
//     alert("hi")
// })

// //removeEventListner()
// let b = document.getElementById("btn")
// b.addEventListener("click",()=>{
//     alert("namste")
// })

// b.removeEventListener("click",()=>{
//     alert("hiiii(removed)")
// })


//<<<<<<<<<Event Object>>>>>>>>>>>>>>
//1. preventDefault()
//2. stopPropagation()


let x = function (e) {
    alert ("hi")
    // console.log(e);
    console.log(e.target);
}
btn.addEventListener('click',x)
