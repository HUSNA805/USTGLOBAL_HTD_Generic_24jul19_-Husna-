let resultData = new Promise(function(resolve,reject){
    if(10===10){
        reject('failed');
    }else{
        resolve('success');
    }
});
resultData.then((data)=>{
    console.log('then block = '+data);
}).catch((error)=>{
    console.log('catch block = '+error);
});

let employeeData = new Promise(function(resolve,reject){
    const employee = [
                       {
                           name : 'SRK',
                           age : 60
                       },
                       {
                           name : 'sundari',
                           age : 45
                       },
                       {
                           name : 'Akshay',
                           age :61
                       }

                     ];
    if(10>10){
        reject('failed');
    }else{
        resolve(employee);
    }
});
employeeData.then((data)=>{
    //console.log('then block = ',data);
    return data;
}).catch((error)=>{
    console.log('catch block = ',error);
}).then(function(data1){
    console.log('this is den block1 = ',data1);
});

function fact(n){
    if(n===0||n===1){
        return 1;

    }else{
        return fact(n-1)*n;
    }
}
let factorialValue = fact(5);
console.log("fact value  = ",factorialValue);