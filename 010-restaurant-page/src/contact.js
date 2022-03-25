function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact-container');

    const text = document.createElement('p');
    text.textContent = 'Contact';
    text.classList.add('contact-text');
    contact.appendChild(text);

    const map = document.createElement('div');
    map.classList.add('map');
    contact.appendChild(map);

    return contact;
}

function loadContact(){
    const content = document.querySelector('#content');
    const contact = createContact();
    content.appendChild(contact);
}

export default loadContact;