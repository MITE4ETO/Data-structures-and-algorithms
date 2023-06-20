/*
// Not very optimized solution, down will show the optimized solution 
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
           if(arr[j] > arr[j+1]){
            // SWAP
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
           }
        }
         
    }
    return arr;
}
*/

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j,j+1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37, 45, 12, 15, 30]));

/*
// ES5
function swap1(arr, idx11, idx22) {
    let temp = arr[idx11];
    arr[idx11] = arr[idx22];
    arr[idx2] = temp;
}



// ES2015
const swap = (arr, idx1, idx2) => {
[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}



// OLD WAY 

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;


// New ES6 way

let e = 50;
let t = 100;

[e, t] = [t, e];

console.log(e, t);
*/
