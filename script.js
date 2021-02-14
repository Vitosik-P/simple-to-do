let onLoad = () => {
  const body      = document.querySelector("body");
  const inputText = document.getElementById("input-text");
  const inputAdd  = document.getElementById("input-btn");
  const inputSave = document.querySelector("#input-btn-save");

  function createToDo(text) {

    const todo = document.createElement("div");
    todo.classList.add("todo");
    const todoText = document.createElement("span");
    todoText.classList.add("todo__text");
    const todoClose = document.createElement("div");
    todoClose.classList.add("todo__close");
    const todoCloseSpan1 = document.createElement("span");
    const todoCloseSpan2 = document.createElement("span");
    const delBtn = document.querySelector(".todo__close");

    const todoTextVal = inputText.value;
    if (text != ""){
      todoTextVal = text;
    }
    todoText.append(todoTextVal);
    
    try{
      deleteToDo(todoClose) ? deleteToDo(todoClose) : deleteToDo(delBtn);
      throw 'not removed all items(all ok)';
    }
    catch(e){
      console.log(e);
    }
    if (inputText.value == ""){
      return;
    }

    body.appendChild(todo);
    todo.appendChild(todoText);
    todo.appendChild(todoClose);
    todoClose.append(todoCloseSpan1, todoCloseSpan2);
    

  }

  inputAdd.addEventListener('click', () => {
    createToDo("");
    inputText.value = "";
  });

  function loadTodos() {
    const data     = localStorage.getItem("todo__text");
    const todoLoad = document.querySelector(".todo");
    if (data) {
      todoLoad.innerHTML = data;

      const todoClose = document.createElement("div");
      todoClose.classList.add("todo__close");
      const todoCloseSpan1 = document.createElement("span");
      const todoCloseSpan2 = document.createElement("span");

      body.appendChild(todoLoad);
      todoLoad.appendChild(todoClose);
      todoClose.append(todoCloseSpan1, todoCloseSpan2);

    }
    console.log("af")
  }

  loadTodos();

  inputSave.addEventListener("click", () => {
    const saveData = document.querySelector(".todo__text");
    localStorage.setItem("todo__text", saveData.innerHTML);
  });

  function deleteToDo(element) {

    element.addEventListener('click', (event) => {
      element.parentElement.remove();
      event.stopPropagation();
    });
  }
  createToDo("");
  
}
document.addEventListener("DOMContentLoaded", onLoad);

