person = {                  //objects
    name : 'husna',         
    color : 'black',         
    state : 'karnataka'      
};
console.log(person.name);
console.log('name of person ='+person.name);
//array objects
var cars = ['toyota','suzuki','hondai','kia'];
console.log("the first ele in array = "+cars[0]);
console.log("the second ele in array = "+cars[1]);
console.log("the third ele in array = "+cars[2]);
console.log("the fourth ele in array is = "+cars[3]);
console.log('*****************************************');
var flowers = ['jasmin','rose','lily','lotus']; //looping through
for( var i = 0; i < flowers.length; i++){
    console.log("the array elements are "+flowers[i]);
}
console.log('*****************************************'); //date
var p = new Date();
console.log(p);
var p1 = new Date(0);
console.log(p1);