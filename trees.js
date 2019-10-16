// binary search tree

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(12);
tree.root.left = new Node(7);
tree.root.right.right = new Node(15);
tree.root.right.left = new Node(13);
console.log(tree);