// let fibbo = function (length){
//     n1=0,n2=1;
//     if(length === 1){
//         console.log(n1);

//     }else if(length === 2){
//         console.log(n1+" "+n2);
//     }else{
//         console.log(n1+" "+n2);
//         for(var i=3;i<length;i++){
//             n3 = n1+n2;
//             console.log(n3+" ");
//             n1=n2;
//             n2=n3;
//         }
//     }
// };
// fibbo(2);

// function fibbo(length){
//     n1=0,n2=1;
//     if(length === 1){
//         console.log(n1);

//     }else if(length === 2){
//         console.log(n1+" "+n2);
//     }else{
//         console.log(n1+" "+n2);
//         for(var i=3;i<length;i++){
//             n3 = n1+n2;
//             console.log(n3+" ");
//             n1=n2;
//             n2=n3;
//         }
//     }
// };
// let fibboSeries = fibbo(2);

// (function (length){
//     n1=0,n2=1;
//     if(length === 1){
//         console.log(n1);

//     }else if(length === 2){
//         console.log(n1+" "+n2);
//     }else{
//         console.log(n1+" "+n2);
//         for(var i=3;i<=length;i++){
//             n3 = n1+n2;
//             console.log(n3+" ");
//             n1=n2;
//             n2=n3;
//         }
//     }
// }(4));


let fibbo =(length)=>{
    n1=0,n2=1;
    if(length === 1){
        console.log(n1);

    }else if(length === 2){
        console.log(n1+" "+n2);
    }else{
        console.log(n1+" "+n2);
        for(var i=3;i<length;i++){
            n3 = n1+n2;
            console.log(n3+" ");
            n1=n2;
            n2=n3;
        }
    }
};
fibbo(2);