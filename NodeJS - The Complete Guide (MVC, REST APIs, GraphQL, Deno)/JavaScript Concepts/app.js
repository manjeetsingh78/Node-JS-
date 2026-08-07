const name = "Manjeet Singh";
let age = 23;
const hasHobbies = true;

const summarizeUser = (userName, age, userHasHobbies)=>{
    return (
        "Name is " + 
        userName +
        " age is " +
        age +
        " and the user has hobbies " +
        userHasHobbies
    );
};

// const addOne = (num1,num2) => a + b;

// const addOne = a => a + 1;

const addRandom = () => 1 + 2;

const addOne = (num1,num2)=>{
    return num1 + num2;
}

console.log(addOne(24,54));
console.log(addRandom());

console.log(summarizeUser(name,age,hasHobbies));


const person = {
    name: "Manjeet Singh",
    age: 23,
    greet(){
        console.log("Hi I am " + this.name);
    }
};

person.greet();


// Arrays and Arrays Methods

const arr = ['Manjeet', 'Abhishek', 'Harsh'];

// for( let i of arr){
//     console.log(i);
// }

console.log(arr.map(i =>{
    return "Name: " + i;
}));

console.log(arr);

// Spread Operator ()...) = unpacks a collection into its individual standalone elements.

const copiedArray = [...arr];

console.log(copiedArray);

const copiedPerson = {...person};
console.log(copiedPerson);


const toArray = (arg1, arg2, arg3) => {
    return [arg1,arg2,arg3];
}

console.log(toArray(2,3,5,45,2));

// REST Operators = packs multiple elements into single collection

const toArray1 = (...args) => {
    return args;
};

console.log(toArray1(23,5,45,233,43));


// Object Destructuring 

// const printName = ({name})=>{
//     console.log(name);
// }

// printName(person);

// const { name, age } = person;
// console.log(name,age);

// Async Code 

const fetchData = callback =>{
    const promise = new Promise((resolve,reject) => {
        setTimeout(()=>{
            callback("Done!");
        },1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done");
    fetchData(text => {
        console.log(text);
    });
},2000);

console.log("Hello");
console.log("Manjeet");