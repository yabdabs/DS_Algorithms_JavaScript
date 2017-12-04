function BST(value){
	this.value= value;
	this.left = null;
	this.right = null;
}

var bst = new BST(50);

BST.prototype.insert = function(value){
	if(this.value > value){
		if(!this.left){
			this.left= new BST(value);
		}
		else{
			this.left.insert(value)
		}
	}
	else if(this.value < value){
		//if the right BST/node is null
		if(!this.right){
			this.right = new BST(value);
		}
		else{
			//if there is already a right BST
			this.right.insert(value);
		}
	}
}

BST.prototype.contains = function(value){
	if(this.value == value){
		return true
	}
	else if(this.value > value){
		if(!this.left){
			return false
		}
		else{
			return this.left.contains(value)
		}
	}
	else if(this.value < value){
		if(!this.right){
			return false
		}
		else{
			return this.right.contains(value)
		}
	}
}

BST.prototype.depthFirstTraversal= function(iteratorFunction, order){

	if(order=== "pre-order"){
		iteratorFunction(this.value)
	}

	if(this.left){
		this.left.depthFirstTraversal(iteratorFunction, order)
	}

	if(order === "in-order"){
		iteratorFunction(this.value)	
	}

	if(this.right){
		this.right.depthFirstTraversal(iteratorFunction, order)
	}

	if(order === 'post-order'){
		iteratorFunction(this.value)
	}

}

BST.prototype.breadthFirstTraversal = function(iteratorFunction){

	//keyword 'this' refers to root node of binary search tree
	var queue = [this]

	while(queue.length){

		var treeNode = queue.shift()
		iteratorFunction(treeNode)

		if(treeNode.left){
			queue.push(treeNode.left)
		}

		if(treeNode.right){
			queue.push(treeNode.right)
		}
	}
}

BST.prototype.getMinVal = function(){
	if(this.left){
		this.left.getMinVal()
	}

	if(!this.left){
		console.log(this.value)
	}
}

BST.prototype.getMaxVal = function(){
	if(this.right){
		this.right.getMaxVal()
	}

	if(!this.right){
		console.log(this.value)
	}
}

//use for depth first traversal method
function log(value){
	console.log(value)
}

//use for breadth first traversal method
function logNode(node){
	console.log(node.value)
}

bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(10)
bst.insert(105)


// console.log(bst.contains(120))
// console.log(bst.right.right);

// bst.depthFirstTraversal(log, "post-order")

// bst.breadthFirstTraversal(logNode)

bst.getMinVal();
bst.getMaxVal();