function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact-container');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactTitle = document.createElement('h4');
    contactTitle.textContent = 'Contact:';
    contactTitle.classList.add('contact-title');
    contactInfo.appendChild(contactTitle);

    const tel = document.createElement('p');
    tel.textContent = '+99 000 00 00 00';
    tel.classList.add('contact-text');
    contactInfo.appendChild(tel);

    const email = document.createElement('p');
    email.textContent = 'email.example@yokohamarammen.com';
    email.classList.add('contact-text');
    contactInfo.appendChild(email);

    const address = document.createElement('p');
    address.textContent = 'Invented Street nº00 62541';
    address.classList.add('contact-text');
    contactInfo.appendChild(address);

    contact.appendChild(contactInfo);
    
    const map = document.createElement('div');
    map.classList.add('map');

    const frameMaps = document.createElement('iframe');
    frameMaps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208005.55917731763!2d139.45497639102936!3d35.45264393642642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185becbbb66509%3A0x69683f660285400!2sYokohama%2C%20Prefectura%20de%20Kanagawa%2C%20Jap%C3%B3n!5e0!3m2!1ses!2sno!4v1651336609567!5m2!1ses!2sno";
    frameMaps.width = '100%';
    frameMaps.height = '100%';
    frameMaps.style = "border:0;";
    frameMaps.loading = "lazy";
    frameMaps.referrerpolicy = "no-referrer-when-downgrade";
    map.appendChild(frameMaps);

    contact.appendChild(map);

    return contact;
}

function loadContact(){
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach((button) => button.classList.remove('show'));
    const contactBtn = document.querySelector('#contact-button');
    contactBtn.classList.add('show');

    const content = document.querySelector('#content');
    content.textContent ='';
    const contact = createContact();
    content.appendChild(contact);
}

export default loadContact;