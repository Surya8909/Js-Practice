// functions:
function addTwoNumbers(a , b){
    console.log(`Your answer is : ${a + b}`)
    return a + b
}
// let sum = addTwoNumbers(6 , 8);

// let sum2 = console.log(addTwoNumbers(7 , 8));
// console.log(sum2);

// Array:

let arr1 = ["a" , "b" , "c" , "d"];
let arr2 = ["e" , "f" , "g" , "h"];

// console.log(...arr1 , ...arr2);
// console.log(arr1.splice(1,2));
// console.log(arr1);

// Object:

let userDetails = {1:"a",2:"b",3:"c"}
let userDetails2 = {4:"d",5:"e",6:"f"}

// console.log(Object.assign(userDetails,userDetails2));
// console.log({...userDetails,...userDetails2});
// console.log(typeof userDetails);

// functions:
function cartPrice(...num){
    return num 
}
// console.log(cartPrice(2,3,4,5,6,7,8,9,2222));

const user = {
    username : "modi@111",
    price : 999999
}
function userData (object){
    return object

}
// console.log(userData(user));
// console.log(userData(`Your username is ${user.username} and the price of
//  item is ${user.price}`));

// if else statements:
const week = 1

// switch (week) {
//     case 1:
//         console.log("Monday");
//         break;
        
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
        
//         break;
//     case 4:
//         console.log("Thursday");
        
//         break;
//     case 5:
//         console.log("Friday");
        
//         break;
//     case 6:
//         console.log("Saturday");
        
//         break;

//     default:
//         console.log("Sunday");
//         break;
// }


// let a;
// a = null ?? undefined ?? 10 ?? 20

// console.log(a);

// Ternary Operaters
const tea = 10
// tea <= 20 ? console.log("less than 20") : console.log("more than 20");

// Loops:

// for (let i = 0; i <= 100; i++) {
    // console.log(`${i}*${i} = ${i*i}`);
    
// }

// Break and continue:

// let arr = ["MANGO" ,"APPLE" ,"GRAPES"]

// for (let i = 0; i < arr.length; i++) {
//     if (i == 1) {
//         console.log(`Detacted APPLE at 1st index`);
        
        
//     }
//     const element = arr[i];
//     console.log(element);
    
// }

// while and do while loops:

// let a = 1000;
// while (a <= 10) {
    // console.log(`The number is => ${a}`);
    // a++
// } 

// do {
    // console.log(`the number is ${a}`);
    // a++
// } while (a<=20);

// for loops:

// let myarray = ["flash","ironman","superman",["king","shaktiman"]]

// let myObj = {
//     name:"Surya",
//     age:35,
//     website:"Vs code"
// }

// for (const key of myObj) {
//     console.log(key);
    
// }

const myMap = new Map()
myMap.set("+91", "India")
myMap.set("+1", "Canada")
myMap.set("+92", "Pakistan")

// console.log(myMap);

// const newA = [ "ani@m.com", 26 , true]

// for (const key in newA) {
//     console.log(`${key} => ${newA[key]}`);
    
// }
