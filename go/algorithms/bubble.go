package algorithms

/*
	loop through array from start to finish
	loop through again from start to length - 1 (as we're comparing the current item with next item)
	compare first two items, if current > next -> swap places
	iterate until no more swaps
	return early if an entire pass has no swaps
*/

func BubbleSort(arr []int) []int {

	for i := 0; i < len(arr); i++ {
		hasSwapped := false
		for j := 0; j < len(arr)-1; j++ {
			if arr[j] > arr[j+1] {
				// swap
				// fmt.Printf("swapping %v with %v \n", arr[j], arr[j+1])
				tmp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = tmp
				hasSwapped = true
			}
		}
		if !hasSwapped {
			// fmt.Println("breaking early")
			return arr
		}
	}
	return arr
}
