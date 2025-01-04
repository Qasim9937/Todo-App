const todoForm = document.querySelector('form');

const todoInput = document.getElementById('todo-input');

const addButton = document.getElementById('add-button');

const todoListUl = document.getElementById('todo-list');
const deleteButton = document.getElementById('delete-button');

let allTodos = [];





todoForm.addEventListener('submit', function(e){
  e.preventDefault();
  addTodo();
})

function addTodo(){

  const date = new Date();

  const todoText = todoInput.value.trim();
  if(todoText !== ''){
  allTodos.push(todoText);
  
  const newTodoItem = document.createElement('li');
  newTodoItem.classList.add('todo')

  newTodoItem.innerHTML =`
        <input type="checkbox" id="${todoText}">
        <label class="custom-checkbox" for="${todoText}">
          <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </label>

        <label class="todo-text" for="${todoText}">
          ${todoText}
        </label>

        <p>${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  </p>
        <p>${date.getHours()}:${date.getMinutes()}  </p>

        <button class="delete-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>`

      todoListUl.appendChild(newTodoItem);
  }
   
}

todoListUl.addEventListener('click', function (e){
  if(e.target.closest('.delete-button')){
    const todoItem = e.target.closest('li');
    todoListUl.removeChild(todoItem);
  }
})



