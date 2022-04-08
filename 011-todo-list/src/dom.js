import initialization from './models';
import todoFactory from './models';
import {createTodo, createProject, moveTodo} from './index.js';
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
        input.classList.add('project-input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'List Name');
        input.setAttribute('required', true);
        modal.appendChild(input);

        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('project-button');
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

    const _createTodoForm = (todoListContainer, projectName) => {
        const form = document.createElement('div');
        form.classList.add('todo-form');

        const todoInput = document.createElement('input');
        todoInput.classList.add('todo-input');
        todoInput.setAttribute('type', 'text');
        todoInput.setAttribute('placeholder', 'New todo ...');
        todoInput.setAttribute('required', true);
        form.appendChild(todoInput);

        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('material-icons','todo-form-button', 'confirm');
        confirmBtn.textContent = 'check_circle';
        confirmBtn.addEventListener('click', () =>{
            const title = todoInput.value;
            const newTodo = createTodo(title, projectName);
            displayTodo(todoListContainer, newTodo, projectName);

            const formParent = todoListContainer.parentNode.querySelector('.form-container');
            formParent.textContent = '';
            const addTodoBtn = todoListContainer.parentNode.querySelector('.add-todo-button');
            addTodoBtn.classList.add('show');
        });
        form.appendChild(confirmBtn);

        const denyBtn = document.createElement('button');
        denyBtn.classList.add('material-icons', 'todo-form-button', 'deny');
        denyBtn.textContent = 'cancel';
        denyBtn.addEventListener('click', () =>{
            const formParent = todoListContainer.parentNode.querySelector('.form-container');
            formParent.textContent = '';
            const addTodoBtn = todoListContainer.parentNode.querySelector('.add-todo-button');
            addTodoBtn.classList.add('show');
        });
        form.appendChild(denyBtn);

        return form;
    }
    
    const initialDisplay = () => {
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'TODO LIST';
        _header.appendChild(title);
        const icon = document.createElement('span');
        icon.classList.add('material-icons');
        icon.textContent = 'checklist';
        _header.appendChild(icon);
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

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        card.appendChild(formContainer);

        const checkedTodoList = document.createElement('div');
        checkedTodoList.classList.add('checked-todos-list');
        card.appendChild(checkedTodoList);
    
        const addTodoButton = document.createElement('button');
        addTodoButton.classList.add('material-icons','add-todo-button', 'show');
        addTodoButton.textContent = 'add';
        addTodoButton.addEventListener('click', () => {
            addTodoButton.classList.remove('show');
            formContainer.appendChild(_createTodoForm(todoList, project.getTitle()));
        });
        card.appendChild(addTodoButton);

        _container.appendChild(card);
        
        const todos = project.getTodoList();
        todos.forEach((todo) =>{
            displayTodo(todoList, todo, project.getTitle());
        });

        const checkedTodos = project.getCheckedList();
        console.log(checkedTodos);
        checkedTodos.forEach((todo) => {
            displayCheckedTodo(checkedTodoList, todo)
        });
    }

    const displayTodo =(todoListContainer, todo, projectName) => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo');
    
        const button = document.createElement('span');
        button.classList.add('material-icons', 'check-button');
        button.textContent = 'radio_button_unchecked';
        button.addEventListener('click', () => {
            //button.textContent = 'radio_button_checked';
            //todoContainer.classList.add('checked');
            moveTodo(todo.getTitle(), projectName);
            todoListContainer.removeChild(todoContainer);
            const checkedList = todoListContainer.parentNode.querySelector('.checked-todos-list');
            displayCheckedTodo(checkedList,todo);
        });
        todoContainer.appendChild(button);
    
        const name = document.createElement('div');
        name.classList.add('todo-name');
        name.textContent = todo.getTitle();
        todoContainer.appendChild(name);    
        
        todoListContainer.appendChild(todoContainer);
    }

    const displayCheckedTodo =(todoListContainer, todo) => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('checked-todo');
    
        const button = document.createElement('span');
        button.classList.add('material-icons', 'checked-button');
        button.textContent = 'radio_button_checked';
        todoContainer.appendChild(button);
    
        const name = document.createElement('div');
        name.classList.add('checked-todo-name');
        name.textContent = todo.getTitle();
        todoContainer.appendChild(name);    
        
        todoListContainer.appendChild(todoContainer);
    }

    return{
        initialDisplay,
        displayProject,
        displayTodo,
    }
})();

export default moduleUI;