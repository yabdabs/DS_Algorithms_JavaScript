module.exports = function doublyLinkedList(){

	function Node(element){
		this.element = element
		this.next = null
		this.prev = null
	}

	var head = null
	var tail = null
	var length = 0

	this.append = function(element){
	  let node = new Node(element),
	      current;

	  if (head === null){ //first node on list
      head = node;
      tail = node; //NEW
	  } 
	  else{
	    //attach to the tail node //NEW
	    tail.next = node;
	    node.prev = tail;
	    tail = node;
	  }
	  length++; //update size of list
  };	

	//insert a new element at any position
	this.insert = function(element, position){
		if(postion> 0 && position <= length){
			var node = new Node(element)

			current = head
			previous
			index = 0

			if(position === 0){
				if(!head){
					head = node
					tail = node
				}
				else{
					node.next = current
					current.prev = node
					head = node
				}
			}
			else if(position === length){
				current = tail
				current.next = node
				node.prev = current
				tail = node
			}
			else{
				//else then we are inserting not at the head or the tail
				while(index++ < position){
					//when this loop ends index will be 1 before position
					//and current will be at position,
					//They both start at 1
					previous = current
					current = current.next
				}

				//[previous, insert here(node), current]				
				node.next = current
				current.prev = node
				previous.next = node
				node.prev = previous

			}

			length ++
			return true
		}
		else{
			return false
		}
	}

	this.removeAt = function(position){
		if(position >= 0 & position < length){
			var current = head
			var previous
			var index = 0

			//removing the first node
			if(position === 0){
				//head will be null if there is only one item
				head = current.next

				//if there is only one item, update tail
				if(length === 1){
					tail = null
				}
				else{
					head.prev = null
				}
			}
			else if(position === length-1){
				// remove the tail if it's the last
				current = tail
				tail = current.prev
				tail.next = null
			}
			else{
				//else we are removing not the position nor the tail
				while(index++ < position){
					previous = current
					current = current.next
				}

				previous.next = current.next
				current.next.prev = previous
			}

			//update length
			length--
			return current.element
		}
		else{
			//else nothing has been removed 
			return null
		}
	}

	this.remove = function(element){
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function(element){
	  let current = head,
      index = -1;
	  //check first item
	  if (element == current.element){
      return 0;
	  }
	  index++;
	  //check in the middle of the list
	  while(current.next){

	    if (element == current.element){
	        return index;
	    }
	    current = current.next;
	    index++;
	  }
	  //check last item
	  if (element == current.element){
      return index;
	  }
	  return -1;
  }


  this.isEmpty = function() {
    return length === 0;
  }


  this. size = function() {
    return length;
  }


  this.toString = function(){
	  let current = head,
      s = current ? current.element : '';
    while(current && current.next){
      current = current.next;
      s += ', ' + current.element;
    }
    return s;
  };

  this.inverseToString = function() {
    let current = tail,
      s = current ? current.element : '';
    while(current && current.prev){
      current = current.prev;
      s += ', ' + current.element;
    }
    return s;
  };

  this.print = function(){
    console.log(this.toString());
  };

  this.printInverse = function(){
    console.log(this.inverseToString());
  };

  this.getHead = function(){
    return head;
  };

  this.getTail = function(){
     return tail;
  }
}