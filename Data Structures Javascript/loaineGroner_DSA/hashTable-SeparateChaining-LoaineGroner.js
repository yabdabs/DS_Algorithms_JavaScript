//Hash table, also known as a Hash Map
//Hashing consists of finding a value in a data structure in the shortest time possible
//when we use a hash function, we already know which position the value is in, 
//so we can simply retrieve it

//A hash function is a function where given a key, it will return an address in the table
//where that value is 

//loose loose hash function ---> sum up the ASCII values of each character(length of the key)

 // We will implement three basic methods for every class: 
 // put(key,value): This adds a new item to the hash table (or it can also update it) 
 // remove(key): This removes the value from the hash table using the key
 // get(key): This returns a specific value searched by the key

//Sometimes different keys can have the same values when hashed. This is called a collision
//There are a few techniques to handle collisions:
// Separate Chaining (covered here). The separate chaining technique consists of creating a linked list for each position of the table and storing the elements in it. It is the simplest technique to handle collisions; however, it requires additional memory outside the HashTable instance
// linear probing (covered here).Another technique of collision resolution is linear probing. When we try to add a new element, if the position index is already occupied, then we will try index +1. If index +1 is occupied, then we will try index + 2, and so on.
// double hashing(not covered here)
var LinkedList = require('./linkedListSingly-loaineGroner.js')

function HashTable(){
	var table = []

	//this hash function is a private method of the HashTable class
	var loseloseHashCode = function(key){
		var hash = 0
		for(var i= 0; i<key.length; i++){
			hash = hash + key.charCodeAt[i]
		}

		// To work with lower numbers, we must use the rest of the division (mod) of the hash number using an arbitrary number.
		return hash%37
	}

	//helper class to represent element we are adding
	var ValuePair = function(key, value){
		this.key = key
		this.value = value
	}	

	this.put = function(key, value){
		var position = loseloseHashCode(key)

		//if there is nothing there, then create the valuePair in that position
		if(!table[position]){
			table[position] = new LinkedList()
		}
		table[position].append(new ValuePair(key,value))
	}

	this.get = function(key){
		var position = loseloseHashCode(key)

		//check is the position is empty/undefined
		if(table[position] != undefined){
			var current = table[position].gethead()
		}

		//my way
		while(current){
			if(current.element.key == key){
				return current.element.value
			}
			current = current.next
		}

		// books way
		// while(current.next){
		// 	if(current.element.key == key){
		// 		return current.element.value
		// 	}
		// 	current = current.next
		// }
		// if(current.element.key == key){
		// 	return current.element.value
		// }
		return undefined
	}

	//we must set as undefined to delete because then other elements won't shift
	//and everything will stay in place
	this.remove = function(key){
		var position = loseloseHashCode(key)

		if(table[position] !=undefined){
			var current = table[position].getHead()

			while(current.next){
				if(current.element.key == key){
					table[position].remove(current.element)
					if(table[position].isEmpty()){
						table[position] = undefined
					}
					return true
				}
				current = current.next
			}

			if(current.element.key == key){
				table[position].remove(current.element)
				if(table[position].isEmpty()){
					table[position] = undefined
				}
				return true
			}
		}
		return false
	}


	this.print = function (){
	  for (var i = 0; i < table.length; ++i){
	    if (table[i] !== undefined){
	      console.log(i + ": " + table[i]); 
	    }  
	  } 
	}
}


var hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com'); 
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com'); 
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com'); 
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com'); 

hash.print()
console.log("hello")















