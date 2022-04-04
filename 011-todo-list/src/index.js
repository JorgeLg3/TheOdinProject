import './style.css';
//import Icon from './icon.png';
import initialization from './logic';
import initialDOM from './dom.js';


/*const body = document.querySelector('body');
const div = document.createElement('div');
div.textContent = 'Hola';
body.appendChild(div);*/

const googleIcons = document.createElement('link');
googleIcons.rel = 'stylesheet';
googleIcons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined';
document.head.appendChild(googleIcons);

initialDOM();