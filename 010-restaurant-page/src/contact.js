function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact-container');

    const contactTitle = document.createElement('h4');
    contactTitle.textContent = 'Contact:';
    contactTitle.classList.add('contact-title');
    contact.appendChild(contactTitle);

    const tel = document.createElement('p');
    tel.textContent = '+99 000 00 00 00';
    tel.classList.add('contact-text');
    contact.appendChild(tel);

    const email = document.createElement('p');
    email.textContent = 'email.example@yokohamarammen.com';
    email.classList.add('contact-text');
    contact.appendChild(email);

    const address = document.createElement('p');
    address.textContent = 'Invented Street nº00 62541';
    address.classList.add('contact-text');
    contact.appendChild(address);
    /*
    const map = document.createElement('div');
    map.classList.add('map');
    contact.appendChild(map);*/

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