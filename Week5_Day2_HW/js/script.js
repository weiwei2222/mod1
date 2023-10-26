'use strict';

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Week5 Day1 HW
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
  newEl.textContent = links.text;
  topMenuEl.appendChild(newEl);
}
//  <a href="">test</a>


// Week5 Day2 HW
// Task 4.0
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Task 5.1
const topMenuLinks = topMenuEl.getAttribute('a');
let showingSubMenu =true;
// Task 5.2  5.3
topMenuEl.addEventListener('click',function(event){
  event.preventDefault();
  if (event.target.tagName !== 'a'){
    return;
  }
  console.log(event.target.textContent);
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
})

// Task 5.4
// for (let i = 0; i < topMenuLinks.length; i++) {
//   topMenuLinks[i].classList.remove("active");
// }
console.log(topMenuLinks)