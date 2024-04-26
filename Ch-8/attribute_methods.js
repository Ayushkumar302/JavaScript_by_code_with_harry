// attribute methods -  getAttribute, setAttribute, removeAttribute

// getattribute = it will return the value of the attribute
// setattribute = it will set the value of the attribute
// removeattribute = it will remove the attribute


let a = second.getAttribute("class")
console.log(a);
console.log(second.hasAttribute("class"));
console.log(second.hasAttribute("style"));

//  second.removeAttribute("class")

// ********data attributes********** 

// data attributes are used to store the data in the html element

// data-*

// data-name
// data-age
// data-gender

console.log(third.dataset);
console.log(third.dataset.game);
console.log(third.dataset.player);


