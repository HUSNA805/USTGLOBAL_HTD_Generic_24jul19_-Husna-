var pen = new Object();
pen.color = 'blue';
console.log(color);
var name = 'fountain';
console.log(name);
var price = 10;
console.log(price);
 /*fun(){
    return 'fountain gives smoother handriting';
 }*/
 console.log("************************");
 var phone = new Object();
 var name = 'mi';
 console.log(name);
 var color = 'black';
 console.log(color);
 var price = 24000;
 console.log(price);
 console.log('*****************************');
 var books = new Object();
 var name = 'classmate';
 console.log(name);
 var size = 'long notebook';
 console.log(size);
 var type = 'unruled';
 console.log(type);
 console.log('*********************************');
 var laptop = new Object();
 var name = 'sony';
 console.log(name);
 var mem = '64GB';
 console.log(mem);
 console.log('******************************');
 var bike = new Object();
 var name = 'pulsur';
 console.log(name);
 var color = 'red';
 console.log(color);
 console.log('*********************************');
 var pen = {
     name : 'reynolds',
     color : 'black',
     price : 5,
     getname : function(){
         return this.name;
     }
 }
 console.log(pen);
 console.log("***********************************");
 var car = {
    name : 'kia',
    color : 'red',
    price : 870000,
    getname : function(){
        return this.name;
    }
}
console.log(car);
console.log('*************************************')
var books = {
    name : 'chandras',
    size : 'long notebook',
    price : 50,
    getname : function(){
        return this.name;
    }
}
console.log(books);
console.log("********************************")
var laptop = {
    name : 'lenovo',
    color : 'black',
    price : 35000,
    getname : function(){
        return this.name;
    }
}
console.log(laptop);
console.log("**********************************")
var bike = {
    name : 'R15',
    color : 'black',
    price : 900000,
    getname : function(){
        return this.name;
    }
}
console.log(bike);
console.log("********************************")
var fruits = ['orange','banana','mango'];
var vege = ['brinjal','tamato','ladies finger'];
var books = ['chandras','classmate'];
var pen = ['reynolds','fusion','parker'];
var authors = ['shekesphere','faiz'];
console.log("*********************************");
var fruits = new Array('grapes','pineapple');
var vege = new Array('brinjal','','potato');
var books = new Array('shekars','royals');
var pen = new Array('fusion','');
var authors = new Array('shekesphere','');
console.log("********************************")
var fruits = ['orange','banana','mango'];
for(var i =0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
var vege = ['brinjal','tamato','ladies finger'];
for(var i =0;i<vege.length;i++)
{
    console.log(vege[i]);
}
var books = ['chandras','classmate'];
for(var i =0;i<books.length;i++)
{
    console.log(books[i]);
}
var pen = ['reynolds','fusion','parker'];
for(var i =0;i<pen.length;i++)
{
    console.log(pen[i]);
}
var authors = ['shekesphere','faiz'];
for(var i =0;i<authors.length;i++)
{
    console.log(authors[i]);
}
