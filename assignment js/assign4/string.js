var str = "hello";
var str1 = "world";
let upperEle = str.toUpperCase();
console.log("upper case = "+upperEle);
let lowerEle = str.toLowerCase();
console.log("lower case = "+lowerEle);
let position = str.charAt(2);
console.log("the string at position = "+position);
let index = str.indexOf('l',0);
console.log("the index = "+index);
let newStr = str.concat(str1);
console.log(" the concated string = "+newStr);
let includes = str.includes('o',5);
console.log("the ele present = "+includes);
let replaceEle = str.replace('l',2);
console.log("the replaced ele = "+replaceEle);
let splitEle = str.split('o',2);
console.log(" the ele split = "+splitEle);
let subString = str.substr(0,3);
console.log("the substr = "+subString);
let searchEle = str.search('l');
console.log("the search ele = "+searchEle);
var a = "    nn  nn     "
let trimLeft = a.trim();
console.log("the trim ele  = "+trimLeft);


