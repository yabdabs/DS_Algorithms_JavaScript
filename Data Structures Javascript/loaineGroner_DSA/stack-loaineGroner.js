//A stack is an ordered collection of items that follows the LIFO principle(Last In First Out)
//the addition of new items and removal of existing items takes place at the same end of the stack
//the end of the stack is known as the top and the opposite side is known as the base
//[1,2,4,5,6,7] index that holds 7 value is the top and first index is the base
// newest elements are near the top and oldest at the base

//A stack is used by compilers in programming langugaes and by computer memory to store variables 
//and method calls

function Stack(){

	//stores elements of out stack
	var items = [] 

	this.push = function(element){
		items.push(element)
	}

	this.pop = function(){
		return items.pop()
	}

	this.peek = function(){
		return items[items.length -1]
	}

	this.isEmpty = function(){
		if(items.length !=0){
			return false
		}
		else{
			return true
		}
	}

	this.clear = function(){
		items = []
	}

	this.size = function(){
		return items.length
	}

	this.print = function(){
		console.log(items.toString())
	}
}

var stack = new Stack()

stack.push(5)
stack.push(8)

console.log(stack.isEmpty())
console.log(stack.peek())

stack.push(11)
stack.print()
stack.pop()
stack.print()