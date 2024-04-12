let b = document.body
console.log("first dild of b is",b.firstChild)
console.log("fisrt Element child of b is",b.firstElementChild);

const changeBgRed = ()=>{
    document.body.firstElementChild.style.background="red"
   
    document.body.firstElementChild.firstElementChild.style.background="yellow"
    document.body.firstElementChild.nextSibling.style.background="yellow"
    

}