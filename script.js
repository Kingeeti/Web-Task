// console.log('I am initial');
// setTimeout(function() {
//   console.log('I am inside');
// }, 2000);
// console.log('I am ending');

// console.log("before");
// function fecthUser(){
//     setTimeout(function () {
//         //console.log("i am inside");
//         return{
//             name:"geeti",
//         age:"20"}
//     },2000);
//     const returnedUser=fetchUser();
//     console.log(returnedUser);
//     console.log("end")}

// console.log("before");
// fetchUser(123,function(user){
//     console.log(user);
// });

// function fetchUser(userid,callback){
//     setTimeout(function () {
//        const fetchedUser={
//         id:userid,
//         name:"geeti",
//         email:"geeti@gmail.com",
//         age:"20"
//        };
//        callback(fetchedUser);
//     },2000);
// }
// console.log("end");

// console.log("before");
// function sendEmail(userEmail,callback){
//     setTimeout(function () {
//         const response = {
//             status:true
//         }
//         callback(response);
//     },3000);
// }
// sendEmail('geeti@gmail.com', function(response) {
//   console.log(response);
// });
// console.log("end");

// console.log("before");
// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         reject ( new Error("something went wrong"));
//         // resolve(1);
//     },2000);
// });
// console.log(promise);
// promise.then(function(val){
//     console.log(val);
// });
// promise.catch(function(err){
//     console.log(err);
// });

// const getAPI = fetch('https://api.github.com/users/kingeeti');
// console.log(getAPI);
// getAPI.then((res)=>console.log(res));
// getAPI.catch((err)=>console.log(err));