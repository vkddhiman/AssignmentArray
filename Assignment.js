const arr=[2,5,33,26,79]

let maxValue = arr[0];
  for ( let i = 0 ; i <= arr.length; i++) {
    if(arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

console.log(maxValue);