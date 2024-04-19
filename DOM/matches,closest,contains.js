// matches , closest , contain methods 
// matches -  it is used to check if the element matches the selector or not 
// closest - it is used to find the closest parent element which matches the selector 
// contains - it is used to check if the element contains the selector or not 




// matches
let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".class"));// gives false because  id1 is not a class
console.log(id1.matches(".box"));

let sp = document.getElementById("sp");
console.log(sp.closest("#sp"));

console.log(id1.contains(sp));// gives false because id1 is not a parent of sp
console.log(sp.contains(sp));// gives true because sp is a parent of sp


