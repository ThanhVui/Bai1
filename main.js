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
Introduction some  testNames built-in
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

/** ---------------------------------------------------------------------------------- */
/**
 * Toán tử so sánh - p2
 * 
 * ===
 * !==
 */

// var a = 1;
// var b = '1';
// console.log(a === b);

// var a = 1;
// var b = '1';
// console.log(a !== b);

/** ---------------------------------------------------------------------------------- */
/**
 * câu lệnh điều kiện và phép so sánh
 */

// var a = 1;
// var b = 2;
// if (a > b ) {
//     console.log('That\'s right');
// } else {
//     console.log('That\'s wrong');
// }

// var result = 'A' && 'B' && 'C';
// console.log(result);

// var result = null && 'B' && 'C';
// console.log(result);

// var result = null || 'B' || 'C';
// console.log(result);

/** ---------------------------------------------------------------------------------- */
/*
CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
- Các cách tạo chuỗi
- Nên dùng cách nào? Lý do?
- Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6
*/

// var fullName = 'ThanhVui'; // should use this way
// var firstName = new String('Vui');

// var backslash = 'This is backslash \\ \' @ *; " ] {} : | ';
// console.log(backslash);


// var legthString = 'Thanh Vui Dep Trai';
// console.log(legthString.length);

// var firstName = 'Vui';
// var lastName = 'Thanh';
// console.log('My name is ' + firstName + ' ' + lastName);
// console.log(`My name is ${firstName} ${lastName}`); // this is call template string es6


/** ---------------------------------------------------------------------------------- */
// LÀM VIỆC VỚI CHUỖI

// var myString = 'Hoc JS tai F8! JS';

// Keyword: Javascript string methods

// 1. Length
// console.log(myString.length);

// 2. Find index
// console.log(myString.indexOf('JS'));
// console.log(myString.indexOf('JS', 6));
// console.log(myString.lastIndexOf('JS'));
// console.log(myString.search('JS'));

// 3. Cut string
// console.log(myString.slice(4, 6)); // cut string from left to right
// console.log(myString.slice(-6, -4)); // cut string from right to left


// 4. Replace
// console.log(myString.replace('JS', 'Javascipt'));
// console.log(myString.replace(/JS/g, 'Javascipt')); // use regular expression


// 5. Convert to upper case
// console.log(myString.toUpperCase());

// 6. Convert to lower case
// console.log(myString.toLowerCase());

// 7. Trim
// console.log(myString.trim());

// 8. Split
// console.log(myString.split(' '));
// console.log(myString.split(''));

// 9. Get a character by index
// console.log(myString.charAt(13));
// console.log(myString[2]);

/** ---------------------------------------------------------------------------------- */
/*
Kiểu số (Number) trong Javascript

1. Tạo giá trị Number
- Các cách tạo
- Dùng cách nào? Tại sao?
- Kiểm tra data type

2. Làm việc với Number
- To string
- To Fixed

*/

// var age = 20;
// var pi = 3.587492;
// var number = new Number(19);

// console.log(age);

// var result = 30 / 'abs';
// console.log(isNaN(result));

// console.log(age.toString());

// console.log(pi.toFixed(3)); // round up or down for number

/** ---------------------------------------------------------------------------------- */

/*
Mång trong Javascript - Array

1. Tạo mảng
- Cách tạo
- Sử dụng cách nào? Tại sao?
- Kiểm tra data type?
2. Truy xuất mằng
- Độ dài mảng
- Lấy phần tử theo index

*/

// var myArray = [
//     'javascript',
//     'java',
//     'kotlin',
//     'react native',
//     'dart',
//     120,
//     function() {

//     },
//     {}
// ];

// var myArray2 = new Array (
//     'javascript',
//     'java',
//     'kotlin',
//     'react native',
//     'dart',
//     120,
//     function() {

//     },
//     {}
// );

// console.log(myArray);

// console.log(Array.isArray(myArray));

// console.log(myArray[1]);
// console.log(myArray.length);

/** ---------------------------------------------------------------------------------- */
/*
Làm việc với Array

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

// var myArray = [
//     'javascript',
//     'java',
//     'kotlin',
//     'react native',
//     'dart',
//     120
// ];

// var myArray2 = [
//     'javascript',
//     'java',
//     'kotlin',
//     'react native',
// ];

// console.log(myArray.concat(myArray2));

// console.log(myArray.toString());
// console.log(myArray.join(' - '));

// console.log(myArray.pop());
// console.log(myArray.pop());
// console.log(myArray.pop());

// console.log(myArray.push(4));
// console.log(myArray.push('swift'));

// console.log(myArray.shift());
// console.log(myArray.shift());

// console.log(myArray.unshift('C#', 'HTML'));

// myArray.splice(1, 1, 'Vui');

// console.log(myArray.join(' - '));

/** ---------------------------------------------------------------------------------- */
/*
Hàm (function) trong Javascript

1. Hàm?
- Một khối mã
- Làm 1 việc cụ thể

2. Loại hàm
- Built-in
- Tự định nghĩa

3. Tính chất
- Không thực thi khi định nghĩa
- Sẽ thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về 1 giá trị

4. Tạo hàm đầu tiên
*/

// function myFunction() {
//     alert('This is my function!');
// }
/** ---------------------------------------------------------------------------------- */
// Tham số hàm - Javascript cơ bản

