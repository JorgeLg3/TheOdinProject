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
    let _checkedList = [];
    const addTodo = todo => _todoList.push(todo);
    const addCheckTodo = todo => _checkedList.push(todo);
    const getTodoList = () => _todoList;
    const getCheckedList = () => _checkedList;
    const checkTodo = todoName => {
        const index = _todoList.findIndex(x => x.getTitle() == todoName);
        const checkedTodo = _todoList[index];
        _todoList.splice(index, 1);
        _checkedList.push(checkedTodo);
        console.log(_todoList);
        console.log(_checkedList);
    };

    return {
        getTitle,
        addTodo,
        addCheckTodo,
        getTodoList,
        getCheckedList,
        checkTodo,
        _todoList,
        _checkedList
    };
}

function defaultProject(){
    const todo1 = todoFactory('This is an important task');
    const todo2 = todoFactory('Another important task', 'todo2 description', 'tomorrow', 1);
    const todo3 = todoFactory('Less important task', 'todo3 description', 'tomorrow', 1);
    const todo4 = todoFactory('Task already done');
    const project1 = projectFactory('Default Todo List');
    project1.addTodo(todo1);
    project1.addTodo(todo2);
    project1.addTodo(todo3);
    project1.addTodo(todo4);
    project1.checkTodo('Task already done');
    //console.log(project1);

    return project1;
}

export {
    defaultProject,
    todoFactory,
    projectFactory
};