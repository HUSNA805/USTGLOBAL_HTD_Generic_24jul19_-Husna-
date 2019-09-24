var message ='hello';
console.log(message);
message = message+'world';
console.log(message);
var message1 = message;
console.log(message1);
message = 'hi';
console.log(message);
console.log(message1);
console.log("*********************************");
var person = {
    name : 'samantha',
    age : 30,
    color : 'white'
};
console.log(person);
person.name = 'kajal';
console.log(person);
var person1 = person;
console.log(person);
person1.name = 'allu arjun';
console.log(person);
console.log(person1);
console.log("**********************************");
function first(callback){
    setTimeout(function(){
    console.log('first');
    callback();
    },2000);
    console.log('this is first');
}
function second(){
    console.log('second');
}
first(second);
console.log("*****************************");
