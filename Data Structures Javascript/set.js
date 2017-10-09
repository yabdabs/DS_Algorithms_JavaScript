//A set is a collection of items that are unordered and are not repeated
//we will use an object to represent our set. You can use an array too
function Set(){
	var items = {}

	this.has = function(value){
		//returns a boolean whether the object has the property or not
		return items.hasOwnProperty(value)
	}

	this.add = function(value){
		if(!this.has(value)){
			items[value] = value
			return true
		}
		//means it's already in the set
		return false
	}

	this.remove = function(value){
		if(this.has(value)){
			delete items.value
			//item was deleted
			return true
		}
		//item was not deleted
		return false
	}

	//remove all items from the set
	this.clear = function(){
		items = {}
	}

	this.size = function(){
		return Object.keys(items).length

		//OR
		// var size 
		// for(key in items){
		// 	if(items.hasOwnProperty(key)){
		// 		size++
		// 	}
		// }
		// return size
	}

	//will only work in modern browsers
	this.values = function(){
		return Object.keys(items)
	}

	//for older browsers
	this.valuesLegacy = function(){
		var keys = []
		for(var key in items){
			keys.push(key)
		}
		return key
	}

	//Union: Given two sets, this returns a new set with the elements from both given sets 
	this.union = function(otherSet){
		var unionSet = new Set()

		//we cannot use for in because it loops over the objects own enumerable properties
		//as well as the prototypes and eventually the Object prototype
		var values = this.values()
		for(var i = 0; i<values.length; i++){
			unionSet.add(values[i])
		}

		var values2 = otherSet.values()
		for(var i=0; i<values2.length; i++){
			unionSet.add(values2[i])
		}
		return unionSet
		// or
		// return unionSet.values()
	}

	//Intersection: Given two sets, this returns a new set with the elements that exist in both sets
	this.intersection = function(otherSet){
		var intersectionSet = new Set()
		var values = this.values()

		for(var i = 0; i<values.length; i++){
			if(otherSet.has(values[i])){
				intersectionSet.add(values[i])
			}
		}
		return intersectionSet
	}

	// Difference: Given two sets, this returns a new set with all elements that
	// exist in the first set and do not exist in the second set
	this.difference = function(otherSet){
		var differenceSet = new Set()

		var values = this.values()
		for(var i =0; i<values.length; i++){
			if(!otherSet.has(values[i])){
				differenceSet.add(values[i])
			}
		}
		return differenceSet
	}

	// Subset: This confirms whether a given set is a subset of another set 
	// checking if before the . is the subset
	//after the . is 
	this.subset = function(otherSet){
		var values = this.values()
		var count = 0

		if(this.size() > otherSet.size()){
			return false
		}
		else{
			for(var i=0; i<values.length; i++){
				if(this.has(values[i])){
					count++
				}
				else if(!this.has(values[i])){
					return false
				}
			}
		}

		if(count == values.length){
			return true
		}
	}


}


var set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(100)
// console.log(set.values())

var set2 = new Set()
set2.add(1)
set2.add(3)
set2.add(4)
set2.add(323)

//UNION TEST
// var u1 = set.union(set2)
// console.log(u1.values()	)

//INTERSECTION TEST
// var intersection1 = set.intersection(set2)
// console.log(intersection1.values())

//DIFFERENCE TEST
// var difference1 = set.difference(set2)
// console.log(difference1.values())

//SUBSET TEST
console.log(set.subset(set2))