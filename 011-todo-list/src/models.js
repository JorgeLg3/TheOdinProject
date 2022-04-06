const todoFactory = (title, description , dueDate, priority) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDate = () => dueDate;
    const getPriority = () => priority;
    const _todoDone = false;
    const getState = () => _todoDone;
    const setDone = () => _todoDone = false;
    return {getTitle, getDescription, getDate, getPriority, getState, setDone, title, description};
}

const projectFactory = (title) => {
    const getTitle = () => title;

    let _todoList = [];
    const addTodo = todo => _todoList.push(todo);
    const getTodoList = () => _todoList;

    return {
        getTitle,
        addTodo,
        getTodoList,
        _todoList
    };
}

function initialization(){
    const todo1 = todoFactory('todo1');
    const todo2 = todoFactory('todo2', 'todo2 description', 'tomorrow', 1);
    const todo3 = todoFactory('todo3', 'todo3 description', 'tomorrow', 1);
    const project1 = projectFactory('project1');
    project1.addTodo(todo1);
    project1.addTodo(todo2);
    project1.addTodo(todo3);
    /*console.log(project1.getTitle);
    const todolist = project1.getTodoList();
    console.log(todolist[1]);
    console.log(project1);*/
    console.log('initialization');

    return project1;
}

export {
    initialization,
    todoFactory,
    projectFactory
};