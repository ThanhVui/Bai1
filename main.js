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
/** ---------------------------------------------------------------------------------- */
/*
Vòng lặp - Loop 
    1. for - Lặp với điều kiện đúng
    2. for/in - Lặp qua key của đối tượng
    3. for/of - Lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó
    lặp khi điều kiện đúng
*/
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

// var myArray = [
//     'javascript',
//     'java',
//     'kotlin',
//     'react'
// ]

// var arrayLength = myArray.length

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i])
// }

// var myInfo = {
//     name: 'javascript',
//     age: 21,
//     adress: 'kotlin'
// }

// for (var key in myInfo) {
//     console.log(myInfo[key]) // return value of object
//     // console.log(key) // return key of object
// }

// var myArray = [
//     'javascript',
//     'java',
//     'kotlin',
//     'react'
// ]


// for (var key in myArray) {
//     console.log(myArray[key])
// }

// var fullName = 'Tang Thanh Vui'
// for (var key in fullName) {
//     console.log(fullName[key])
// }

// var fullName = 'Tang Thanh Vui'
// for (var value of fullName) {
//     console.log(value)
// }

// var myInfo = {
//     name: 'Thanh Vui',
//     age: 21
// }

// console.log(Object.keys(myInfo))
// console.log(Object.values(myInfo))

// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }
// for (var value of Object.keys(myInfo)) {
//     console.log(value)
// }

// var myArray = [
//     'javascript',
//     'java',
//     'kotlin',
//     'react'
// ]

// var i = 0 
// while (i < myArray.length) {
//     console.log(myArray[i])
//     i++
// 

// var i = 0
// do {
//     i++
//     console.log(i)
// } while (i < 10)

// var i = 0
// var isSuccess = false

// do {
//     i++
//     console.log('Times: ' + i)

//     if (false) {
//         isSuccess = true
//     }
// } while (!isSuccess && i <= 3)

// for (var i = 0; i < 10; i++) {
//     console.log(i)

//     if (i >= 5) {
//         break;
//     }
// }

// for (var i = 0; i < 10; i++) {
//     if (i % 2 != 0) {
//         continue
//     }

//     console.log(i)
// }

// var myLocation = [
//     [1, 2],
//     [3, 4], 
//     [6, 9]
// ]

// for (var i = 0; i < myLocation.length; i++) {
//     for (var j = 0; j < myLocation[i].length; j++) {
//         console.log(myLocation[i][j])
//     }
// }

// for (var i = 100; i >= 0; i -= 5) {
//     console.log(i)
// }

/** ---------------------------------------------------------------------------------- */
/**
 * Array methods:
    forEach()
    every()
    some ()
    find()
    filter()
    map ()
    reduce ()
 */
// var courses = [
//     {
//         id: 1,
//         name: 'javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'java',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'kotlin',
//         coin: 4
//     },
//     {
//         id: 4,
//         name: 'react',
//         coin: 2
//     },
//     {
//         id: 5,
//         name: 'nodejs',
//         coin: 0
//     }
// ]

// courses.forEach(function(index, course) {
//     console.log(index, course) // course is a element of the array
// })

// var isFree = courses.every(function(course) {
//     return course.coin === 0
// })
// console.log(isFree)

// var isFree = courses.some(function(course) {
//     return course.coin === 0
// })
// console.log(isFree)

// var couseFree = courses.find(function(course) {
//     return course.coin === 0
// })
// console.log(couseFree)

// var couseFree = courses.filter(function(course) {
//     return course.coin === 0
// })
// console.log(couseFree)

// function courseHandle(course) {
//     // console.log(course)
//     return {
//         id: course.id,
//         name: `Course Name: ${course.name}`,
//         coin: course.coin,
//         coinText: `Price: ${course.coin}`,
//     }
// }

// function courseName(course) {
//     // console.log(course)
//     return `Course Name: ${course.name}`
    
// }

// var newCourse = courses.map(courseName)

// console.log(newCourse.join('\n'))

// var totalCoin = 0
// for (var course of courses) {
//     totalCoin += course.coin
// }

