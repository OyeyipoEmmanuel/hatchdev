// O of 1
const arr = [1, 2, 3];
const value = arr[0];

function isOdd(num: number): number {
  if (num % 2 != 0) {
    return num;
  }

  return -1;
}
console.log(isOdd(6));

// O of n
function sumOfArray(arr: number[]) {
  let sum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfArray([1,2,3,4,5])

// O log n
function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1; //[1,2,3,4,5]

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;  // Not found
}