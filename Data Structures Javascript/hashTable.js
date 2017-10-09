function hashTable(size){
	//buckets is the array with a set size that is passed
	this.buckets = Array(size)
	//number of buckets or length of the array
	this.numBuckets = this.buckets.length;
}

function hashNode(key, value, next){
	this.key = key;
	this.value = value;
	this.next = next || null;
}

hashTable.prototype.hash = function(key){
	var total = 0;
	for(var i = 0;  i < key.length; i++){
		total = total + key.charCodeAt(i);
	}

	//this tells us which bucket this hash node will be placed in.
	//we use numBuckets value to get the remainder because whenever we divide something by a number,
	//the remainder will always be between 0 and that number. And that means there will always be a spot 
	//in the array for that number if we get the remainder by dividing by the length of the buckets array
	var bucket = total % this.numBuckets;
	return bucket;
}

hashTable.prototype.insert = function(key, value){
	var index = this.hash(key)
	//will be index of the buckets array
	console.log(`Index: ${index}`)

	//if there is nothing in that position(buckets is the array), then create a node hashnode in that position
	if(!this.buckets[index]){
		this.buckets[index] = new hashNode(key, value)
	}
	//this is to check the first position/node
	else if(this.buckets[index].key === key){
		this.buckets[index].value = value;
	}
	else{
		var currentNode = this.buckets[index]
		//this checks everything after the first position/node
		while(currentNode.next){
			//this is for updating a hash node
			if(currentNode.next.key === key){
				currentNode.next.value = value;

				return;
			}
			currentNode = currentNode.next
		}

		currentNode.next = new hashNode(key, value)
	}
}

hashTable.prototype.get = function(key){
	var index = this.hash(key);

	if(!this.buckets[index]){
		return null;
	}
	else{
		var currentNode = this.buckets[index]
		while(currentNode){
			if(currentNode.key === key){
				return currentNode.value
			}
			currentNode = currentNode.nexts
		}
		return null;
	}
}

//returns an array of all hashNodes in hashtable
hashTable.prototype.retrieveAll = function(){
	var hashNodeArr = [];

	for(var i =0; i< this.numBuckets; i++){

		//LESSON WAY
		// var currentNode = this.buckets[i]
		// while(currentNode){
		// 	hashNodeArr.push(currentNode);
		// 	currentNode = currentNode.next
		// }

		//MY WAY
		if(this.buckets[i]){
			hashNodeArr.push(this.buckets[i])
		}
	}
	return hashNodeArr;
}



//Testing
var myHT = new hashTable(30);
// console.log(myHT);

// console.log(myHT.hash("Bitches"));
	
myHT.insert("yaba", "yaba@gmail.com")
myHT.insert("bitch", 'bitch@gmail.com')
myHT.insert("yaba", "yabadabadoo@gmail.com")
myHT.insert('bitch', "bitchnigga@gmail.com")
myHT.insert("foo", "foo@gmail.com")
myHT.insert("baya", "other@gmail.com")


console.log(myHT)

console.log(myHT.get("yaba"));
console.log(myHT.get("yomamma"))

console.log(myHT.retrieveAll());