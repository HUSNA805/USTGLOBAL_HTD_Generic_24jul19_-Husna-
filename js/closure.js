function sum(a,b){
    function addSum(){
        return a+b;
    }
    return addSum;

}
var addFunc = sum(20,90);
var total = addFunc();
console.log('total',total);
console.log("*******************************");
console.log(window);
console.log(this);
console.log(this === window);
var name = 'rakshit';
console.log(window.name);
console.log(this.name);

var person = {
    name : 'bagii',
    age : 22,
    getName : function(){
        console.log('getname method ',this.name);
        console.log(window);
        getData();
        function getData(){
        console.log('get data method',this.name);
        }
        return this.name;
    }
}
var fName = person.getName();
console.log('name = '+fName);
for(var i=0;i<5;i++){
    console.log(i);
}
console.log('value of i = '+i)
console.log('name = '+fName);
for(let j=0;j<5;j++){
    console.log(j);
}
//console.log("value of j = "+j);
var hobbies = ['dancing','singing','cricket'];
console.log('hobbies '+hobbies);
var hobbies = ['numismatics'];
console.log('hobbies '+hobbies);
hobbies = ['singing'];
console.log("================================");
let fruits = ['orange' ,'papaya','banana'];
console.log('fruits = '+fruits);
 fruits = ['jackfruit'];
console.log('fruits ='+fruits);
console.log("===========================");
const flowers = ['rose','jasmin'];
console.log('flowers ='+flowers);
 flowers[2] = ['lily','sunflower'];
console.log(flowers);
