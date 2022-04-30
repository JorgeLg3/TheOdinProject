import './style.css';
import {defaultProject, todoFactory, projectFactory} from './models';
import moduleUI from './dom.js';

//Add google icons to index.html
const googleIcons = document.createElement('link');
googleIcons.rel = 'stylesheet';
googleIcons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined';
document.head.appendChild(googleIcons);

//InitialDisplay
//localStorage.clear();
moduleUI.initialDisplay();
let projectList = [];
if(!localStorage.getItem('projectList')){
    projectList.push(defaultProject());
    moduleUI.displayProject(projectList[0]);
}
else{
    console.log(localStorage.getItem('projectList'));
    projectList = getStorageProjects();
    projectList.forEach((project) => {
        moduleUI.displayProject(project);
    });
}


//Manipulate objects
function createTodo(todo, projectName){
    const index = projectList.findIndex(x => x.getTitle() == projectName);
    const newTodo = todoFactory(todo);
    projectList[index].addTodo(newTodo);
    setStorageProjects(projectList);
    return newTodo;
}

function createProject(projectName){
    const newProject = projectFactory(projectName);
    projectList.push(newProject);
    setStorageProjects(projectList);
    return newProject;
}

function removeProject(projectName){
    const index = projectList.findIndex(x => x.getTitle() == projectName);
    delete projectList[index];
    setStorageProjects(projectList);
}

function moveTodo(todoName, projectName){
    const index = projectList.findIndex(x => x.getTitle() == projectName);
    projectList[index].checkTodo(todoName);
    setStorageProjects(projectList);
}

export {createTodo, createProject, removeProject, moveTodo};

//Storage objects
function setStorageProjects(projects){
    let projectsArray = [];
    projects.forEach((project) => {
        let todosArray = [];
        const todoList = project.getTodoList();
        todoList.forEach((todo) => {
            const todoInfo = {
                'title' : todo.getTitle(),
                'description' : todo.getDescription(),
                'date' : todo.getDate(),
                'priority' : todo.getPriority()
            };
            todosArray.push(todoInfo);
        });
        let checkedArray = [];
        const checkedList = project.getCheckedList();
        checkedList.forEach((check) => {
            const checkedInfo = {
                'title' : check.getTitle(),
                'description' : check.getDescription(),
                'date' : check.getDate(),
                'priority' : check.getPriority()
            };
            checkedArray.push(checkedInfo);
        });
        let projectInfo = {
            'title' : project.getTitle(),
            'todoList' : todosArray,
            'checkList' : checkedArray
        };
        projectsArray.push(projectInfo);
    });
    localStorage.setItem('projectList', JSON.stringify(projectsArray));
    console.log(projectsArray);
}

function getStorageProjects(){
    let newProjectList = [];
    const readProjectsArray = JSON.parse(localStorage.getItem('projectList'));
    readProjectsArray.forEach((project) => {
        const readProject = projectFactory(project.title);
        project.todoList.forEach((todo) => {
            const readTodo = todoFactory(todo.title, todo.description , todo.date, todo.priority);
            readProject.addTodo(readTodo);
        });
        project.checkList.forEach((todo) => {
            const readTodo = todoFactory(todo.title, todo.description , todo.date, todo.priority);
            readProject.addCheckTodo(readTodo);
        });
        
        newProjectList.push(readProject);
    });
    return newProjectList;
}