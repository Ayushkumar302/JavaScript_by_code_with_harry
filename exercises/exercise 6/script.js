addbtn.addEventListener("click", (e) => {
    let myTask = taskInput.value;
    localStorage.setItem("todo", JSON.stringify([myTask]));
  
    e.preventDefault();
    // console.log(e);
    // taskList.innerHTML= `<li>${myTask}</li>`
    if (taskInput.value === "") {
      alert("write something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = myTask;
      taskList.appendChild(li);
      // delete btn
      // let deletebtn = document.createElement("button");
      // deletebtn.innerHTML = "delete";
      // li.appendChild(deletebtn);
      let span = document.createElement("span")
      span.innerHTML="\u00d7"
      li.appendChild(span)
      span.addEventListener("click", () => {
        li.remove()
      });
  
    }
      taskInput.value = "";
  });
  
  // deletebtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  // //   localStorage.removeItem("todo");
  // //   taskList.innerHTML = "";
  // });
  