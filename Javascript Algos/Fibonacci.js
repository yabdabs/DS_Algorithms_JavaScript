// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...

// After a quick look, you can easily notice that the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3 or in maths:
// F(n) = F(n-1) + F(n-2)


// http://thatjsdude.com/interview/js1.html#fibonacci
//run time complexity == 0(n)
function fibo(n){
	var fibo =[0,1]

	if(n<=2){
		return 1
	}

	for(var i=2; i <= n; i++){
		fibo[i] = fibo[i-1] + fibo[i-2]
	}

	return fibo[n]
}
console.log(fibo(12))


// http://thatjsdude.com/interview/js1.html#fibonacci
//using recursion
//time complexity 0(2^n)
function fiboR(n){
	if(n <=1){
		return n
	}
	else{
		return fiboR(n-1) + fiboR(n-2)
	}
}

console.log(fiboR(12))


//iterative solution using array/object destructuring (es6)
// time complexity 0(n)
// https://www.gregjs.com/javascript/2016/writing-a-fibonacci-implementation-in-javascript/
function fibIterative(n){
	let [a,b] = [1,0]

	while(n>0){
		[a,b] = [a+b, a]
		n--
	}
	

	//TEST/Run Through
	// [a,b] = [1, 0] 
	//start
	// [1, 1]
	// [2, 1]
	// [3, 2]
	// [5, 3]
	// [8, 5]

	//we return b because the while loop stops after 1/ at 0. b holds the previous value of a, 
	//which is the number we want

	return b
}

console.log(fibIterative(12))

//recursive using es6
// https://www.gregjs.com/javascript/2016/writing-a-fibonacci-implementation-in-javascript/+
function fibR2(n, a=1, b=0){
	if(n===0){
		return b
	}
	else{
		return fibR2(n-1, a+b, a)
	}
}