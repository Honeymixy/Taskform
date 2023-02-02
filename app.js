const form = document.querySelector("#newTaskForm");
const input = document.querySelector("#newTaskInput");
const listElement = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(input.value);
  const task = input.value;
  if (!task.length) {
    alert("input field cannot be empty");
  }else{
  // creating div's and input fields
  // creating div's with class of task
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  // creating div with class of content
  const taskContentElement =document.createElement('div')
//   let taskContentElement = document.createElement("div");
  taskContentElement.classList.add("content");
  // creating an input  field with a class of text

  const taskInputElement = document.createElement("input");
  taskInputElement.classList.add("text");
  taskInputElement.type = "text";
  taskInputElement.value = task;
  taskInputElement.setAttribute("readonly", "readonly");
  // lets append input to d div of content using appendchild() method

  taskContentElement.appendChild(taskInputElement);

  //create a div of action
  const taskActionElement = document.createElement("div");
  taskActionElement.classList.add("action");
  // create a button  with a class of edit
  const taskEditElement = document.createElement("button");
  taskEditElement.classList.add("edit");
  taskEditElement.innerText = "Edit";
  // create a button with a class of delete
  const taskDeleteElement = document.createElement("button");
  taskDeleteElement.classList.add("delete");
  taskDeleteElement.innerText = "Delete";

  //lets append edit and delete btn to d div of action using appendchid() method
  taskActionElement.appendChild(taskEditElement);
  taskActionElement.appendChild(taskDeleteElement);

  //
  taskElement.appendChild(taskContentElement);
  taskElement.appendChild(taskActionElement);
  listElement.appendChild(taskElement);
  input.value=''

  taskEditElement.addEventListener('click', ()=>{
    if(taskEditElement.innerText === 'Edit'){
      taskInputElement.removeAttribute('readonly')
      taskEditElement.innerText = 'save'
    }else{
      taskInputElement.setAttribute('readonly','readonly')
      taskEditElement.innerText='Edit'
    }
  })
  taskDeleteElement.addEventListener('click',function(){
    listElement.removeChild(taskElement)
  })
}
  
});
 