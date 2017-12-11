/* Write a recursive function power(x, n) that returns the value of xn (assume that n is an integer). 
Here are the 4 following cases that you need to handle. */ 

/*
1. Base Case

Start by writing the base case. x^0 = 1 for any value of x.

2. Recursive case: n is odd. If n is positive and odd, recursively compute x^n-1, so that the exponent either is 0 or is positive and even. Then, x^n = x^n-1 ⋅ x

In this step, write the recursive case for which n is odd. Assume you have a function isOdd() to check if n is odd.

3. Recursive case: n is even. If n is positive and even, recursively compute y = x^n/2, and then x^n = y ⋅ y. Notice that you can get away with making
 just one recursive call in this case, computing x^n/2 just once, and then you multiply the result of this recursive call by itself.

In this step, write the recursive case for which n is even. Assume you have a function isEven() to check if n is even.

4. Recursive case: n is negative. If n is negative, recursively compute x^-n, so that the exponent becomes positive. Then, x^n = 1/x^-n.

In this step, write the recursive case for which n is negative. Compute x raised to -n recursively, 
and return the reciprocal of that number.
*/


var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n === 0){
        return 1; 
     }
    // recursive case: n is negative
    if(n < 0){
    	//we put -n here because we want to make it positive.  
        return 1/power(x,-n);
    }
    // recursive case: n is odd
    if(isOdd(n)){
        return x * power(x, n-1);
     }
    // recursive case: n is even
    if(isEven(n)){
        var m= power(x, n/2);
        return m*m;
    }
};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
displayPower(3, 1);
displayPower(3, 2);
displayPower(3, -1);