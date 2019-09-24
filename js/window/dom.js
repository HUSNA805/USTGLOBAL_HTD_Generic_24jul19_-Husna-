//getElementById()
let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent ='this is new p tag';
//getElementByClassName()
let divElement = document.getElementsByClassName('blue');
console.log(divElement);
let pElements = document.getElementsByTagName('p');
console.log(pElements);
let nameElement = document.getElementsByName('helement');
console.log(nameElement);
let demoElement = document.querySelector('#demo');
console.log(demoElement);
let blueClassElement = document.querySelectorAll('.blue');
console.log(blueClassElement);
let buttonElement = document.createElement('button');
buttonElement.textContent = 'clickMe';
console.log(buttonElement);
document.body.appendChild(buttonElement);
let buttonElement1 = document.getElementById('buttonEle');
//buttonElement1.className = 'add';
buttonElement1.classList = 'add add1';

let pEle = document.getElementById('demo');
pEle.classList = 'blue';