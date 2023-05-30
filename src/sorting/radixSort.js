function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for(let i=0; i< arr.length; i++){
      maxDigits = Math.max(digitCount(arr[i]), maxDigits)
  }
  return maxDigits;
}

function radixSort(arr) {
  let m = mostDigits(arr);
  for(let k=0; k<m; k++){
      let buckets = Array.from({length: 10}, () => []);
      for(let i = 0; i < arr.length; i++) {
          let digit = getDigit(arr[i], k);
          buckets[digit].push(arr[i]);
      }
      arr = [].concat(...buckets);
  }
  return arr;
}

radixSort([2,6,4,1,31,5,90,11])
