notes for chapter 10
**fetch API** 
The Fetch API is a modern JavaScript interface for making network requests (e.g., HTTP requests) in the browser or Node.js environments.
- It uses promises to handle asynchronous operations, providing a cleaner alternative to traditional XMLHttpRequest (XHR) for fetching resources.
- The fetch() function takes a URL and optional configuration parameters, returning a promise that resolves to a `Response` object representing the HTTP response from the server.





**AJAX (Asynchronous JavaScript and XML):**

AJAX is a technique used in web development to send and retrieve data asynchronously from a web server without requiring a full page reload. 
It allows web pages to update content dynamically without interrupting the user's experience. AJAX typically involves using JavaScript to make 
HTTP requests to a server, process the server's response, and update the webpage accordingly.

**Key components of AJAX include:**

**XMLHttpRequest (XHR):** The core object used for making asynchronous HTTP requests in JavaScript. XHR is the traditional method of implementing AJAX.
**Fetch API**: A modern alternative to XHR for making HTTP requests, introduced in newer web browsers and JavaScript environments.
**Promises:** Used with Fetch API to handle asynchronous operations more cleanly and efficiently.
JSON (JavaScript Object Notation):

**JSON** is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. 
It is based on key-value pairs and data structures 
familiar to programmers, making it a popular choice for transmitting data between a client and a server in web applications.

**JSON syntax consists of:**

**Objects:** Enclosed in curly braces {}, representing an unordered collection of key-value pairs. Keys are strings, 
and values can be any valid JSON data type (e.g., string, number, boolean, array, object, null).
Arrays: Ordered lists of values enclosed in square brackets []. Array elements can be of any valid JSON data type.
Data Types: JSON supports primitive data types such as strings, numbers, booleans, null, as well as nested objects and arrays.
 */



**In web development, HTTP requests can be categorized into different types based on the HTTP method used. Here's an explanation of common HTTP methods and how they are used:**

1. **GET Request:**
Purpose: Retrieve data from a specified resource.
Usage: Used for fetching data like web pages, JSON data, images, etc., from a server.**
2. **POST Request:**
Purpose: Send data to a server to create/update a resource.
Usage: Commonly used for submitting form data, uploading files, or sending JSON data to an API endpoint
3. **PUT Request:**
Purpose: Update data on a server for a specific resource.
Usage: Used to update existing data by sending a complete representation of the resource.
4**DELETE Request:**
Purpose: Delete a resource on the server.
Usage: Used to delete data or resources identified by a specific URL.
**Additional Notes:**
Headers: You can specify custom headers (like 'Content-Type') in the headers object of the request options.
Body: The body property of the request options is used to send data (e.g., JSON data) in the request payload.
Handling Responses: Use .then() to handle successful responses and .catch() to handle errors or network issues.