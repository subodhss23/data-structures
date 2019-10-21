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
}


let newNode = new BST();
console.log(newNode.find(10));