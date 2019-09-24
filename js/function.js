var sumVal = sum(10,20);

function sum(num1,num2){
    if(num1!==undefined && num2!== undefined){
        sumValue = num1+num2;
        return sumValue;
    }
}

console.log("sum ="+sumVal);
console.log("**************************");
var addData = function(n1,n2){
    console.log("sum ="+(n1+n2));
}
addData(10,10);
console.log("another way");
var addData = function(n1,n2){
    sum = n1+ n2;
    return sum;
}
var add = addData(10,10);
console.log(add);                   
(function(num1,num2){
    var sumData = num1+num2;
    console.log("sumvalue ="+sumData);

}(10,30));     
console.log("******************************");
var sumValue = (num1,num2)=>{
     return num1+num2; 
}
var sumData = sumValue(100,100); 
console.log("value ="+sumData);
console.log("*******************************");
var sum = (num1,num2)=> num1+num2;
var s = sum(90,90);
console.log("sum ="+s);     



