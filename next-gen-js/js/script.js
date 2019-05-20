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

// Arrow function share lexical scope for this keyword
// example

// ES5
var box5 = {
  boxNo: 1,
  position: 1,
  color: 'green',
  clickMe: function(){
    var self = this;
    document.querySelector('green').addEventListener('click', function(){
      console.log(this.boxNo + ' ' + this.color); // undefined because this points to the current object and it points to the callback object so undefined
      console.log(self.boxNo + ' ' + self.color); // 1 green
    });
  }
}
// box5.clickMe();

//ES6
const box6 = {
  boxNo: 1,
  position: 1,
  color: 'green',
  clickMe: function(){
    document.querySelector('green').addEventListener('click', () => {
      console.log(this.boxNo + ' ' + this.color); // 1 green because anonymous function share lexical scope of this
    });
  }
}

//ES5
function person(name) {
  this.name = name;
}

person.prototype.myFriend5 = function(friends) {
  var arr = friends.map(function(fr){
    return this.name + ' ' + fr; // here same, this keyword will not point to different scope.
  }.bind(this)); // bind, call, apply help to share the this scope.
  console.log(arr)
}

var friends = ['bob', 'mary', 'sane', 'jane']

new person('john').myFriend5(friends);

//ES6

person.prototype.myFriend6 = function(friends) {
  var arr = friends.map((fr) => {
    return this.name + ' ' + fr; // here same, this keyword will not point to different scope.
  }); // bind, call, apply help to share the this scope.

  var arr = friends.map((fr) => `${this.name} ${fr}`);
  console.log(arr)
}
new person('john').myFriend6(friends);

/*
* Destructing 
*/

//ES5
var john = ['john', 24]
var name = john[0];
var age = john[1];

var obj = {
  firstName: 'john',
  lastName: 'smith'
}

//ES6
const john = ['john', 24];
const [name, age] = john
console.log(name) // john
console.log(age) // 24

var obj = {
  firstName: 'john',
  lastName: 'smith'
}

const {firstName, lastName} = obj
const {firstName: a, lastName: b} = obj
console.log(a, b) // john smith

function calcAge(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65-age];
}

const [age2, retirement] = calcAge(1995);
console.log(age2) // 24
console.log(retirement) // 41

/*
* Arrays
*/

//ES5
var boxes = document.querySelector('.box');

var boxes5 = Array.prototype.slice.call(boxes); // make array
boxes5.forEach(function(box) {
  box.style.backgroundColor = 'dodgerBlue';
})

//ES6
const boxes6 = Array.from(boxes)
boxes6.forEach(cur => { cur.style.backgroundColor = 'dodgerBlue'})

//===== loops ======
//ES5
for(var i=0; i<boxes5.length; i++) {
  if(boxes5[i].className == 'box blue') {
    continue;
  }
  boxes5[i].textContent = 'I changed the text';
}

//ES6
for(const curr in boxes6) {
  if(curr.className.includes('blue')){
    continue;
  }
  curr.textContent = 'I changed the text';
}

//====== spread operator ===========
//ES5
function ages(a, b, c, d) {
  return a+b+c+d;
}

var calcAges = ages(1, 2, 3, 4);
console.log(calcAge);

var ages2 = [2, 3, 4, 5]
var calcAges2 = ages.apply(null, ages2)
console.log(calcAges2);

//ES6
var ages3 = ages(...ages2);

var arr1 = ['ojas', 'wadhwa', 'parth']
var arr2 = ['parth', 'wadhwa', 'ojas']

var arr3 = [...arr1, ...arr2]; // ojas wadhwa parth parth wadhwa ojas 

/*
* Rest parameters
*/

//ES5
function fullAge5() {
  console.log(arguments); // [1990, 1999, 1995] -> not an array actually
  var argArr = Array.prototype.slice.call(arguments);
  argArr.forEach(function(cur) {
    console.log((2019 - curr) > 18);
  })
}

fullAge5(1990, 1999, 1995);

//ES6
function fullAge6(...years) {
  console.log(years) // [1990, 1999, 1995] -> an array actually, so no need to transform
}

fullAge6(1990, 1999, 1995);

/*
* Classes with subclasses (Inheritance)
*/

//ES5
var person5 = function (name, job, yearOfBirth){
  this.name = name
  this.job = job
  this.yearOfBirth = yearOfBirth
}

person5.prototype.calcAge5 = function(){
  return new Date.getFullYear() - this.yearOfBirth
}

var athlete5 = function(name, job ,yearOfBirth, olympicGames, medals){
  person5.call(this, name, job, yearOfBirth, olympicGames, medals);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

athlete5.prototype = Object.create(person5.prototype);
var john5 = new athlete5('john', 'swimmer', 1995, 'swimming', 10);
john5.calcAge5(); // 24 -> inheritance calcAge5 is a function of person class

//ES6

class person6 {
  constructor(name, job, yearOfBirth){
    this.name = name;
    this.job = job
    this.yearOfBirth = yearOfBirth
  }
  calcAge6 = function(){
    return new Date.getFullYear() - this.yearOfBirth
  }
  
}

class athlete6 extends person6{
  constructor(name, job, yearOfBirth, olympicGames, medals){
    super(name, job, yearOfBirth)
    this.olympicGames = olympicGames
    this.medals = medals
  }

  wonMedals = function(){
    console.log('won 10 medals');
  }
}

const john6 = new athlete6('john', 'swimmer', 1995, 'swimming', 10);
john6.calcAge6();
john6.wonMedals();

