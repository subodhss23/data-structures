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
        } else {
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    } 
                } else if( val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val){
        if(!this.root) return false;
        if(val === this.root){
            return this.root;
        }
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if ( val > current.val){
                current = current.right;
            } else{
                found = true;
            }
        }
        if(!found){
            return false;
        }
        return current;
    }

    contains(value){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

let newNode = new BST();
newNode.insert(10);
newNode.insert(8);
newNode.insert(5);
newNode.insert(9);
newNode.insert(11);
newNode.insert(12);
newNode.insert(15);
console.log(newNode.BFS());
