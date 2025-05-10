// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna college",
//   () => {
//     console.log(`Success: Your data was saved.`);
//     savetoDb(
//       "Hello World",
//       () => {
//         console.log("Success2 : Data2 saved");
//         savetoDb(
//           "shradha",
//           () => {
//             console.log("Success3 : Data 3 saved");
//           },
//           () => {
//             console.log("Failure3 : Weak connection.");
//           }
//         );
//       },
//       () => {
//         console.log("Failure2 : Weak Connection.");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: weak connection. Data not saved.");
//   }
// );          // CALLBACK HELL !!!

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 3) {
//       resolve("Success : Data was saved.");
//     } else {
//       reject("Failure : Data not saved.");
//     }
//   });
// }

// // // req = promise object
// // savetoDb("Apna College").then(() => {
// //     console.log("Promise was resolved");
// //   })
// //   .catch(() => {
// //     console.log("Promise was rejected");
// //   });

// savetoDb("Apna College")
//   .then(() => {
//     console.log("Data1 saved.");
//     return savetoDb("Hello world")
//   })
//   .then(()=>{
//     console.log("Dat2 saved.");
//     return savetoDb("shradha");
//   })
//   .then(()=>{
//     console.log("Data3 saved.");
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });
// way better than the above code(callback hell) - both do the same task, but this one is more straightforward and readable [easy to understand]