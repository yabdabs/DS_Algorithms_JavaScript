// A queue is an ordered collection of items that follows the FIFO principal(First in First Out)
//addition of new elements is at the tail and removal is at the front
//the newsest item of the queue must wait at the end of the queue 

//Examples include waiting in line for movie tickets, grocery shopping etc..

//[1,2,4,5,6,7,8]
//index that holds the 8 value is the tail end
//1ndex that holds the 1 value is the front. This element gets removed first

function Queue(){
	var items = []

	//adds an item or more to the back of the queue
	this.enqueue = function(elements){
		items.push(elements)
	}

	//removes the first item of the queue(item in front) and returns the removed element
	this.dequeue = function(elements){
		return items.shift()
	}

	this.front = function(){
		return items[0]
	}

	this.isEmpty = function(){
		return items.length == 0
	}

	this.size = function(){
		return items.length
	}

	this.print = function(){
		console.log(items.toString())
	}
}

// var queue = new Queue()

// queue.enqueue(2)
// console.log(queue.isEmpty())
// queue.enqueue(3)
// queue.enqueue(4)
// queue.print()

// console.log("front: " + queue.front())

// console.log(queue.dequeue())
// queue.print();


//IMPLEMENTING THE CIRCULAR QUEUE - HOT POTATOE
//numList is the list of people, number is the time number we will use to decide who's getting out at what time
function hotPotato(nameList, number){

	var queue = new Queue()

	//fill the queue
	for(var i = 0; i< nameList.length; i++){
		queue.enqueue(nameList[i])
	}

	var eliminated = ''
	while(queue.size() > 1){
		for(var i = 0; i<number; i++){
			//this is what allows for the simulation of a circular hot potatoe. 
			//first person is removed, and then added to the back of the list
			//this happends until we reach 'number' in the for loop
			queue.enqueue(queue.dequeue())
		}

		//once 'number' is reached, the for loop ends and we eliminate whoever is at the front of the array.
		//the person at the front of the arrary always has the hot potatoe in this game
		eliminated = queue.dequeue()
		// console.log(`${eliminated} has been eliminated!`)
	}

	// queue.print()
	// console.log(`${queue.front} is the winner!`)
	queue.print()
	return queue.dequeue()
}

var names = ['yaba', 'sameer', 'sameerah', 'eb', 'mom', 'dad']
var winner = hotPotato(names, 230929)
console.log(winner)