/*
1. Tham số?
- Đi̱nh nghĩa?
- Kiểu dữ liệu?
- Tính private?
- 1 tham số
- Nhiều tham số

2. Truyền tham số
-1 tham số
- Nhiều tham số

3. Arguments?
- Đối tượng arguments
- Giới thiệu vòng for
*/

// function  writeLog(message, message2) {
//     console.log(message);
//     console.log(message2);
// }

// writeLog('My name is Thanh Vui', 'Thanh Vui Tang'); 

// function myFunction() {
//     var myString = '';
//     for(var i of arguments) {
//         myString += ` - ${i}`;
//     }
//     console.log(myString.slice(3));
// }

// myFunction('Slot1', 'Slot2', 32, 324, 'Vui');

// function multipleTwoNumber(a, b) {
//     return a * b;
// }

// var result = multipleTwoNumber(3, 4);

// console.log(result);

// function myFunction() {
//     var fullName = 'ThanhVui';

//     console.log(fullName);
// }


/**
 * Function can not the same if the same name then it will execute 
 * final function same name
 */

// function myFunction() {
//     function myFunction2() {
//         console.log('This is function 2');
//     }

//     myFunction2();
//     myFunction2();
//     myFunction2();
//     myFunction2();
// }

// myFunction();

// function showMessage() { // declare function
//     console.log('Declaration function!');
// }

// var showMessage2 = function testName() { // expression function
//     console.log('Expression function!');
// }

// showMessage();
// showMessage2();

// setTimeout(function testName() {

// });

// var myObject = {
//     myFunction : function testName() {

//     }
// }

/**
 * Polyfill
 */
// if (!String.prototype. includes) {
//     String. prototype. includes = function(search, start) {
//         'use strict';
        
//         if (search instanceof RegExp) {
//         throw TypeError('first argument must not be a RegExp');
//         }
//         if (start === undefined) { start = 0; }
//         return this. index0f(search, start) !== -1;

//     };
// }

/** ---------------------------------------------------------------------------------- */
/**
 * Object in javascript
 */

// var emailKey = 'email';

// var myObject = {
//     // key : value  
//     // property
//     name : 'Thanh Vui',
//     age : 21,
//     address : 'viet nam',
//     // method
//     [emailKey] : 'thanhvuikg100@gmail.com',
//     getName : function() {
//         return this[emailKey];
//     }
// };

// // myObject.email = 'thanhvuikg100@gmail.com';

// // var myKey = 'address';

// delete myObject.age;

// console.log(myObject.getName());
// // console.log(myObject.address);
// // console.log(myObject['address']);
// // console.log(myObject[myKey]);

/** ---------------------------------------------------------------------------------- */
/**
 * Object constructor
 */

// create an object constructor
// function User(firstName, lastName, yob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.yob = yob

//     this.getFullName = function() {
//         return `${this.lastName} ${this.firstName}`
//     }
// }

// var author = new User('Tang', 'Vui', 2003)
// var user = new User('Happy', 'Join', 2003)

// author.title = 'Javascript course'
// user.comment = 'here is comment'

// console.log(author)
// console.log(user)
// console.log(author.getFullName())
// console.log(user.getFullName())

/** ---------------------------------------------------------------------------------- */
/**
 * Object prototype 
 * 
 * what is object prototype
 * when use 
 */

// function MyHouse(root, flood, style) {
//     this.root = root
//     this.flood = flood
//     this.style = style
//     this.getStyleOfHouse = function() {
//         return `${this.flood} ${this.root}`
//     }
// }

// MyHouse.prototype.nameOfStyle = 'Korea'
// MyHouse.prototype.getNameOfMyHouse = function() {
//     return this.nameOfStyle
// }

// var house1 = new MyHouse('wood', 'wall', 'US')
// var house2 = new MyHouse('stock', 'hide', 'Uk')

// // console.log(house1)
// // console.log(house2)

// console.log(house1.getStyleOfHouse())
// console.log(house2.getNameOfMyHouse())

/** ---------------------------------------------------------------------------------- */
/**
 * object date
 */

// var date = new Date()
// // console.log(date)
// var day = date.getDate()
// var month = date.getMonth() + 1
// var year = date.getFullYear()

// console.log(`${day}/${month}/${year}`)

/** ---------------------------------------------------------------------------------- */
/**
 * if else statement
 */

// var date = 3
// if (date === 3) {
//     console.log('Today is tuesday!')
// } else if (date === 4) {
//     console.log('Today is wednesday!')
// } else if (date === 5) {
//     console.log('Today is thirday!')
// } else {
//     console.log('I don\'t know!')
// }

/**
 * switch statement
 */

// var a = 3

// switch(a) {
//     case 2:
//         console.log('Value of a: r')
//         break
//     case 3:
//         console.log('Value of a: x')
//         break    
//     case 4:
//         console.log('Value of a: g')
//         break
//     default:
//         console.log('Dont have value')
// }
// var a = 4

// switch(a) {
//     case 2:
//     case 3:
//     case 4:
//         console.log('Value of a: g')
//         break
//     default:
//         console.log('Dont have value')
// }

/** ---------------------------------------------------------------------------------- */
/**
 * ternary operator
 */

// var course = {
//     name: 'javascript',
//     coin: 0
// }

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coins`)
// // } else {
// //     console.log('Free Course')
// // }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Free Course'
// console.log(result)