
function palindrome(str) {
   
  str = str.replace(/[^0-9a-zA-Z]+/g, '');
  str = str.toLowerCase();

  
  console.log(str)

  var reverse = str.split("");
  reverse = reverse.reverse();
  reverse = reverse.join('');
  console.log(reverse)
  
  if(reverse === str){
    return console.log(true);
  }
  else{
    return console.log(false);
  }
}



palindrome("A man, a plan, a canal. Panama");
