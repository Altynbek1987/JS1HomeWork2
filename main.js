
let count = "*";
for(let i = 0; i < 8; i++){
        if (count.length != 8) {
                console.log(count);
                count += "*";      
        }
}
//=========================================

// const fizz = "Fizz";
// const buzz = "Buzz";
// for (let i = 1; i <= 100; i++) {
//         if (i % 15 == 0) {
//                 console.log(fizz + buzz);      
//         }  
//         else if (i % 5 == 0) {
//                 console.log(buzz);
//         }
//         else if (i % 3 == 0) {
//                 console.log(fizz);      
//         }
//         else{
//                 console.log(i);
//         }   
// }

//=========================================

// var value1 = "# ";
// var value2 = " #";
// var first = " ";
// var second = " ";
// for (var i = 0; i < 8; i++) {
//         first += value1;
//         second += value2;
// }
// for (var j = 0; j < 8; j += 1) {
//         if (j % 2 != 0) {
//           console.log(first);
//         } else {
//           console.log(second);
//         }
//       }