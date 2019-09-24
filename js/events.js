function sayHello(){
     alert('Welcome');
}
console.log("========================");
let buttonEle = document.getElementById('click');
buttonEle.onclick = function(){
    alert('hi;)');
}
function createElement1(){
let createEle = document.createElement('p');
createEle.textContent='clickMe33!!!';
document.body.appendChild(createEle);
};
let eventEle = document.getElementById('i');
eventEle.addEventListener('click',function(){
    alert('good afternoon');
});

let h1Ele = document.createElement('h1');
function showText(){
    let inputEle = document.getElementById('showData');
    console.log(inputEle.value);

    h1Ele.textContent = inputEle.value;
    document.body.appendChild(h1Ele);
}

