const todoBtn = document.querySelector('.todoBtn');
const todoBox = document.querySelector('.todo');
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');

let todos = [];
let isHide = false;

function showTodo() {
    isHide = !isHide;
    if(isHide) {
        todoBox.classList.add('on');
    }else {
        todoBox.classList.remove('on');
    }
}
todoBtn.addEventListener('click', showTodo);

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(e) {
    const delLi = e.target.parentElement;
    delLi.remove();
    todos = todos.filter((todoItem) => todoItem.id !== parseInt(delLi.id));
    saveTodo();
}
function isCheck(e) {
    const check = e.target.parentElement;
    const checkItem = check.querySelector('input[type="checkbox"]');
    if(checkItem.checked) {
        check.classList.add('on')
    }else {
        check.classList.remove('on')
    }
    
}
function paintTodo(todoItem) {
    const li = document.createElement('li');
    li.id = todoItem.id;
    const span = document.createElement('span');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('click', isCheck);
    span.innerText = todoItem.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: todo,
        id: Date.now(),
        isChecked: 0
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedToDos = localStorage.getItem('todos');
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