// console.log('Total Coin: ' + totalCoin)

// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, orginArray) {
//     i++
//     var total = accumulator + currentValue.coin

//     console.table({
//         'Run times: ': i,
//         'Store variable: ': accumulator,
//         'Price: ': currentValue.coin,
//         'total store: ': total
//     })
//     console.log(currentValue)

//     return total
// }

// var totalCoin = courses.reduce(coinHandler, 0)
// console.log(totalCoin)


// var totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex, orginArray) {
//     return accumulator + currentValue.coin
// }, 0)
// console.log(totalCoin)

// var totalCoin = courses.reduce((a, b) =>
//     a + b.coin, 0)
// console.log(totalCoin)


// var numbers = [100, 200, 300, 400, 500]
// var totalCoin = numbers.reduce(function(total, number) {
//     return total + number
// })
// console.log(totalCoin)

// var numbers = [100, 200, 300, 400, 500]
// var totalCoin = numbers.reduce((total, number) =>
//     total + number
// )
// console.log(totalCoin)

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem)
// }, [])
// console.log(flatArray)

// var topics = [
//     {
//         topic: 'font-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS'
//             },
//             {
//                 id: 2,
//                 title: 'javascript'
//             }
//         ]
//     },
//     {
//         topic: 'back-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'PHP'
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             }
//         ]
//     }
// ]

// var newCourse = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses)
// }, [])
// console.log(newCourse)

// var htmls = newCourse.map(function(course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `
// })

// console.log(htmls.join(''))

/** ---------------------------------------------------------------------------------- */
/**
 * includes method
 */
// var title = 'Responsive wed design'
// console.log(title.includes('wed design', 0))

// var languages = [
//     'javascript',
//     'kotlin',
//     'dart'
// ]
// console.log(languages.includes('kotlin'))

/** ---------------------------------------------------------------------------------- */
/*
Math object
- Math.PI
- Math. round ()
- Math.abs ()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/

// console.log(Math.PI)
// console.log(Math.round(3.5))
// console.log(Math.abs(-3.4))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.1))
// console.log(Math.floor(Math.random() * 10))

// // var ramdom = Math.floor(Math.random() * 5)
// // var bonus = [
// //     '10 coin',
// //     '20 coin',
// //     '30 coin',
// //     '40 coin',
// //     '50 coin'
// // ]
// // console.log(bonus[ramdom])

// var ramdom = Math.floor(Math.random() * 100)
// if (ramdom < 5) {
//     console.log('Corgratolation!')
// }

// console.log(Math.min(-100, 20))
// console.log(Math.max(-100, 20))

/** ---------------------------------------------------------------------------------- */
/**
 * Call back (function)
 * 
 * - is function 
 * - passy by argument
 */

// function myFunction(param) {
//     console.log(param)
// }
// myFunction(123)

// function myFunction(param) {
//     param('Study Programing')
// }

// function myCallBack(value) {
//     console.log('Value: ', value)
// }

// myFunction(myCallBack)

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]
// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join('\n'))

// Array.prototype.map2 = function(callBack) {
//     var arrayLength = this.length
//     var output = []

//     for (var i = 0; i < arrayLength; i++) {
//         var result = callBack(this[i], i)
//         output.push(result)
//     }

//     return output
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// // courses.map2(function(course, index) {
// //     console.log(index, course)
// // })

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join('\n'))

/** ---------------------------------------------------------------------------------- */
/**
 * Array methods:
    forEach()
    every()
    some ()
    find()
    filter()
    map ()
    reduce ()
 */
// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]
// courses.length = 10
// // for (var i = 0; i < courses.length; i++) {
// //     console.log(courses[i])
// // }

// for (var index in courses) {
//     console.log(courses[index])
// }

// var courses = new Array(10)
// courses.push('Javascript', 'java', 'kotlin')
// console.log(courses)

// for (var index in courses) {
//     console.log(courses[index])
// }

// Array.prototype.forEach2 = function(callBack) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callBack(this[index], index, this)
//         }
//     }
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array)
// })