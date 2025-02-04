// function fun1(){
//     console.log("i am invoked");
// }
// //fun1();

// let greet = function fun1(name) {
//     return `welcome ${name}`;
// };

// function findDuplicates(arr) {
//     let duplicates = [];
//     let seen = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         if (seen.has(arr[i])) {
//             duplicates.push(arr[i]);
//         } else {
//             seen.add(arr[i]);
//         }
//     }
//     return duplicates;
// }

// let sampleArray = [1, 2, 3, 4, 5, 1, 2, 6];
// console.log(findDuplicates(sampleArray));

// //let nameless = (name) => {
// //    return "hello"+name;
// //}

// //let nameless = (name) => "hello"+name;

// //both are equal symentically
// const isGreaterThan = (element, threshold) => element > threshold;

// const Arr = (arr, threshold) => arr.filter(element => isGreaterThan(element, threshold));

// let sampleArr = [1, 1, 2, 3, 4, 2, 3];
// let threshold = 3;
// let filteredArray = Arr(sampleArr, threshold);
// console.log(filteredArray);

//high order function

// let multiply = function(a,b){return a*b};
// let add = function(a,b){return a+b};
// let manipulator=function(val1,val2,func){
//     return func(val1,val2);
// }
// console.log(manipulator(2,3,multiply));
// //using arrow function
// let multiply = (a, b) => a * b;
// let add = (a, b) => a + b;
// let manipulator = (val1, val2, func) => func(val1, val2);
// console.log(manipulator(2, 3, multiply));

//function within function ---> closure

// function counter(){
//     let count = 0;
//     return function(){
//         return ++count;
//     };
// };
// let increment = counter();
// console.log(increment());

// const counter = () => {
//     let count = 0;
//     return () => count++;
// };

// in closure function there can be more than one function

// function duplicateCounter() {
//     let duplicates = [];
//     let seen = new Set();
//     return function(arr) {
//         arr.forEach(item => {
//             if (seen.has(item)) {
//                 duplicates.push(item);
//             } else {
//                 seen.add(item);
//             }
//         });
//         return duplicates;
//     };
// }

// let findDuplicates = duplicateCounter();
// let sampleArray = [1, 2, 3, 4, 5, 1, 2, 6];
// console.log(findDuplicates(sampleArray));

function mul(...val)
{
    return val.reduce((val1,res)=>res*val1,1);
}
console.log(mul(1,4,5));
//when u need one element from the array always use "reduce"

