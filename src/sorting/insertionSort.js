function insertionSort(arr){
  for(var i=1; i<arr.length; i++) {
      var currVal = arr[i];
      for(var j = i-1; j >= 0 && arr[j] > currVal; j--) {
          arr[j+1] = arr[j];
          console.log(arr)
      }
      arr[j+1] = currVal;
  }
  return arr;
}

insertionSort([6,3,8,4,7,1,6,4])