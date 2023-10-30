
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



// Week5 Day2 HW
// Task 4.0
const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = "absolute";
subMenuEl.style.top = '0';

//Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener("click", function (e){
  e.preventDefault();
  if (e.target.tagName!="A"){
    return;
  }
  
  console.log(e.target.textContent);  
  
//Task 5.3
if (e.target.classList.contains("active")){
    console.log(e.target.classList);
    e.target.classList.remove("active");
    console.log(e.target.classList);
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }
console.log(topMenuLinks);
  
//Task 5.4
for (i=0; i<topMenuLinks.length; i++){
      topMenuLinks[i].classList.remove("active");
}

//Task 5.5
e.target.classList.add('active');

//Task 5.6
if(e.target.textContent!="about"){
    showingSubMenu = true;
    console.log('showingSubMenu: ' + showingSubMenu);
}else{
    showingSubMenu = false;
    console.log('showingSubMenu: ' + showingSubMenu);
}


let linksObject;
if(e.target.textContent=="catalog"){
    linksObject = menuLinks[1]['subLinks'];
}else if(e.target.textContent=="orders"){
    linksObject = menuLinks[2]['subLinks'];
}else if(e.target.textContent=="account"){
    linksObject = menuLinks[3]['subLinks'];
}

//Task 5.7
if (showingSubMenu == true){
    buildSubMenu(linksObject);
    subMenuEl.style.top = '100%';
}else{
    subMenuEl.style.top = '0';

}

//Task 5.8
function buildSubMenu(linksObject){
    //Clears the contents of subMenuEl
    subMenuEl.innerHTML = "";
   
   for(i=0; i<linksObject.length; i++){ 
   const subLink = document.createElement("a");
   subLink.href = linksObject[i]['href'];
   subLink.textContent = linksObject[i]['text'];
   console.log(subLink);
   subMenuEl.append(subLink);
    }

  }

//Task 6.4
if (e.target.textContent=="about"){
    mainEl.innerHTML = "<h1> About </h1>";  
    }
} 
) 
//Task 6.0
subMenuEl.addEventListener('click', function(e){
      e.preventDefault();
      if (e.target.tagName!="A"){
        return;
}
console.log(e.target.textContent);  
  
//Task 6.1
showingSubMenu = false;


subMenuEl.style.top = 0;

//Task 6.2
for (i=0; i<topMenuLinks.length; i++){
    topMenuLinks[i].classList.remove("active");
}

//Task 6.3
mainEl.innerHTML = "<h1>" + e.target.textContent + "</h1>";
 //Task 6.4

  });