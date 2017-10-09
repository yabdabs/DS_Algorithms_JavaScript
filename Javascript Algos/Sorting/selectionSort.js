//EXPLANATION
//The selection sort algorithm sorts an array by repeatedly finding the minimum element 
//(considering ascending order) from unsorted part and putting it at the beginning.
// The algorithm maintains two subarrays in a given array.

//1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

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




function selectionSort(array){

	for(var i = 0; i< array.length; i++){
		currentMinIndex = i;
		for(var m = i+1; m<array.length; m++){

			if(array[m] < array[currentMinIndex]){
				//keep track of the smallest index of this pass of i
				currentMinIndex=m;
			}
		}

		//as long as i is not = to the currentMinIndex bc you cannot swap if it's the same. 
		//this will swap the index we are on as represented as i 
		//with the minimum index found on that pass through the array
		if(i != currentMinIndex){
			temp = array[i]
			array[i] = array[currentMinIndex]
			array[currentMinIndex] = temp;
		}
	}

	console.log(array)
}

var testArr = [12,34,18,3,1,7,6,23,4,9]

selectionSort(testArr)