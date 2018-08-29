/**
 * Stop Spinning my words
 *
 * Copyright © 2018 . All rights reserved.
 *
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 * 
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 */


function persistence(num) {
  var number = num.toString().split('');
  if(number.length === 1) return 0
  
  var count = 1;
  var flag = true;
  var multiplied = multiplyAndNumber(number);
  while(flag) {
    if(multiplied.length === 1) {
      flag = false
    } else {
      multiplied = multiplyAndNumber(multiplied)
      ++count;
    }
  }
  return count;
}

function multiplyAndNumber(number){
  var initial = 1;
    for(var i = 0; i < number.length; i++){
      initial = initial * parseInt(number[i])
    }
    return initial.toString()
}