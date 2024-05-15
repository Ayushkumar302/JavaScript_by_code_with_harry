//fetch API 
/*
The Fetch API is a modern JavaScript interface for making network requests (e.g., HTTP requests) in the browser or Node.js environments.
- It uses promises to handle asynchronous operations, providing a cleaner alternative to traditional XMLHttpRequest (XHR) for fetching resources.
- The `fetch()` function takes a URL and optional configuration parameters, returning a promise that resolves to a `Response` object representing the HTTP response from the server.
*/


//syntax
let p = fetch("https://goweather.herokuapp.com/weather/Curitiba")
p.then((response)=>{
    // console.log(response.status); // gives  status code
    // console.log(response.ok);// gives true or false
    // console.log(response.headers); // gives headers
    return response.json()
}).then((data)=>{
    console.log(data)
    // let a = document.getElementById("weatherCast")
    // a.innerHTML=`<h1> ${data.temperature}</h1>`
}).catch((error)=>{
        console.log(error)
    }
)
