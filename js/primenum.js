// let prime = function(num){
//     var count=0;
//     for(var i=2;i<=num/2;i++){
//         if(num%2 === 0){
//             count++;
//             break;

//         }
//     }
//     if(count === 0){
//         console.log(num,"is a prime num");
//     }else{
//         console.log(num,"is not a prime num");
//     }

// };prime(5);

// function prime(num){
//     var count=0;
//     for(var i=2;i<=num/2;i++){
//         if(num%2 === 0){
//             count++;
//             break;

//         }
//     }
//     if(count === 0){
//         console.log(num,"is a prime num");
//     }else{
//         console.log(num,"is not a prime num");
//     }

// };
// var primevalue = prime(6);

// (function(num){
//     var count=0;
//     for(var i=2;i<=num/2;i++){
//         if(num%2 === 0){
//             count++;
//             break;

//         }
//     }
//     if(count === 0){
//         console.log(num,"is a prime num");
//     }else{
//         console.log(num,"is not a prime num");
//     }

// }(8));

let prime = (num)=>{
    count=0;
    for(var i=2;i<=num/2;i++){
        if(num%i === 0){
            count++;
            break;

        }
    }
    if(count === 0){
        console.log(num+" is a prime num");
    }else{
        console.log(num+" is not a prime num");
    }

};prime(10);