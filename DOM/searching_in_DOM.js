// searching in dom --->

// 1. getElementById() -  returns an element with a specified id attribute.
// 2. getElementsByClassName()- returns a collection of elements with a specified class name.
// 3. getElementsByTagName()-   returns a collection of elements with a specified tag name.
// 4. getElementsByName()-  returns a collection of elements with a specified name attribute.
// 5. querySelector()-  returns the first element that matches a specified CSS selector(s) in the document.
// 6. querySelectorAll()- returns a static (not live) collection of elements that matches a specified CSS selector(s) in the document.

let cTitle = document.getElementById("firstCardTitle") // returns a collection of elements with a specified class name.
cTitle.style.color="red"

console.log(document.getElementsByClassName("card-title"));

let cTitles = document.querySelectorAll(".card-title")//  returns a static (not live) collection of 
//elements that matches a specified CSS selector(s) in the document.
// console.log(cTitles);
cTitles[0].style.color="red"
cTitles[1].style.color="teal"
cTitles[2].style.color="blue"

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));