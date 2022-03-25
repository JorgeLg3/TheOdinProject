const ramenFactory = (name, file, price, description) => {
    return{name, file, price, description};
}

let ramenList = [];

ramenList.push(ramenFactory('Shio - 塩', 'shio.jpeg', 11.99, 'It has a pale, clear, yellowish broth made with plenty of salt and any combination of chicken, vegetables, fish, and seaweed.'));
ramenList.push(ramenFactory('Shoyu - 醤油', 'shoyu.jpg', 11.49, 'Has a clear brown broth, based on a chicken and vegetable stock with plenty of soy sauce added resulting in a soup that is tangy, salty, and savory yet still fairly light on the palate.'));
ramenList.push(ramenFactory('Miso - 味噌', 'miso.jpg', 12.59, 'Features a broth that combines copious miso and is blended with oily chicken or fish broth to create a thick, nutty, slightly sweet and very hearty soup.'));
ramenList.push(ramenFactory('Kare - カレー', 'kare.jpg', 10.29, 'Curry soup is mainly made with pork bones and vegetables and is seasoned with curry. The noodles are thick and curly. Toppings include chāshū, wakame, and bean sprouts.'));

function createMenu(ramens){
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    ramens.forEach((ramen) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h3');
        name.classList.add('name');
        name.textContent = ramen.name;
        card.appendChild(name);

        const img = document.createElement('img');
        img.classList.add('menu-img');
        img.setAttribute('src','./imgs/' + ramen.file);
        card.appendChild(img);

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = ramen.price + '$';
        card.appendChild(price);

        menu.appendChild(card);
    })

    return menu;
}

function loadMenu(){
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach((button) => button.classList.remove('show'));
    const menuBtn = document.querySelector('#menu-button');
    menuBtn.classList.add('show');
    
    const content = document.querySelector('#content');
    content.textContent ='';
    const menu = createMenu(ramenList);
    content.appendChild(menu);
}

export default loadMenu;