function pivot(arr, start=0, end=arr.length-1) {

  function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;
  // if we start at the start of the array
  for(var i = start + 1; i < arr.length; i++) {
      if(pivot > [arr[i]]) {
          swapIdx++;
          swap(arr, i, swapIdx);
      }
  }

  // swap start with swapIdx
  swap(arr, start, swapIdx);
  
  return swapIdx;
}

function quickSort(arr, left = 0, right=arr.length-1) {
  if(left < right) {
      let pivotIdx = pivot(arr, left, right);
      quickSort(arr, left, pivotIdx-1);
      quickSort(arr, pivotIdx+1, right);
  }
  return arr;
}

quickSort([21, 45,2,6,12,57,84,34,65]);