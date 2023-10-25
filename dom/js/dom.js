'use strict';

let titleEl = document.getElementById('title');
console.log(titleEl);
console.dir(titleEl);

let textEl = document.querySelector('.text');
console.log(textEl);

let coolEl = document.querySelector('.cool');
console.log(coolEl);


textEl.innerHTML = 'This is new text. Today is <strong>Monday</strong>!!!!I changed this text.'
coolEl.textContent = 'This is new. haha, I am happy!!I changed this p.'
textEl.style.textAlign = 'center';
textEl.style.color = 'red';
coolEl.style.backgroundColor = '#666';

