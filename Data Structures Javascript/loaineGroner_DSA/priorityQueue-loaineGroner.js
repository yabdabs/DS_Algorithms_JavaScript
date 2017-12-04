//elements are added and removed based on priority

//2 Options
//1. set the priority and add the element at the correct position
//2. queue the elements as they are added to the queue and remove them accoriding to the priority


//Will use the option to add the element to it's correct position

function PriorityQueue(){
	var items = []

	//constructor for queue Element?
	function QueueElement(element, priority){
		this.element = element
		this.priority = priority
	}

	this.enqueue = function(element, priority){
		var queueElement = new QueueElement(element, priority)

		//first check the items array is empty
		//if it is, just push the queue element
		if(items.length == 0){
			items.push(queueElement)
		}
		else{
			var itemAdded = false

			for(var i = 0; i< items.length; i++){
				if(queueElement.priority < items[i].priority){
					// .slice(start, deleteCount, item1)
					items.splice(i, 0, queueElement)
					itemAdded = true
					break;
				}
			}

			if(itemAdded == false){
				items.push(queueElement)
			}//end for loop
		}//end else
	}// end enqueue function

	this.print = function(){
		console.log(items)
	}
} //end PriorityQueue contstuctor function

var PQ = new PriorityQueue()

PQ.enqueue("get a job", 1)
PQ.enqueue("get jacked", 1)
PQ.enqueue("fuck bitches", 2)
PQ.enqueue("go on vacation", 5)
PQ.enqueue("third", 3)
PQ.print()
