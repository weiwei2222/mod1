'use strict';

const btn = document.querySelector('button');

btn.addEventListener('click', function(evt) {
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textContent = inp.value;
    document.querySelector('ul').appendChild(li);
});

document.querySelector('ul').addEventListener('click',handleClick);

function handleClick(evt){
    console.log(evt);
    console.log(evt.target);
    let evtColor = evt.target.style.color;
    if (evtColor == 'red'){
        evt.target.style.color = 'blue';
    }else{
        evt.target.style.color = 'red';
    }
    
}

document.querySelector('ul').removeEventListener('click',handleClick);