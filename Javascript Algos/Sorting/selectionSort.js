//EXPLANATION
//The selection sort algorithm sorts an array by repeatedly finding the minimum element 
//(considering ascending order) from unsorted part and putting it at the beginning.
// The algorithm maintains two subarrays in a given array.

//1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

//Selection Sort loops through the array and selects the smallest, then places it. Then repeats this

//FACTS
//in place comparison sorting algo
// O(n^2) time complexity
//Inefficient on large lists, and generally performs worse than the similar insertion sort

//SelectionSort runTime
// https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/analysis-of-selection-sort

//OTHER EXPLANATION
// The selection sort improves on the bubble sort by making only one exchange for every
// pass through the list. In order to do this, a selection sort looks for the largest value 
// as it makes a pass and, after completing the pass, places it in the proper location. 
// As with a bubble sort, after the first pass, the largest item is in the correct place.
//  After the second pass, the next largest is in place. This process continues and requires 
//  n−1n−1 passes to sort n items, since the final item must be in place after the (n−1)(n−1) st pass.


// so the idea of selection sort is that we have a sorted subarray and a non sorted sub array
//we loop through the array, keeping track of the index (sorted). we use the first value and index as a starting point
//we then loop through the array again, plus 1 index (unsorted part)
//as we loop through the unsorted part of the array, we compare the current unsorted value with the starting point value(or where we
// are in the sorted array). we update the minIndex based on the smallest value
//once we finish the unsorted iteration, we do a swap with minIndex value and wherever we are in the sorted part of the array.
//update the index of the sorted and we then keep going

// function selectionSort(array){

// 	for(var i = 0; i< array.length; i++){
// 		currentMinIndex = i;
// 		for(var m = i+1; m<array.length; m++){

// 			if(array[m] < array[currentMinIndex]){
// 				//keep track of the smallest index of this pass of i
// 				currentMinIndex=m;
// 			}
// 		}//once we jump out of this iteration, we do any necessary swapping

// 		//as long as i is not = to the currentMinIndex bc you cannot swap if it's the same. 
// 		//this will swap the index we are on as represented as i 
// 		//with the minimum index found on that pass through the array
// 		if(i != currentMinIndex){
// 			temp = array[i]
// 			array[i] = array[currentMinIndex]
// 			array[currentMinIndex] = temp;
// 		}
// 	}

// 	console.log(array)
// }

// var testArr = [12,34,18,3,1,7,6,23,4,9]

// selectionSort(testArr)



function selSort(array){
	//
	for(var i=0; i<array.length; i++){

		currentMinIndex = i;
		for(var m=i+1; m<array.length; m++){
			if(array[currentMinIndex] > array[m]){
				currentMinIndex = m
			}
		}

		//it is possible that currentMinIndex doesn't change bc we can have i can already be less than
		// the rest of the array
		if(i != currentMinIndex){
			//swap the smallest value with what i index we are comparing at
			temp = array[i]
			array[i] = array[currentMinIndex]
			array[currentMinIndex] = temp
		}
	}

	console.log(array)
}


var testarr = [4,7,3,23,9,32]

selSort(testarr);

console.log("hello")