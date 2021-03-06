function createHome(){
    const home = document.createElement('div');
    home.classList.add('home-container');

    const text = document.createElement('p');
    text.textContent = 'We bring the traditional japan food to the rest of the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel rem, at quo tempore porro dolore ex blanditiis ducimus autem ipsum velit? Minus facilis repudiandae fugiat quam adipisci optio hic.';
    text.classList.add('home-text');
    home.appendChild(text);

    const img = document.createElement('img');
    img.classList.add('home-img');
    img.setAttribute('src','./imgs/home.jpg');
    home.appendChild(img);

    return home;
}

function loadHome(){
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach((button) => button.classList.remove('show'));
    const homeBtn = document.querySelector('#home-button');
    homeBtn.classList.add('show');
    
    const content = document.querySelector('#content');
    content.textContent ='';
    const home = createHome();
    content.appendChild(home);
}

export default loadHome;