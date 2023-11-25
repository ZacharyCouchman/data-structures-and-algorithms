package main

import (
	"fmt"
	"zc/dsa/go/algorithms"
)

func main() {
	testArr := []int{5, 4, 3, 2, 1, 6, 7, 8, 9, 10}

	fmt.Println(algorithms.BubbleSort(testArr))
}
