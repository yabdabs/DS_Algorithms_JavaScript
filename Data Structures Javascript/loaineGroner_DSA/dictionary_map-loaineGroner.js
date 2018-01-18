/*
A dictionary is used to store[key,value] pairs, where the key is used to find a particular element.
Similar to a set, where a set stores [key, key] collection of elements.
Dictionary is also known as a map.

Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Because of this (and because there were no built-in alternatives), Objects have been used as Maps historically; however, there are important differences that make using a Map preferable in certain cases:

-The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
-You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
-A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
-An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
-A Map may perform better in scenarios involving frequent addition and removal of key pairs.
*/

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