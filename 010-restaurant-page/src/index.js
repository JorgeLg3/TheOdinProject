import loadHome from './home';
import loadMenu  from './menu';
import loadContact  from './contact';

loadHome();

const homeBtn = document.getElementById('home-button');
const menuBtn = document.getElementById('menu-button');
const contactBtn = document.getElementById('contact-button');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);