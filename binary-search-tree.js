// implementation of binary search tree

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

    class BinarySearchTree{
        constructor(){
            this.root = null;
        }

        add(data){
            const node = new Node(data);
            if(!this.root){
                this.root = node;
            } else {
                let current = this.root;
                while(current){
                    if(node.data < current.data){
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else if (node.data > current.data){
                    if(!current.right){
                        current.right = node;
                        break;
                    }
                    current = current.right;
                } else{
                    break;
                }
            }
        }
    }
