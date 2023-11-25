function collectOddValues(arr) {
  let newArr = [];

  if(arr.length === 0) {
      return newArr;
  }

  if(arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

let testValues = [];
let n = 100000;

for(let i = 1; i<= n; i++) {
  testValues.push(i);
}

let t1 = performance.now();
console.log(collectOddValues(testValues))

let t2 = performance.now()

console.log(`Time Elapsed: ${t2-t1} ms`)