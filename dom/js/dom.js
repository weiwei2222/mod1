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

console.log(coolEl.getAttribute('class'));
console.log(coolEl.hasAttribute('id'));


let aTag = document.createElement('a');
aTag.textContent = "visit Google";
document.body.appendChild(aTag);
aTag.setAttribute('href','https://www.google.com/');

coolEl.classList.add('change');
textEl.classList.contains('change2');
titleEl.classList.toggle('change3')

let commentList = document.getElementsByClassName('comment');
console.log(commentList)

let listEl = document.querySelectorAll('li');
for(let commentEl of listEl) {
	console.log(commentEl);
}
listEl.forEach((listEl) => console.log(listEl));

for(let commentEl of listEl) {
	commentEl.style.fontSize = '30px';
}