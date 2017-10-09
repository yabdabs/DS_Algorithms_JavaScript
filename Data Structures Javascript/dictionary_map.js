// A dictionary is used to store[key,value] pairs, where the key is used to find a particular element	
//similar to a set, where a set stores [key, key] collection of elements 
//Dictionary is also known as a map

function Dictionary(){
	var items = {}

	// set(key,value): This adds a new item to the dictionary.
	// delete(key): This removes the value from the dictionary using the key. 
	// has(key): This returns true if the key exists in the dictionary and false otherwise.
	// get(key): This returns a specific value searched by the key. 
	// clear(): This removes all the items from the dictionary. 
	// size(): This returns how many elements the dictionary contains. It is similar to the length property of the array. 
	// keys(): This returns an array of all the keys the dictionary contains. 
	// values(): This returns an array of all the values of the dictionary

	this.has = function(key){
		//hasOwnProperty returns true or false
		//we can't do this.items because items is not a property.Items is just a locally scoped variable
		return items.hasOwnProperty(key)

		//OR
		// return key in items
	}

	this.set = function(key, value){
			items[key] = value
			return "item has been added to the dictionary/map"
	}

	this.delete = function(key){
		if(this.has(key)){
			delete items[key]
			return true
		}
		else{
			return false
		}
	}

	this.get = function(key){
		if(this.has(key)){
			return items[key]
		}
		else{
			return undefined
		}

		//OR
		// return this.has(key)? items[key] : undefined
	}

	//this does not push the key to the array, only the value of the keys
	this.values = function(){
		var values = []
		for(var k in items){
			if(this.has(k)){
				values.push(items[k])
			}
		}

		return values
	}

	this.clear = function(){
		items = {}
	}

	this.size = function(){
		return Object.keys(items).lengths
	}

	this.keys = function(){
		return Object.keys(items)
	}

	this.getItems = function(){
		return items
	}
}

//DICTIONARY TEST
var dictionary = new Dictionary()

dictionary.set("name", "abdul")
dictionary.set("age", 23)

console.log(dictionary.getItems())
console.log(dictionary.keys())
console.log(dictionary.values())