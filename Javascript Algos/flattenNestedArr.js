// Write a JavaScript function to flatten a nested array. For instance, flatten
// ([1, 2, 3, [4, 5, [6], [ ] ] ]) should return [1, 2, 3, 4, 5, 6] 

flattenArr = (arr) =>{

	const flattenedArr = []
 
 	// could have used forEach
	for(var i = 0; i<arr.length; i++){
		if(Array.isArray(arr[i])){
			// console.log(arr[i])
			console.log('flattenedArr before', flattenedArr)
			console.log('...flattenedArr before', ...flattenedArr + '\n')
			flattenedArr.push(...flattenArr(arr[i]))
			console.log('flattenedArr after', flattenedArr)
			console.log('...flattenedArr c after', ...flattenedArr + '\n')
		}
		else{
			console.log('inside of else', arr[i])
			flattenedArr.push(arr[i])
		}
		
	}

	return flattenedArr

}//end function

console.log(flattenArr([1, 2, 3, [4, 5, [6], [ ] ] ])) //length is 4
// flattenArr([4, 5, [6], [ ] ] ) //length is 4