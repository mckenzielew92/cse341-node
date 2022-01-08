//Objects:
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name) //this refers to the key word name.
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

//person.greet();

//**************Arrays, Array Methods

const hobbies = ['Sports', 'Cooking'];
   // for (let hobby of hobbies) {
    //    console.log(hobby);
    //}
    //hobbies.map();//allows you to transform the values in the arrow, will give a new arrow.
    //console.log(hobbies.map(hobby => ' Hobby: ' + hobby));
    //console.log(hobbies);

    //******************Arrays, Objects and Reference Types 
    //- objects and arrays are reference types, the reference can be changed with a constant. (objects and arrays)

    //push adds to existing array - not creating a new array
hobbies.push('Programming');
console.log(hobbies);

//********************** Rest and Spread Operators */
//const copiedArray = hobbies.slice(); //slice copies and array while eliminating the last 
//but when we console log we see it is an array with an array inside it.
const copiedArray = [...hobbies]; // three dots (spread operator) takes all the properties 
//of the array or object and pulled out and added to the new array.
console.log(copiedArray);

//const toArray = (arg1, arg2, arg3) => {
//    return [arg1, arg2, arg3];
//}
//console.log(toArray(1, 2, 3));
//the above is not flexible if you want to add to the arguments.
const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3, 4));
//now the array has 4 arguments. rest operator looks like the spread operator '...'
//if you use the 3 dots in the argument list of a function, it will add to the already existing arguments, and is a rest operator.


