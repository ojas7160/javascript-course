/*
* 1. JS is a prototype language so that's why it supports inheritance using prototypes 
* it means each and every object in js has prototype property.
* 2. prototype property of an object is where we put methods and properties so that other objects can inherit it.
* 3. inheritance search: own object -> parent object(Object object) -> null
*/

var john = {
  name: 'john',
  age: 20,
  yearOfBirth: 1995,
  job: 'Teacher'
}

var Person = function(name, yearOfBirth, job) { // constructor function
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

// prototype inheritance
Person.prototype.calculateAge = function(){
  console.log(2019-this.yearOfBirth)
}
Person.prototype.lastName = 'smith'

var john = new Person('john', 1995, 'developer')
console.log('----')
john.calculateAge();

console.log(john.lastName); //smith

john.__proto__ === Person.prototype // true
john instanceof Person // true

/*
* Object.create
*/

var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
}

// this way to create object helps us in inheritance with the help of prototype rather function constructor way
var john = Object.create(personProto)
john.name = 'ojas'
john.job = 'developer'
john.yearOfBirth = 1995

var jane = Object.create(personProto, {
  name: {value: 'Wadhwa'},
  job: {value: 'developer'},
  yearOfBirth: {value: '1999'}
})


/*
* Primitives vs Objects
* string, boolean, undefined, null, number -> are primitives else all are objects
* we do not pass object to a function, its just a reference that points to that function
*/

/*
* functions are also objects
*/

var years = [1990, 1991, 1992, 1993, 1994]

function ageCalc(arr, fn) {
  var ages = []
  for(var i=0; i<arr.length; i++) {
    ages.push(fn(arr[i]));
  }
  return ages;
}

function calcAge(year){
  return 2019 - year;
}

var allAges = ageCalc(years, calcAge);
console.log(allAges);

/*
* Functions returning functions
*/

function interviewQues(job) {
  if(job == 'developer') {
    return function(name) {
      console.log(name + ' -> ' + job)
    }
  }else if(job == 'designer') {
    return function(name) {
      console.log(name + ' -> ' + job)
    }
  }else {
    return function(name) {
      console.log('nalla');
    }
  }
}

var johnDev = interviewQues('developer');
johnDev('ojas') // ojas -> developer

interviewQues('developer')('ojas') // ojas -> developer

/*
* IIFE -> immediately invoked function expression
* we can call iife only once 
* this cant be reuse, its just for data privacy as it does not interfere any global variables
*/

(function(){ 
  // because in js whatever is in the parenthesis can not be declaration it treats it as expression
  var score = Math.random() * 10;
  console.log(score);
})();

(function(goodluck){
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);

/*
* Closures
* means an inner function has always access to the parameters and variable of its outer function, even after the outer function has returned.
* because of scope chaninig as variable defined resides in scope chaining while functions get removed from booth/
*/

function outerFunction(abc) {
  console.log(abc);
  return function(xyz) {
    console.log(abc + xyz);
  }
}

var hello = outerFunction('ojas')
hello('wadhwa');
outerFunction('ojas')('wadhwa') ;

/*
* Call, bind, apply
* method borrowing with call
* bind -> makes a copy of a function to use it after
*/

var john = {
  name: 'ojas',
  age: 24,
  job: 'developer',
  presentation: function(style, timeOfDay) {
    if (style == 'formal'){
      console.log(style +' '+ timeOfDay);
    }else if(style == 'casual') {
      console.log('hello' + style + ' ' + timeOfDay);
    }
  }
}
john.presentation('formal', 'evening');

var emily = {
  name: 'wadhwa', 
  job: 'software',
  age: 23
}

// call(this, other arguments) first paramter should be 'this'
john.presentation.call(emily, 'casual', 'morning'); // function borrowing

// john.presentation.apply(emily, ['casual', 'morning']) // this is same as call but this accepts array argument

var ojasObj = john.presentation.bind(this, 'formal');
console.log(ojasObj('morning'));