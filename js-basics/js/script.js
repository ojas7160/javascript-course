console.log('Hello world!!!');

/*
* Variables mutation and coercion
*/

var firstName = 'Ojas';
var age = 24;
var job, isMarried;
job = 'software developer';
isMarried = false;


console.log(firstName + ' ' + age); // this is coercion as it automatically converted into string from a number(age)
console.log(firstName + ' ' + isMarried); // this is coercion as it automatically converted into string from a boolean(age)

//coercion is also possible in undefined

var height = 23;
console.log(height == '23'); // true, == does type coercion converts data type

// Function declaration 
function xyz() {}

// Function expression -> produce immediate result while function declaration donot.
var abc = function xyz () {}

if(true) {console.log('dsassd')}; // statement

/*
* Arrays
*/

var john = new Array();
var a = []
a.push('a') // a = ['a']
a.unshift('b') // a = ['b', 'a']
a.pop() // a = ['b']
a.push('c') // a = ['b', 'c']
a.shift() // a = ['c']

/*
* Objects
*/

// var jane = new Object();
var jane = {
  name: 'Ojaswi',
  birthYear: 1990,
  calcAge: function() {
    this.age = 2019 - this.birthYear
  }
}

jane.calcAge();
console.log(jane);

// Coding challenge
var johnBills = [124, 48, 268, 180, 42]
var johnTrip = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalBillPaid: [],
  calcTip: function() {
    for(var i=0; i<this.bills.length; i++) {
      if(this.bills[i] < 50) {
        this.tips.push({tip1: '20%'});
        this.finalBillPaid.push(this.bills[i] + this.bills[i] * .20);
      }
      else if(this.bills[i] > 50 && this.bills[i] < 200) {
        this.tips.push({tip2: '15%'});
        this.finalBillPaid.push(this.bills[i] + this.bills[i] * .15);
      }
      else if(this.bills[i] > 200) {
        this.tips.push({tip3: '10%'});
        this.finalBillPaid.push(this.bills[i] + this.bills[i] * .1);
      }
    }
  }
}
johnTrip.calcTip();
console.log(johnTrip);
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200

