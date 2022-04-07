import './style.css';
//import Icon from './icon.png';
import {initialization, todoFactory, projectFactory} from './models';
import moduleUI from './dom.js';


/*const body = document.querySelector('body');
const div = document.createElement('div');
div.textContent = 'Hola';
body.appendChild(div);*/

const googleIcons = document.createElement('link');
googleIcons.rel = 'stylesheet';
googleIcons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined';
document.head.appendChild(googleIcons);

//initialDOM();

moduleUI.initialDisplay();
let projectList = [];
projectList.push(initialization());
moduleUI.displayProject(projectList[0]);

function createTodo(todo, projectName){
    const index = projectList.findIndex(x => x.getTitle() == projectName);
    const newTodo = todoFactory(todo);
    projectList[index].addTodo(newTodo);
    return newTodo;
}

function createProject(projectName){
    const newProject = projectFactory(projectName);
    projectList.push(newProject);
    return newProject;
}

function moveTodo(todoName, projectName){
    const index = projectList.findIndex(x => x.getTitle() == projectName);
    projectList[index].checkTodo(todoName);
}

export {createTodo, createProject, moveTodo};