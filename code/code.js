// 1
const friends = ["Ali", "Atheer", "Jack"];

// For each friend in friends, print "Hi friendName!"
// Write loop
// for loop
// console log

for (let i = 0; i < friends.length; i++) {
  console.log("Hi " + friends[i]);
}

// 2
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = [];

// Go through nums
// Multiply each element by 100
// Add the result to times100
// Write loop
// Loop through nums
// Take the number
// Multiply by 100
// Push to times100
function multiplyBy100(num) {
  return num * 100;
}

for (let i = 0; i < nums.length; i++) {
  let result = multiplyBy100(nums[i]);
  times100.push(result);
}



// 3
// Thats an array with crazy numbers we cant read 😯
const crazyNums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

// Sum all the numbers in crazyNums and save the result in total
// Write loop
// total <-- 1026175.4078926536
// Write a function that takes a number and adds the value to total


// First
for (let i = 0; i < crazyNums.length; i++) {
  total = total + crazyNums[i];
}

// Second
function addToTotal(num) {
  total = total + num;
}

for (let i = 0; i < crazyNums.length; i++) {
  addToTotal(crazyNums[i]);
}


// 4
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = [];

// century20 should be: [1989, 2000, 1999, 1973]
// Write loop
// 20th century 1901-2000
// Loop through years
// if year GREATER than 1900 AND SMALLER than 2001
// Add it to century20


function century20Year(year) {
  if (year > 1900 && year < 2001) {
    century20.push(year);
  }
}

for (let i = 0; i < years.length; i++) {
  century20Year(years[i]);
}


forEach()

// 1
const friends = ["Ali", "Atheer", "Jack"];

// For each friend in friends, print "Hi friendName!"
// Write loop
// for loop
// console log

function sayHi(name) {
  console.log("Hi " + name);
}

friends.forEach(sayHi);

// 2
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = [];

// Go through nums
// Multiply each element by 100
// Add the result to times100
// Write loop
// Loop through nums
// Take the number
// Multiply by 100
// Push to times100
function multiplyBy100(num) {
  times100.push(num * 100);
}
nums.forEach(multiplyBy100);



// 3
// Thats an array with crazy numbers we cant read 😯
const crazyNums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

// Sum all the numbers in crazyNums and save the result in total
// Write loop
// total <-- 1026175.4078926536
// Write a function that takes a number and adds the value to total
// use forEach

function addToTotal(num) {
  total = total + num;
}

// arrayName.forEach(functionName)
crazyNums.forEach(addToTotal);


// 4
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = [];

// century20 should be: [1989, 2000, 1999, 1973]
// Write loop
// 20th century 1901-2000
// use forEach


function century20Year(year) {
  if (year > 1900 && year < 2001) {
    century20.push(year);
  }
}

// arrayName.forEach(functionName)
years.forEach(century20Year);


// 5
const nums = [1, 2, 3, 4, 5];

// print all numbers

const printNums = (num) => {
  console.log(num);
}

nums.forEach(printNums);


// map()

// 6
// write a function called addFive
// that adds 5 to any number (it takes one argument)
// use arrow notation

// use forEach on the following list
const nums = [1, 2, 3, 4, 5];
let numsPlus5 = [];

function addFive(num) {
  return num + 5;
}

// arrayName.map(functionName)
numsPlus5 = nums.map(addFive);


// 2
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = [];

// Go through nums
// Multiply each element by 100
// Add the result to times100
// use map()

function multiplyBy100(num) {
  return num * 100;
}

// resultArray = arrayName.map(functionName)
times100 = nums.map(multiplyBy100);