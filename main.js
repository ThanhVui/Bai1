/** ---------------------------------------------------------------------------------- */
// Display on screen basic
// alert('Hello Welcome To Javasccript');

// declare variable
// var fullName = 'Tang Thanh Vui';
// var age = 21;

// alert(fullName);
// alert(age);
// alert(fullName + " - " + age);

/** ---------------------------------------------------------------------------------- */
/*
Introduction some functions built-in
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval
*/

// console.log('This is message for user!');

// var fullName = 'Tang Thanh Vui';
// console.log(fullName);

// var wrong = 'Some thing wrong with code!';
// console.warn(wrong);

// var wrong = 'Some thing wrong with code!';
// console.error(wrong);

// confirm('You Confirm Your Age Is Greater Than 18!');

// prompt('Please enter your age!');

// setTimeout(function() {
//     alert('Notification!');
// }, 4000);

// setInterval(function() {
//     alert('This is setInterval');
// }, 2000);

/** ---------------------------------------------------------------------------------- */
/*
Giới thiệu về toán tử trong Javascript
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assignment
3. Toán tử so sánh - Comparison
4. Toan tử logic - Logical 
*/

// var a = 1;
// var b = 2;
// if (a < b) {
//     alert('That\'s right');
// }

// var a = 1;
// var b = 2;
// if (a > 0 && b > 0) {
//     alert('That\'s right!' + ' a and b greater than 0!');
// }

/** ---------------------------------------------------------------------------------- */
/** Toán tử số học
+           -- > Cộng
-           -- > Trừ
*           -- > nhân
**          -- > Lũy thừa
/           -- > Chia
%           -- > Chia lấy số dư
++          -- > Tăng 1 giá trị số
--          -- > Giảm 1 giá trị số
*/

// var a = 2;
// var b = 4;
// a--;
// console.log(a ** b); 

// var a = 2;
// var b = 4;
// console.log(a ** ++b); 

// var a = 2;
// // var output = a++;
// var output = ++a;
// console.log('Output: ' + output);
// console.log('a: ' + a);

// var a = 6;
// // var output = a++ + --a;
// // //             6   +   6
// var output = ++a * 2 - a--;
// //            7 *  2 - 7 
// console.log('Output: ' + output);

/** ---------------------------------------------------------------------------------- */
/**
 * String operator
 */

// var firstName = 'Vui';
// var lastName = 'Tang';
// console.log(firstName + " " + lastName);

// var firstName = 'Vui';
// firstName += ' Tang'
// console.log(firstName);

// var a = 1;
// var b = 2;
// if (a > 0 && b > 0) {
//     console.log('That\'s right!' + ' a and b greater than 0!');
// } else {
//     console.log('That\'s wrong')
// }

// var a = 'Thanh Vui';
// var b = 'thanh vui';
// if (a = 0) {
//     console.log('That\'s right!');
// } else {
//     console.log('That\'s wrong');
// }

/** ---------------------------------------------------------------------------------- */
/**
 * Boolean
 */

// var isSuccess = true;
// console.log(isSuccess);

// var a = 1;
// var b = 2;
// var isSuccess = a < b;
// console.log(isSuccess);

/** ---------------------------------------------------------------------------------- */
/**
 * if else statement
 * 
 * some conditions is false
 * 0
 * true, false
 * undefined
 * NaN
 * null
 */

// var a = true;
// if (a) {
//     console.log('That\'s right!');
// } else {
//     console.log('That\'s wrong');
// }

/** ---------------------------------------------------------------------------------- */
/**
 * logic
 * && - And
 * || - Or
 * ! - Not
 */

// var a = 1;
// var b = 2;
// if (a > 0 && b > 0) {
//     alert('That\'s right!' + ' a and b greater than 0!');
// }

// var a = 1;
// var b = 2;
// if (a > 0 && !(b == 0)) {
//     alert('That\'s right!' + ' a and b greater than 0!');
// }

/** ---------------------------------------------------------------------------------- */
/*
Kiểu dữ liệu trong Javascript

1. Dữ liệu nguyên thủy - Primitive Data
- Number
- String
- Boolean
- Undefined
- Null
- Symbol

2. Dữ liệu phức tạp - Complex Data
- Function
- Object
*/

// // Number
// var a = 1;
// var b = 8;
// var c = 3.4;

// // String
// var fullName = 'Thanh Vui';
// var firstName = 'Vui';
// // Check type of data
// console.log(typeof fullName);

// // Boolean
// var isSuccess = true;
// var isSuccess1 = false;

// // Undefined
// var age;

// // Null
// var name = null;


// // Symbol 
// var id = Symbol('id'); // return a unique value
// var id1 = Symbol('id'); // return a unique value

// // define a function - define
// var myFunction = function() {
//     alert('Below is my function!');
// }
// // call function 
// myFunction();
// // Check type of data
// console.log(typeof myFunction);



// // Object
// var myObject = {
// //  key : value    // Separate by commas
//     name : 'Thanh Vui',
//     age : 21,
//     address : 'Kien Giang',
//     myFunction : function() {
//         alert('Thanh Vui');
//     }
// };
// // Call my Object
// console.log('My Object: ', myObject);

// // Array
// var myArray = [
//     'Javascript',
//     'C#',
//     'C++',
//     'HTML'
// ];
// // Call array
// console.log(myArray);
// // Check type of data
// console.log(typeof myArray);
