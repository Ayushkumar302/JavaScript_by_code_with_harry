//DOM - The Document Object Model (DOM) is a programming interface for web documents.
// It represents the structure of HTML and XML documents as a tree-like model, enabling developers to manipulate
// the content, structure, and style of web pages dynamically using languages like JavaScript.

// BOM - The Browser Object Model (BOM) is a JavaScript interface that represents the browser window and
// its components like history, location, navigator, screen, and window objects.

/* The Window object is a global JavaScript object representing the browser window. 
It provides properties and methods for interacting with the browser window, including navigation, 
manipulation of the document, and handling events.*/

// 1. getElementById() -  returns an element with a specified id attribute.
// 2. getElementsByClassName()- returns a collection of elements with a specified class name.
// 3. getElementsByTagName()-   returns a collection of elements with a specified tag name.
// 4. getElementsByName()-  returns a collection of elements with a specified name attribute.
// 5. querySelector()-  returns the first element that matches a specified CSS selector(s) in the document.
// 6. querySelectorAll()- returns a static (not live) collection of elements that matches a specified CSS selector(s) in the document.


console.log(window);
console.log(document);
console.log(document.body);
// document.body.style.background="teal"
console.log(document.body.firstChild)
console.log(document.body.lastChild);
console.log(document.body.childNodes);