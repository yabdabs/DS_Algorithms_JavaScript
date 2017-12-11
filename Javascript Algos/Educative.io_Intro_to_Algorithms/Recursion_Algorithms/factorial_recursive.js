// Here is the basic idea behind recursive algorithms:

// To solve a problem, solve a subproblem that is a smaller 
// instance of the same problem, and then use the solution 
// to that smaller instance to solve the original problem.

//In order for a recursive algorithm to work, the smaller subproblems must eventually arrive at the base case.


// We can distill the idea of recursion into two simple rules:

// Each recursive call should be on a smaller instance of the same problem, that is, a smaller subproblem.
// The recursive calls must eventually reach a base case, which is solved without further recursion.

var factorial = function(n) {
  // base case: 
  //we return 1 because 0! is 1
  //1! = 1
  if(n === 0){
    return 1 
  }
  // recursive case:
  else{
   return n * factorial(n-1) 
  }
};


console.log(factorial(5)) //120