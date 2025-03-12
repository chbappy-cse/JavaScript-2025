/**
 * Traverse Array Elements
 */

// const arr = [1, 2, 3, 4, 5, 6];
const arr = [47, 105, 78, 63, 99, 14, 55, 99];

// Simple Traverse
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Array Sum & Avg
let sum = 0;
for(let i = 0; i < arr.length; i++){
//    sum = sum + arr[i];
   sum += arr[i];
}
console.log(sum);
console.log(sum / arr.length);


// Find Large Number
let largeNumber = arr[0];
for(let i = 1; i < arr.length; i++){
    if (arr[i] > largeNumber) {
        largeNumber = arr[i];
    }
}
console.log(largeNumber);

// Find Small Number
let smallNumber = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i] < smallNumber){
        smallNumber = arr[i];
    }
}
console.log(smallNumber);
