var todaysDate = new Date();
console.log(todaysDate);
var date = new Date();
console.log("date = "+Date);
var date1 = new Date(2019,6,26,5,33,45,0);
console.log("date ="+date1);
var date2 = new Date(0);
console.log("date2 ="+date2);
var date3 = new Date("july 26,2019 5:45:00");
console.log("date ="+date3)
var month=['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec']
var d = todaysDate.getMonth();
console.log("month ="+month[d]);
var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var dd = todaysDate.getDay();
console.log('days ='+days[dd]);
var m = Math.random();
if(m>0)
{
    for(var num = 0; num>=100;num++)
    console.log(num);
}
console.log(Math.ceil(Math.random()*100));
var numberValue = 10;
var numberValue1 = '10';
if(numberValue === numberValue1){
    console.log("Equal");
}else{
    console.log("not Equal");
}
console.log("***************************************");
console.log(typeof numberValue);
console.log(typeof numberValue1);
console.log(typeof r);
var n = null;
console.log(typeof n);
var fruits = ['apple','banana'];
console.log(typeof fruits);
var b = true;
console.log(typeof b);
console.log("*******************************");
var age = 21;
var checkAge = (age>21)?'Greater':(age === 21)?'Equal':'Lesser';
console.log(checkAge);
console.log("***********************************")
var employees = [{
    name : 'varun',
    age : 29,
},
{
    name : 'deepika',
    age : 34,
},
{
    name : 'bhagath sing',
    age : 90,
}
];
for(var i=0;i<employees.length;i++){
    console.log(employees[i]);
}
 var hobbies = ['cricket','painting','reading books','travlling'];
 for(var value of hobbies)
 {
     console.log(value);
 }
 var person = {
     name : 'Darshan',
     age : 44,
 }
 for(var index in person){
     console.log(person[index]);
 }