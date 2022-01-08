const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;


//arrow function, a modern way to type the function below.
//you can now use 'this' as a keyword
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
    'Name is ' + 
    userName + 
    ' , age is ' +
    userAge + 
    ' and the user has hobbies: ' +
    userHasHobby
);
}

/*This is what the arrow function replaces
function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + 
        userName + 
        ' , age is ' +
        userAge + 
        ' and the user has hobbies: ' +
        userHasHobby
    );
}*/
console.log(summarizeUser(name, age, hasHobbies));

//even shorter syntaxes to do the same thing!
/*const add = (a, b) => {
    return a + b;
};*/
//you can instead type it like this!
const add = (a, b) => a + b;
console.log(add(1, 2));

//const add = (a, b) => a + b;
const addOne = a => a + 1;
//console.log(add(1,2));
console.log(addOne(1));

const addRandom = () => 1 + 2;
console.log(addRandom());

