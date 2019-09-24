// implementation of binary search tree

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(data) {
      const node = new Node(data);
      if(!this.root) {
        this.root = node;
      } else {
        let current = this.root;
        while(current) {
          if(node.data < current.data) {
            if(!current.left) {
              current.left = node;
              break;
            }
            current = current.left;
          } else if (node.data > current.data) {
            if(!current.right) {
              current.right = node;
              break;
            }
            current = current.right;
          } else {
            break;
          }
        }
      }
    }

    remove(data){
        const that = this;
        const removeNode = function(node, data){
            if(!node){
                return null;
            }
            if(data === node.data){
                if(!node.left && !node.right){
                    return null;
                }
                if(!node.left){
                    return node.right;
                }
                if(!node.right){
                    return node.left;
                }

                //2 children
                const remp = this.getMin(node.right);
                node.data = temp;
                node.right = removeNode(node.right, temp);
                    return node;
                } else if(data < node.data){
                    node.left = removeNode(node.left, data);
                    return node;
                } else {
                    node.right = removeNode(node.right, data);
                    return node;
                }
        };
        this.root = removeNode(this.root, data);
    }
}  