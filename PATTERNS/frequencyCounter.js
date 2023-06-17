"use strict";

// Frequency Counter

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequenceCounter1 = {};
  let frequenceCounter2 = {};
  for (let val of arr1) {
    frequenceCounter1[val] = (frequenceCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequenceCounter2[val] = (frequenceCounter2[val] || 0) + 1;
  }

  for (let key in frequenceCounter1) {
    if (!(key ** 2 in frequenceCounter2)) {
      return false;
    }
    if (frequenceCounter2[key ** 2] !== frequenceCounter1[key]) {
      return false;
    }
  }
  return true;
}

// Time complexity O(n)

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9]));    // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
