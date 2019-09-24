var hobbies = ['carrom','dancing','singing','reading books'];
hobbies.forEach(function(value,index){
    if(value.length>7){
    console.log("hobbies = "+value);
    }
});
console.log("********************");
console.log(myName);
 var myName = 'husna';
 console.log(myName);
 console.log("*********************************");
function getAge(){
    var age;
    console.log(age);
    var age = 10;
    console.log(age);
}
getAge();
console.log("***************************");
var hobbies = ['carrom','dancing','singing','reading books'];
var checkArray = Array.isArray(hobbies);
console.log("type of ="+checkArray);
var checkIncludes = hobbies.includes('dancing');
console.log("element present ="+checkIncludes);
hobbies.push('jumping','eating');
console.log("hobbies after push ="+hobbies);
hobbies.pop();
console.log("hobbies after pop ="+hobbies);
hobbies.unshift('skipping','breaking bones');
console.log("ele added at first ="+hobbies);
hobbies.shift();
console.log("after popping first ele ="+hobbies);
hobbies.splice(0,2,'painting');
console.log("array after splice ="+hobbies);
var s = hobbies.slice(0,3);
console.log("array after slice ="+s);
console.log("ori array ="+hobbies);
hobbies.join('-');
console.log("converting to string ="+hobbies);
var i = hobbies.indexOf('dancing');
console.log(i);
console.log("*****************************");
var num = [10,20,30,40,50];
var num1 = num.map((value,index)=>{
    value = value+10;
    return value;
}
);
console.log(num1);
var num2 = num.filter((value)=>{
    return value >20;
}
);
console.log(num2);
console.log("****************************");
var num = [10,20,30,40,50];
var afterMap = num.map((mapNum=>(mapNum+10)));
console.log(afterMap);
var afterFilter = num.filter((filterNumber=>(filterNumber>20)));
console.log(afterFilter);
console.log("*******************************");
var items = [{
    name : 'lipstick',
    price :95,
    id : 1
},
{
    name : 'perfume',
    price : 500,
    id : 2
},
{
    name : 'watch',
    price : 1000,
    id : 3
},
{
    name : 'shoe',
    price : 2000,
    id : 4
}];
var stock = items.map((item)=>{
    item.price = item.price+100;
    return item;
}
);
console.log(stock);
console.log("*************************************");
var stock1 = items.filter(function (item){
    var item = item.price>100 && item.name.length>5;
    return item;
});
console.log(stock1);