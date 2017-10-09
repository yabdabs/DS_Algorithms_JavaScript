// algorithm for finding a target number in a sorted array

// The total time cost of binary search is O(log2n)
//https://www.interviewcake.com/article/javascript/logarithms

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