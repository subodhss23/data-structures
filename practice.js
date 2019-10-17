class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }


    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }


  find(val){
      if(this.root === null) return undefined;
      let current = this.root;
      found = false;
      while(current && !found){
          if(val < current.val){
              current = current.left;
          } else if( val > current.val){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found){
          console.log('node not found');
      }
      return current;
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(14);
tree.insert(7);
tree.insert(16);
console.log(tree.find(10));