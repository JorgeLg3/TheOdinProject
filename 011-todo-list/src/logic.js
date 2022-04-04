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
    const project1 = projectFactory('project1');
    project1.addTodo(todo1);
    project1.addTodo(todo2);
    console.log(project1.getTitle);
    const todolist = project1.getTodoList();
    console.log(todolist[1]);
    console.log(project1);

    return project1;
}

export default initialization;