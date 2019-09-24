
// var factorial = function (num){
//     fact=1;
//     for(var i=1;i<=num;i++){
//     fact = fact*i;
    
//     }
//     console.log("factorial ="+fact);
// }
// factorial(4);
// console.log("==========================");
// function factorial(num1){
//     fact = 1;
//     for(var i=1;i<=num1;i++){
//         fact = fact*i;
//     }
//     console.log('factvalue = '+fact);
// }
// factValue = factorial(5);
// console.log("=============================");
// (function(n){
//     fact=1;
//     for(var i=1;i<=n;i++){
//         fact = fact*i;
//     }
//     console.log("fact value",fact)
// }(3));
var factValue = (num1)=>{
    fact=1;
    for(var i=1;i<=num1;i++){
        fact = fact*i;
    }
    console.log('fact value = '+fact);
}
factValue(7);


