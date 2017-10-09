//We'll pass you an array of two numbers. 
//Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

var sum;
var index;

function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max= Math.max(arr[0], arr[1]);
  
  // console.log(min);
  // console.log(max);
  
  index= min +1;
  sum = min + (index);
  index++;
  while(index<=max){
    sum = sum + index;
    index++;
  }
  
  console.log(sum);

  

}

sumAll([4, 1]);
