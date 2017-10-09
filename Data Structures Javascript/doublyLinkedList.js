function doublyLinkedList(){

	function Node(element){
		this.element = element
		this.next = null
		this.prev = null
	}

	var head = null
	var tail = null
	var length = 0

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


}