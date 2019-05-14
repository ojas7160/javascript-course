/*
* let, const, var
* let and const are not function scoped but block scoped
* var is function scoped
*/

//ES5
function driving(passed){
  if(passed) {
    var name = 'ojas'
    var age = 24
  }
  console.log(name + ' ' + age) // ojas 24
}

//ES6
function driving(passed){
  if(passed) {
    const name = 'ojas'
    let age = 24
  }
  console.log(name + ' ' + age) // error because let and const are block scoped
}

// ES6
let i = 23;

for(let i=0; i<5;i++){
  console.log(i) // 0, 1, 2, 3, 4, 23
}

//===========hoisting============
//ES5
function checkHoisting() {
  if(passed) {
    console.log(name) // undefined
    var name = 'ojas'
    var age = 24
  }
  console.log(name + ' ' + age)
}

//ES6
function checkHoisting() {
  if(passed) {
    console.log(name) // error
    const name = 'ojas'
    let age = 24
  }
  console.log(name + ' ' + age)
}

// Template literals in ES6
const firstName = 'ojas'
const lastName = 'wadhwa'
let age = 24

//ES5
console.log('This is ' + firstName + lastName+' .'); // this ia ojas wadhwa

//ES6 
console.log(`This is ${firstName} ${lastName}.`); // this is ojas wadhwa

// Arrow functions

//ES5
var years = [1990, 1991, 1992, 1993, 1994]

var ages5 = years.map(function(year){
  return 2019 - year;
})
console.log(ages5) // [29, 28, 27, 26, 25]

//ES6
let ages6 = years.map((year) => {
  return 2019 - year;
})
var ages6 = years.map(year => 2019 - year) // same as above, no brackets when there's only one argument and no need of curly braces and return when there's only one line of code in it

console.log(ages6) // [29, 28, 27, 26, 25]