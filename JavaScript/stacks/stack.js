
// Last-in, first-out (LIFO)

class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }

  pop() {
    return this.dataStore[--this.top];
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }

  store() {
    console.log(this.dataStore);
  }

}

// *****************************************
//              Example Usage
// *****************************************

// Palindromes

function isPalindrome(word) {
  let stack = new Stack();

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }

  let reverseWord = '';

  while(stack.length() > 0) {
    reverseWord += stack.pop();
  }

  if (word === reverseWord) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
}

isPalindrome('racecar'); // 'racecar is a palindrome'
isPalindrome('apple'); // 'apple is not a palindrome'


// Recursion

function factorial(n) {
  let stack = new Stack();

  while(n > 1) {
    stack.push(n--);
  }
  let product = 1;

  while(stack.length() > 0) {
    product *= stack.pop();
  }

  return product;
}

console.log(`factorial result: ${factorial(5)}`); // 'factoral result: 120'
console.log(`factorial result: ${factorial(0)}`); // 'factoral result: 1'
