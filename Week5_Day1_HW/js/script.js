'use strict';

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.width = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');



for (let links of menuLinks){
  let newEl = document.createElement('a');
  newEl.setAttribute('href',links.href);
  console.log(newEl);
  newEl.textContent = links.text;
  topMenuEl.appendChild(newEl);
  console.log(newEl);
}
//  <a href="">test</a>
