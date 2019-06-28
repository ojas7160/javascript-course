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

arrChunk([1, 2, 4, 5, 6, 7, 8], 2)

