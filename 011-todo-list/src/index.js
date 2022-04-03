import './style.css';
//import Icon from './icon.png';
import initialization from './logic';


const body = document.querySelector('body');
const div = document.createElement('div');
div.textContent = 'Hola';
body.appendChild(div);

initialization();