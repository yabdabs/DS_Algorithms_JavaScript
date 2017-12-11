/* In this challenge, you'll make it so the isPalindrome() function returns true if 
the provided string is a palindrome, and false otherwise. Here are the cases that we need to handle. */

/*let's say that any string containing at most one letter is a palindrome.
That's our base case: a string with exactly zero letters or one letter is a palindrome.*/

// How would we describe that in pseudocode?

/* If the string is made of no letters or just one letter, then it is a palindrome.
 Otherwise, compare the first and last letters of the string */

/* If the first and last letters differ, then the string is not a palindrome.
Otherwise, the first and last letters are the same. Strip them from the string,
and determine whether the string that remains is a palindrome. */

/* Take the answer for this smaller string and use it as the answer for the original string. */



// Base case #1

// Start by implementing the first base case: if the length of the string is 0 or 1, isPalindrome() should return true.

// Base case #2

// If the first and last characters of the string are different, then we know immediately that the string is not a palindrome. 

// Recursive case

// Finally, write the recursive case. Remove the first and last characters from the string and call isPalindrome function with the remaining string.



var isPalindrome = function(str) {
  //# base case #1
  if(str.length == 0 || str.length == 1){
    return true 
  }
  //# base case #2
  if(str.charAt(0) != str.charAt(str.length-1)){
   return false
  }
  // recursive case
  else{
   //take off first letter and last letter
   var str = str.substring(1, str.length -1)
   return isPalindrome(str)
  }
};

isPalindrome(motor)
isPalindrome(rotor)
isPalindrome(racecar)
isPalindrome(foobar)

// Expected Output
// false
// true
// true
// false
