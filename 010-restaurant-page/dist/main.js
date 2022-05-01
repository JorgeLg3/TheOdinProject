(()=>{"use strict";const e=function(){document.querySelectorAll("nav button").forEach((e=>e.classList.remove("show"))),document.querySelector("#home-button").classList.add("show");const e=document.querySelector("#content");e.textContent="";const t=function(){const e=document.createElement("div");e.classList.add("home-container");const t=document.createElement("p");t.textContent="We bring the traditional japan food to the rest of the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel rem, at quo tempore porro dolore ex blanditiis ducimus autem ipsum velit? Minus facilis repudiandae fugiat quam adipisci optio hic.",t.classList.add("home-text"),e.appendChild(t);const n=document.createElement("img");return n.classList.add("home-img"),n.setAttribute("src","./imgs/home.jpg"),e.appendChild(n),e}();e.appendChild(t)},t=(e,t,n,o)=>({name:e,file:t,price:n,description:o});let n=[];n.push(t("Shio - 塩","shio.jpeg",11.99,"It has a pale, clear, yellowish broth made with plenty of salt and any combination of chicken, vegetables, fish, and seaweed.")),n.push(t("Shoyu - 醤油","shoyu.jpg",11.49,"Has a clear brown broth, based on a chicken and vegetable stock with plenty of soy sauce added resulting in a soup that is tangy, salty, and savory yet still fairly light on the palate.")),n.push(t("Miso - 味噌","miso.jpg",12.59,"Features a broth that combines copious miso and is blended with oily chicken or fish broth to create a thick, nutty, slightly sweet and very hearty soup.")),n.push(t("Kare - カレー","kare.jpg",10.29,"Curry soup is mainly made with pork bones and vegetables and is seasoned with curry. The noodles are thick and curly. Toppings include chāshū, wakame, and bean sprouts."));e();const o=document.getElementById("home-button"),a=document.getElementById("menu-button"),c=document.getElementById("contact-button");o.addEventListener("click",e),a.addEventListener("click",(function(){document.querySelectorAll("nav button").forEach((e=>e.classList.remove("show"))),document.querySelector("#menu-button").classList.add("show");const e=document.querySelector("#content");e.textContent="";const t=function(e){const t=document.createElement("div");t.classList.add("menu-container");const n=document.createElement("div");n.classList.add("menu-title"),n.textContent="Rammens",t.appendChild(n);const o=document.createElement("div");return o.classList.add("menu-grid"),e.forEach((e=>{const t=document.createElement("div");t.classList.add("card");const n=document.createElement("h3");n.classList.add("name"),n.textContent=e.name,t.appendChild(n);const a=document.createElement("img");a.classList.add("menu-img"),a.setAttribute("src","./imgs/"+e.file),t.appendChild(a);const c=document.createElement("div");c.classList.add("price"),c.textContent=e.price+"$",t.appendChild(c),o.appendChild(t)})),t.appendChild(o),t}(n);e.appendChild(t)})),c.addEventListener("click",(function(){document.querySelectorAll("nav button").forEach((e=>e.classList.remove("show"))),document.querySelector("#contact-button").classList.add("show");const e=document.querySelector("#content");e.textContent="";const t=function(){const e=document.createElement("div");e.classList.add("contact-container");const t=document.createElement("div");t.classList.add("contact-info");const n=document.createElement("h4");n.textContent="Contact:",n.classList.add("contact-title"),t.appendChild(n);const o=document.createElement("p");o.textContent="+99 000 00 00 00",o.classList.add("contact-text"),t.appendChild(o);const a=document.createElement("p");a.textContent="email.example@yokohamarammen.com",a.classList.add("contact-text"),t.appendChild(a);const c=document.createElement("p");c.textContent="Invented Street nº00 62541",c.classList.add("contact-text"),t.appendChild(c),e.appendChild(t);const s=document.createElement("div");s.classList.add("map");const d=document.createElement("iframe");return d.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208005.55917731763!2d139.45497639102936!3d35.45264393642642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185becbbb66509%3A0x69683f660285400!2sYokohama%2C%20Prefectura%20de%20Kanagawa%2C%20Jap%C3%B3n!5e0!3m2!1ses!2sno!4v1651336609567!5m2!1ses!2sno",d.width="100%",d.height="100%",d.style="border:0;",d.loading="lazy",d.referrerpolicy="no-referrer-when-downgrade",s.appendChild(d),e.appendChild(s),e}();e.appendChild(t)}))})();