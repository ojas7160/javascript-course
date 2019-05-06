/*
* Hoisting -> function or object -> they are available before the execution starts
*/

// 1. code is scanned for function declaration: for each function, a property is created in the variable object: pointing to the function
// (which means the function is available in the object before execution)

// 2. code is scanned for variable declaration: for each variable property is created in variable object and set to undefined (its only defined in the execution phase)

calculateAge(1995); // this is hoisting i.e., function call before the function declaration runs fine

function calculateAge(year) {
  console.log(2019 - year);
}
// retirement(1995); // reference error -> as variable is not yet declared

var retirement = function(year) {
  if (2019 - year == 60) {
    console.log('retired')
  }else{
    console.log('not retired')
  }
}

// variable hoisting

var age = 60;// -> global level
console.log(age); // 60

console.log(foo); // undefined -> it means variable is there in memory but not defined yet.
var abc = 9;

function foo() {
  console.log(age); // undefined
  var age = 80; // -> function level
  console.log(age); // 80
}
foo();
console.log(age); // 60
// This is because age is defined at global level



/*
* Scoping 
* 1. Each new function creates a new scope
* 2. lexical scoping ->
* JS supports scoping in nested functions like if we defines a variable in parent function and 
* there's another function in it and we call the same variable defined in parent function, it will execute fine
* (locally defined variables are not visible to parent scope)
*/
// Lexical scoping example
var a = 'Hello';
first();
function first() {
  var b = 'Hi';
  second();
  function second() {
    var c = 'Hey';
    console.log(a + b + c); // Hello Hi Hey
  }
}

///////////////////////
var a = 'hey';
first()
function first(){
  var b = 'hello';
  second();
  function second() {
    var c = 'hi';
    third()
  }
}
function third (){
  var d = 'ojas';
  // console.log( a + b + c + d) // error b and c are not defined, as b and c are not in the scope of third function they are just visible to first and second function
}

// order in which functions are called != order in which function written lexically


/*
* This variable
* 1. regular function call -> points to global defined variable(window variable).
* 2. method calling -> points to the object that is calling the method.
* 3. the this variable is not assigned a value until a function where it actually defined is called.
* rule -> when this is called from a regular function it always prints window object
* this is only assign a value when a object calls a method
*/

calculateAge(1995);

function calculateAge(year) {
  console.log(this); // prints window object as it is called as global function
}
var age = 30;
var john = {
  name: 'ojas',
  year: 1995,
  age: 24,
  calculateAge: function() {
    console.log(this); // prints john object, as this is called from john object
    function innerFun() {
      console.log(this); // prints window object as is a regular function
      console.log(this.age); // 30 as it is called from regular function so it points to the age variable defined in window
    }
    innerFun();
  }
}
john.calculateAge();