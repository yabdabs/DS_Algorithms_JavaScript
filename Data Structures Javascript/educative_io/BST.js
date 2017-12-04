// https://www.educative.io/collection/page/10370001/160001/220001

function Node(data){
	this.data = data
	this.right = null
	this.left = null
}

function BST(){
	this._root = null
}

BST.prototype.insert = function(data){
	var node = new Node(data)
	var current 

	if(this._root == null){
		this._root = node
		return
	}
	else{
		current = this._root
		while(current){
			if(data < current.data){
				if(!current.left){
					current.left = node
					return
				}
				current = current.left
			}//end if
			else if(data > current.data){
				if(!current.right){
					current.right = node
					return true
				}
				current = current.right
			}//end nested else if inside while
			else{
				//duplicates are not supported
				return false
			}
		}//end while loop
	}//end else
}//end function

BST.prototype.contains = function(data){
	var current = this._root

		while(current){
			if(current.data === data){
				return true
			}
			else if(data < current.data){
				current = current.left
			}
			else if(data > current.data){
				current = current.right
			}
		}
		return false
}

// We've covered search in a BST. When you want to traverse all the elements in a tree,
// there are a few well-known techniques to do that. These methods define the order in which nodes are visited,
// and each one of these traversal orders helps us solve different problems. 
// Let's look at the three most common traversal techniques.

// ***DEPTH FIRST TRAVERSAL***

// In Pre-Order traversal, we traverse in the following order:

// First visit the node itself.
// Then visit the left subtree of the node.
// Then visit the right subtree of the node.
BST.prototype.preOrder = function(){
	var output = []

	function preOrderImpl(node){
		if(node === null){
			return	
		}

		//visit the node itself
		output.push(node.data)

		//visit the left node
		preOrderImpl(node.left)

		//visit the right node
		preOrderImpl(node.right)

	}

	// call the internal function
	//starting with the root

	preOrderImpl(this._root)
	
	
	return output
}


// In in-Order traversal, we traverse in the following order:

// First visit the left subtree of the node.
// Then visit the node itself. 
// Then visit the right subtree of the node.
BST.prototype.inOrder = function(){
	var output = []

	function inOrderImpl(node){
		if(node === null){
			return
		}

		//first we visit the left node
		inOrderImpl(node.left)

		//then visit the node itself if there is no left
		inOrderImpl(node.data)

		//then visit right node
		inOrderImpl(node.right)
	}

	//call the internal function
	//with the root as the starting point
	inOrderImpl(this._root)

	return output
}

BST.prototype.postOrder = function(){
	var output = []

	function postOrderImpl(node){
		if(node === null){
			return
		}

		//first we visit the left node
		postOrderImpl(node.left)

		//then we skip the actual and go to it's child nodes
		//so check the right node
		postOrderImpl(node.right)

		//lastly, we visit the node itself
		output.push(node.data)
	}

	postOrderImpl(this._root)

	return output
}