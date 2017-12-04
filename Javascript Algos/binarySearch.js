// algorithm for finding a target number in a sorted array

// The total time cost of binary search is O(log2n)
//https://www.interviewcake.com/article/javascript/logarithms

 // Fortunately, there's a mathematical function that means the same thing as the number of times we repeatedly halve, 
 // starting at n, until we get the value 1: the base-2 logarithm of n. We write it as lg n. 
 // (You can learn more about logarithms here.)
 // https://www.educative.io/collection/page/10370001/760001/1250001

function binarySearch(sortedArr, targetNumber){

	var maxIndex = sortedArr.length - 1; 
	var minIndex = 0;

	// this will always take the middle of our range of indexes
	var currentIndex = (minIndex + maxIndex)/2;

	while(minIndex <= maxIndex){

		if(targetNumber < sortedArr[currentIndex]){
			//update our maxIndex that we want to include in the search
			maxIndex = currentIndex -1
			currentIndex = Math.round((minIndex + maxIndex)/2)
		}
		else if(targetNumber > sortedArr[currentIndex]){
			//update the minIndex that we want to include in the search
			minIndex = currentIndex + 1
			currentIndex = Math.round((minIndex + maxIndex)/2)
		}
		else if(targetNumber === sortedArr[currentIndex]){
			return console.log(`${sortedArr[currentIndex]} was found!`)
		}
	}

	//this means that the number was not found in the sorted array
	return console.log(-1)
}

var sortedArray = []

for(var i = 0; i<=1000; i++){
	sortedArray.push(i);
}

binarySearch(sortedArray, 690);