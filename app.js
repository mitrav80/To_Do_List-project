
const todoInput=document.querySelector('.todo-input');
const tooButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

tooButton.addEventListener('click',addtodo);
function addTodo(event){
    event.preventDedault();
}