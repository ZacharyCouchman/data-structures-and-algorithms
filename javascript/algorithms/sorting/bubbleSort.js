function bubbleSort(arr){
    let noMatch = false;
    for(let i= arr.length; i > 0; i--) {
        noMatch = true;
        for(let j=0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = temp;
                noMatch = false;
            }
        }
        if(noMatch) break;
    }
    return arr;
}

console.log(bubbleSort([4,7,2,8,5]))