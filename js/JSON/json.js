let employeeJson = {
    name : "dinga",
    age : 24,
    hobbies : ['dancing','singing']
};
console.log(`my name is ${employeeJson.name}`);
console.log(employeeJson);
let jsonObject = JSON.stringify(employeeJson);
console.log(jsonObject);
let jsObject = JSON.parse(jsonObject);
console.log(jsObject);