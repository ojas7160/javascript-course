/*
* Reverse a string
*/

function reverse(str){
  var reversedStr;
  reversedStr = str.split('').reverse().join(''); 
  return reversedStr;
}

// or --------

function reverse(str){
  var reversedStr;
  for(let char of str){
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

// or ---------

function reverse (str){
  var reversedStr;
  return str.split('').reduce((reversed, char) => {
    return char + reversedStr; 
  }, '');                                                     
}

reverse('ojas');

/*
* Palindrome
* palindrome('abba') == true
* palindrome('abcdef') == false
*/

function palindrome(str){
  var result;
  if(str.length%2 == 0){
    if((str.substring(0, str.length/2)) == (str.substring(str.length/2, str.length).split('').reverse().join(''))){
      result = true;
    }else{
      result = false;
    }
  }else{
    result = false;
  }
  return result;
}

// or ----------

function palindrome(str){
  var reversed = str.split('').reverse().join('')
  return str == reversed;
}

// Array.every = arr.every((x) => x>10);

// or -------
function palindrome(str){
  return str.every((char, i) => {
    return char == str[(str.length - i) - 1];
  })
}

palindrome('ojaajo')

/*
* reverse integer
* Math.sign(number) => if positive return +1, if negative return -1
*/

function reverseNumber(number){
  var reversed = number.split('').reverse().join('');
  if(parseInt(reversed) < 0){
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}

// or ------

function reverseNumber(number){
  var reversed = number.split('').reverse().join('');
  return parseInt(reversed) * Math.sign(number);
}

reverseNumber(899)

/*
* maxChar
* maxChar('abccccccd') == c
*/

function maxChar(str){
  var charMap = {};
  var max = 0;
  var maxChar = '';
  for(let c of str){
    if(charMap[c]){
      charMap[c]++
    }else{
      charMap[c] = 1;
    }
    // charMap[s] = charMap[c] + 1 || 1
  }
  for(let char in charMap){
    if(charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

maxChar('abcccdddddd')

/*
* fizzbuzz
*/

function fizzBuzz(n){
  for(var i=1; i<=n; i++){
    if(i%3 == 0 && i%5 != 0){
      console.log('fizz')
    }else if(i%5 == 0 && i%3 != 0){
      console.log('buzz')
    }else if(i%3 == 0 && i%5 == 0){
      console.log('fizzbuzz')
    }else{
      console.log(i)
    }
  }
}

fizzBuzz(n);

/*
* array chunks
* chunkArr([1, 2, 3, 4, 5, 6, 7, 8], 2) => [[1, 2], [3, 4], [5, 6], [7, 8]]
* chunkArr([1, 2, 3, 4, 5, 6, 7], 2) => [[1, 2], [3, 4], [5, 6], [7]]
*/

function arrChunk(arr, chunkSize){
  const chunked = []
  for(let el of arr){
    const last = chunked[chunked.length - 1];
    console.log(last)
   if(!last || last.length == chunkSize){
     chunked.push([el])
   } else {
     last.push(el);
   }
  }
  return chunked;
}

// or ------------

function arrChunk(array, size){
  const chunked = []
  let index = 0

  while(index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

arrChunk([1, 2, 4, 5, 6, 7, 8], 2)

/*
* anagrams
* check whether the two different strings have same number of characters.
*/

function checkAnagrams(str1, str2){
  return str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') == str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// or--------------

function checkAnagrams(str1, str2){
  const charMap1 = buildCharMap(str1)
  const charMap2 = buildCharMap(str2)

  if(Object.keys(charMap1).length != Object.keys(charMap1).length){
    return false;
  }

  for(let char in charMap1){
    if(charMap1[char] != charMap2[char]){
      return false;
    }
  }

  return true;
}

function buildCharMap(str1){
  const charMap = {}

  for(let c of str1.replace(/[^\w]/g, '').toLowerCase()){
    charMap[c] = charMap[c] + 1 || 1
  }
  return charMap;
}

checkAnagrams("rail safety", "fairy tales");

/*
* capitalize string
* capitalize('a lazy fox') => A Lazy Fox
*/

function capitalize(str){
  const words = [];
  for(let char of str.split(' ')){
    words.push(char[0].toUpperCase() + char.slice(1))
  }

  return words.join(' ');
}

// or---------

function capitalize(str){
  var result = str[0].toUpperCase();

  for(var i=1; i<str.length; i++){
    if(str[i-1] == ' '){
      result += str[i].toUpperCase();
    }else{
      result += str[i]
    }
  }
  return result
}

capitalize('a lazy fox');

/*
* steps question
* steps(2) -> '# '
*             '##'
* steps(3) -> '#  '
*             '## '
*             '###'
*/

function steps(number){
  for(var row=0; row<number; row++){
    let stair = ''
    for(var column=0; column<number; column++){
      if(column <= row){
        stair += '#'
      }else{
        stair += ' '
      }
    }
    console.log(stair)
  }
}

steps(3)

// or--------

function steps(n, row=0, stair=''){
  if(n == row){
    return;
  }

  if(n == stair.length){
    console.log(stair)
    return steps(n, row+1);
  }

  if(stair.length <= row){
    stair+= '#'
  }else{
    stair+= ' '
  }

  steps(n, row, stair)
}

/*
* pyramids steps
*/

function pyramids(n){
  const midpoint = Math.floor((2*n - 1) / 2);
  for(let row=0; row<n; row++){
    var level = ''
    for(let column=0; column< (2*n)-1; column++){
      if(midpoint - row <= column && midpoint + row >= column){
        level += '#'
      }else{
        level += '-'
      }
    }
    console.log(level)
  }
}

// or---------------

function pyramids(n, row=0, level=0){
  if(row == n){
    return;
  }

  if(level.length == 2*n -1){
    return pyramids(n, row++);
  }
  const midpoint = Math.floor((2*n-1)/2);
  let add;
  if(midpoint - row <= level.length && midpoint + row >= level.length){
    add = "#"
  }else{
    add =' '
  }
  return pyramids(n, row, level+add);
}

/*
* counting vowels in string
*/

function countVowels(str){
  var count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // for(let i=0; i<str.length; i++){
  for(let char of str.toLowerCase()){
    // str[i].toLowerCase()
    if(vowels.indexOf(char) > -1){
      count += 1;
    }

    //or-----

    if(vowels.includes(char)){
      count += 1;
    }
  }
  return count;
}

//or ----------

function countVowels(str){
  const matches = str.match(/[aeiou]gi/);
  return matches ? matches.length : 0
  // str.match() returns NO when there's no match found
}

countVowels('Ojaswi Wadhwa')

/*
* spiral steps
*[[1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]]
*/

function spiralSteps(n){
  let startRow = 0
  let startColumn = 0
  let endRow = n - 1;
  let endColumn = n - 1;
  let counter = 1;
  let results = []

  for(var i=0; i<n; i++){
    results.push([])
  }

  while(startRow <= endRow && startColumn <= endColumn){

    //Top row
    for(let i=startColumn; i<=endColumn; i++){
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right column
    for(let i=startRow; i<=endRow; i++){
      results[i][endColumn] = counter;
      counter++;
    }

    endColumn--;
    for(let i=endColumn; i>=startColumn; i--){
      results[endRow][i] = counter;
      counter++
    }
    endRow--;
    for(let i=endRow; i>=startRow; i--){
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  console.log(results);
  return results;
}

/*
* Fibonacci series
* [0, 1, 1, 2, 3, 5, 8, 13, 21, ...]
*/

function fib(n) {
  var arr = [0, 1]
  for(var i=2; i<n; i++){
    if(arr[arr.length - 1] <= 21)
      arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  return arr;
}

// or -----------

function fib(n) {
  var arr = [0, 1]
  for(var i=2; i<n; i++){
    const a = arr[i - 1];
    const b = arr[i - 2];
      arr.push(a+b);
  }
  return arr;
}

//or ---------------

function fib(n) {
  if(n < 2){
    return n;
  }

  return fib(n-1) + fib(n-2);
}

fib(21);

// Memoization(faster version) means if function of evaluation is already been done then just retrieve if from there no need to do that again
function memoize(fn){
  const cache = {};
  return function(...args){
    if(cache[args]){
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function slowFib(n) {
  if(n < 2){
    return n;
  }

  return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib)

/*
* Queue
* to add into the queue use arr.unshift(data)
* to remove use arr.pop()
*/

class Queue{
  constructor(){
    this.data = []
  }

  add(record){
    this.data.unshift(record);
  }

  remove(){
    this.data.pop()
  }

  peek(){
    return this.data[this.data.length - 1];
  }
}

// weave
function weave(queueOne, queueTwo){
  const q = new Queue();

  while(queueOne.peek() || queueTwo.peek()){
    if(queueOne.peek()){
      q.add(queueOne.remove());
    }

    if(queueTwo.peek()){
      q.add(queueTwo.remove());
    }

    return q;
  }
}

weave([1, 2, 3, 4], [5, 6, 7,8])

/*
* stack
*/

class Stack{
  constructor(){
    this.data = []
  }

  add(record){
    this.data.push(record);
  }

  remove(){
    this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }
}

// Linked List
class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next
  }
}

class LinkedList { 
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // or
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node){
      counter += 1;
      node = node.next;
    }
    return counter;
  }

  getFirst(){
    return this.head;
    // or
    this.getAt(0);
  }

  getLast() {
    let node = this.head;

    while(node) {
      if(!node.next){
        return node;
      }

      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return;
    }

    this.head = this.head.next;
    // or
    this.removesAt(0);
  }

  removeLast() {
    if(!this.head){
      return
    }

    if(!this.head.next){
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;

    while(node.next){
      previous = node;
      node = node.next
    }
    previous.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    if(last) { 
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0

    while(node) {
      if(counter == index){
        return node;
      }
      counter += 1;
      node = node.next;
    }
    return null;
  }

  removesAt(index) {
    if(!this.head){
      return;
    }

    if(index == 0){
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(index - 1)
    if(!previous || !previous.next){
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }

    if(index == 0){
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(index - 1) || this.getLast();
    let node = new Node(data, previous.next);
    previous.next = node;
  }

  findMidPoint(list){
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  circular(list){
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
        return true;
      }
    }

    return false;
  }

  fromLast(list, n){
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(n > 0){
      fast = fast.next;
      n--;
    }

    while(fast.next){
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
  }
}

/*
* trees
* breadth-first traversal - left to right
* depth-first traversal - top to bottom
*/

class Node{
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children.filter((el) => {
      return data == el;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn){
    const arr = [this.root];

    while(arr.length > 0){
      const node = arr.shift();
      if(node.children.length > 0){
        arr.push.apply(arr, node.children);
        // ------   or -------
        arr.push(...node.children);
        fn(node);
      }
    }
  }

  traverseDF(fn){
    const arr = [this.root];

    while(arr.length > 0){
      const node = arr.shift();
      if(node.children.length > 0){
        arr.unshift(...node.children);
        fn(node);
      }
    }
  }
}

const node = new Node(20);
const tree = new Tree();
tree.root = node;

// Level Width

function levelWidths(root) {
  const counters = [0];
  const arr = [root, 's'];

  while(arr.length > 1){
    const node = arr.shift();
    if(node == 's'){
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

/*
* Binary Search tree
*/

class Node {
  constructor(data){
    this.left = null;
    this.right = null;
    this.data = data;
  }

  insert(data) {
    if(data < this.data && this.left){
      this.left.insert(data);
    } else if(data < this.data){
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data){
      this.right = new Node(data);
    }
  }

  contains(data) {
    if(this.data == data) {
      return this;
    }

    if(this.data > data && this.left){
      return this.left.contains(data);
    } else if(this.data < data && this.right){
      return this.right.contains(data);
    }

    return null;
  }
}

/*
* Sorting
* bubble sort - n^2
* selection sort - n^2
* merge sort - n*log(n)
*/

function bubbleSort(arr){
  for(var i=0; i<arr.length; i++){
    for(var j=0; j<(arr.length - i) - 1; j++){
      if(arr[j] > arr[j+1]){
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    } 
  }

  return arr;
}

function selectionSort(arr){
  for(var i=0; i<arr.length; i++){
    let indexOfMin = i;

    for(var j=i+1; j<arr.length; j++){
      if(arr[j] < arr[indexOfMin]){
        indexOfMin = j;
      }

      if(indexOfMin != i){
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
      }
    }
  }
}

function mergeSort(arr) {
  if(arr.length == 1){
    return arr;
  }

  const center = math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  const results = [];

  while(left.length && right.length){
    if(left[0] < right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}
