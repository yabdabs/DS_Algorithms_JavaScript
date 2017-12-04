// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) 
// one item at a time. It is much less efficient on large lists than more advanced algorithms 
// such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

//This algorithm is often compared to how as human we would sort a card game for example.


//ALGORITHM
// i ← 1
// while i < length(A)
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
//     i ← i + 1
// end while

function insertionSort(arr){

	//index that we will start at with each iteration
	var currentIndex = 1; 

	var comparisonIndex; 

	while(currentIndex < arr.length){
		comparisonIndex = currentIndex

		while(comparisonIndex >0 && arr[comparisonIndex-1] > arr[comparisonIndex]){
			var temp = arr[comparisonIndex]
			arr[comparisonIndex] = arr[comparisonIndex-1]
			arr[comparisonIndex-1] = temp

			comparisonIndex = comparisonIndex-1
		}
		currentIndex++;
	}

	return arr
}

function insertionSort2(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

var arr =[1,4,6,63,7,20,23,2];

// console.log(insertionSort(arr))



function is(array){

	for(var i = 0; i<array.length; i++){
		var j = i - 1
		var temp = array[i]

		while(temp< array[j] && j>=0){
			array[j+1] = array[j]
			j--
		}
		array[j+1] = temp
	}
	return array
}

console.log(is(arr))