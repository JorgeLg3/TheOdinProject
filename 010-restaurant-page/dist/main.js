(()=>{"use strict";const t=function(){document.querySelectorAll("nav button").forEach((t=>t.classList.remove("show"))),document.querySelector("#home-button").classList.add("show");const t=document.querySelector("#content");t.textContent="";const e=function(){const t=document.createElement("div");t.classList.add("home-container");const e=document.createElement("p");e.textContent="We bring the traditional japan food to the rest of the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel rem, at quo tempore porro dolore ex blanditiis ducimus autem ipsum velit? Minus facilis repudiandae fugiat quam adipisci optio hic.",e.classList.add("home-text"),t.appendChild(e);const n=document.createElement("img");return n.classList.add("home-img"),n.setAttribute("src","./imgs/home.jpg"),t.appendChild(n),t}();t.appendChild(e)},e=(t,e,n,o)=>({name:t,file:e,price:n,description:o});let n=[];n.push(e("Shio - 塩","shio.jpeg",11.99,"It has a pale, clear, yellowish broth made with plenty of salt and any combination of chicken, vegetables, fish, and seaweed.")),n.push(e("Shoyu - 醤油","shoyu.jpg",11.49,"Has a clear brown broth, based on a chicken and vegetable stock with plenty of soy sauce added resulting in a soup that is tangy, salty, and savory yet still fairly light on the palate.")),n.push(e("Miso - 味噌","miso.jpg",12.59,"Features a broth that combines copious miso and is blended with oily chicken or fish broth to create a thick, nutty, slightly sweet and very hearty soup.")),n.push(e("Kare - カレー","kare.jpg",10.29,"Curry soup is mainly made with pork bones and vegetables and is seasoned with curry. The noodles are thick and curly. Toppings include chāshū, wakame, and bean sprouts."));t();const o=document.getElementById("home-button"),c=document.getElementById("menu-button"),a=document.getElementById("contact-button");o.addEventListener("click",t),c.addEventListener("click",(function(){document.querySelectorAll("nav button").forEach((t=>t.classList.remove("show"))),document.querySelector("#menu-button").classList.add("show");const t=document.querySelector("#content");t.textContent="";const e=function(t){const e=document.createElement("div");return e.classList.add("menu-container"),t.forEach((t=>{const n=document.createElement("div");n.classList.add("card");const o=document.createElement("h3");o.classList.add("name"),o.textContent=t.name,n.appendChild(o);const c=document.createElement("img");c.classList.add("menu-img"),c.setAttribute("src","./imgs/"+t.file),n.appendChild(c);const a=document.createElement("div");a.classList.add("price"),a.textContent=t.price+"$",n.appendChild(a),e.appendChild(n)})),e}(n);t.appendChild(e)})),a.addEventListener("click",(function(){document.querySelectorAll("nav button").forEach((t=>t.classList.remove("show"))),document.querySelector("#contact-button").classList.add("show");const t=document.querySelector("#content");t.textContent="";const e=function(){const t=document.createElement("div");t.classList.add("contact-container");const e=document.createElement("h4");e.textContent="Contact:",e.classList.add("contact-title"),t.appendChild(e);const n=document.createElement("p");n.textContent="+99 000 00 00 00",n.classList.add("contact-text"),t.appendChild(n);const o=document.createElement("p");o.textContent="email.example@yokohamarammen.com",o.classList.add("contact-text"),t.appendChild(o);const c=document.createElement("p");return c.textContent="Invented Street nº00 62541",c.classList.add("contact-text"),t.appendChild(c),t}();t.appendChild(e)}))})();