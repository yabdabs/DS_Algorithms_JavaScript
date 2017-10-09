
function titleCase(str) {
  str = str.split(" ");
  //or /[^\w']+/) inside parenthesis

  // console.log("line 5")
  // console.log(str)
  // console.log(str.length)


  for(var i=0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
	console.log(str);
  }

  str= str.join(" ")

  return str;
 
}

titleCase("I'm a little TeA pot");

