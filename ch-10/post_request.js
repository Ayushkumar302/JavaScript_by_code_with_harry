//post request = means that we are sending data to the server

let options = {
  method: "POST",
  headers: { "content-type": "application/json"
},
  body: JSON.stringify({
    title: "ayush",
    body: "bye",
    userId: 11,
  })
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((json) => console.log(json));

// const createTodo = async () => {
//   let options = {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       title: "ayush",
//       body: "bye",
//       userId: 11,
//     }),
//   };
//   let p =  await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let response = await p.json()
//   return response;
// };

// const mainFunc  = async()=>{
//     let todo = await createTodo()
//     console.log(todo);
// }
// mainFunc()

// const createTodo = async (todo) => {
//   let options = {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(todo),
//   };
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let response = await p.json();
//   return response;
// };

// const getTodo = async (id) => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
//   let r = await response.json();
//   return r;
// };

// const mainFunc = async () => {
//   let todo = {
//     title: "ayush",
//     body: "bye",
//     userId: 11,
//   }
//   let todor = await createTodo(todo)
//   console.log(todor);
//   console.log(await getTodo(8));
// };
// mainFunc();
