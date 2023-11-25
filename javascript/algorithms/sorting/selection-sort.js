function selectionSort(arr){
  for(let i = 0; i < arr.length; i++) {
      let min = i; // reset min
      for(let j = i+1; j < arr.length; j++) {
          // find index of min in this pass
          if(arr[j] < arr[min]) {
              min = j;
          }
      }
      if(i !== min){
        // swap i with min
          console.log('swap')
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;  
      }
  }
  return arr;
}

console.log(selectionSort([4,7,2,3,9,8,6,7]))