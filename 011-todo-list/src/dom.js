import initialization from './logic';

function initialDOM() {
    const header = document.createElement('header');
    header.textContent = 'Todo List';
    document.body.appendChild(header);

    const main = document.createElement('main');
    document.body.appendChild(main);

    const container = document.createElement('div');
    displayProject(initialization(), container);
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

    const todolist = project.getTodoList();
    todolist.forEach((todo) =>{
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo');

        const button = document.createElement('span');
        button.classList.add('material-icons');
        button.textContent = 'radio_button_unchecked';
        todoContainer.appendChild(button);

        const name = document.createElement('div');
        name.classList.add('todo-name');
        name.textContent = todo.getTitle();
        todoContainer.appendChild(name);

        card.appendChild(todoContainer);
    });

    container.appendChild(card);
}
export default initialDOM;