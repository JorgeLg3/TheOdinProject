import initialization from './models';
import todoFactory from './models';
import {createTodo, createProject} from './index.js';
/*
function initialDOM() {
    const header = document.createElement('header');
    header.textContent = 'Todo List';
    document.body.appendChild(header);

    const main = document.createElement('main');
    document.body.appendChild(main);

    const container = document.createElement('div');
    displayProject(initialization(), container);
    container.classList.add('container');
    main.appendChild(container);

    const footer = document.createElement('footer');
    footer.textContent = 'By JorgeLg3 - code here!'
    document.body.appendChild(footer);
}

function displayProject(project, container){
    const card = document.createElement('div');
    card.classList.add('card');
    
    const title = document.createElement('h2');
    title.classList.add('project-title');
    title.textContent = project.getTitle();
    card.appendChild(title);

    const todoList = document.createElement('div');
    todoList.classList.add('todos-list');

    const todos = project.getTodoList();
    todos.forEach((todo) =>{
        todoList.appendChild(domTodo(todo));
    });
    card.appendChild(todoList);

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('material-icons','add-todo-button');
    addTodoButton.textContent = 'add';
    addTodoButton.addEventListener('click', createTodo);
    card.appendChild(addTodoButton);

    container.appendChild(card);
}


function domTodo(todo){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');

    const button = document.createElement('span');
    button.classList.add('material-icons', 'todo-button');
    button.textContent = 'radio_button_unchecked';
    todoContainer.appendChild(button);

    const name = document.createElement('div');
    name.classList.add('todo-name');
    name.textContent = todo.getTitle();
    todoContainer.appendChild(name);

    return todoContainer;
}

function createTodo(e){
    const newTodo = todoFactory('todo5', 'todo5 description', 'tomorrow', 1);
    const todoListContainer = document.querySelector('.todos-list')
    todoListContainer.appendChild(domTodo(newTodo));
}

export default initialDOM;
*/

const moduleUI = (() =>{

    const _header = document.createElement('header');
    const _main = document.createElement('main');
    const _container = document.createElement('div');
    _container.classList.add('container');
    const _footer = document.createElement('footer');
    const _modalContainer = document.createElement('div');
    _modalContainer.classList.add('modal-container');

    const _createModal = () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalTitle = document.createElement('h2');
        modalTitle.classList.add('modal-text');
        modalTitle.textContent = 'New Todo List';
        modal.appendChild(modalTitle);

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-modal', 'material-icons');
        closeBtn.textContent = 'close';
        closeBtn.addEventListener('click', () => _modalContainer.classList.remove('show'));
        modal.appendChild(closeBtn);

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'List Name');
        input.setAttribute('required', true);
        modal.appendChild(input);

        const confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Create';
        confirmBtn.addEventListener('click', () =>{
            const title = input.value;
            const newProject = createProject(title);
            displayProject(newProject);
            _modalContainer.classList.remove('show');
        });
        modal.appendChild(confirmBtn);

        return modal;
    }
    
    const initialDisplay = () => {
        _header.textContent = 'Todo List';
        document.body.appendChild(_header);
        document.body.appendChild(_main);
        _main.appendChild(_container);
        _footer.textContent = 'By JorgeLg3 - code here!';
        document.body.appendChild(_footer);
        _modalContainer.appendChild(_createModal());
        document.body.appendChild(_modalContainer);

        const addProjectButton = document.createElement('button');
        addProjectButton.classList.add('material-icons','add-project-button');
        addProjectButton.textContent = 'post_add';
        addProjectButton.addEventListener('click', () => {
            //const newProject = createProject('new project');
            //displayProject(newProject);
            _modalContainer.classList.add('show');
        })
        _main.appendChild(addProjectButton);
    }

    const displayProject = (project) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const title = document.createElement('h2');
        title.classList.add('project-title');
        title.textContent = project.getTitle();
        card.appendChild(title);
    
        const todoList = document.createElement('div');
        todoList.classList.add('todos-list');
        card.appendChild(todoList);
    
        const addTodoButton = document.createElement('button');
        addTodoButton.classList.add('material-icons','add-todo-button');
        addTodoButton.textContent = 'add';
        addTodoButton.addEventListener('click', () => {
            const newTodo = createTodo('new todo', project.getTitle());
            displayTodo(todoList, newTodo);
        });
        card.appendChild(addTodoButton);

        _container.appendChild(card);

        const todos = project.getTodoList();
        todos.forEach((todo) =>{
            displayTodo(todoList, todo);
        });
    }

    const displayTodo =(todoListContainer, todo) => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo');
    
        const button = document.createElement('span');
        button.classList.add('material-icons', 'check-button');
        button.textContent = 'radio_button_unchecked';
        todoContainer.appendChild(button);
    
        const name = document.createElement('div');
        name.classList.add('todo-name');
        name.textContent = todo.getTitle();
        todoContainer.appendChild(name);
    
        //const todoListContainer = document.querySelector('.todos-list');
        todoListContainer.appendChild(todoContainer);
    }

    return{
        initialDisplay,
        displayProject,
        displayTodo,
    }
})();

export default moduleUI;