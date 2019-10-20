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
                console.log(current.val);
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
        if(!this.root) return undefined;
        if(this.root === this.val) return this;
        else{
                let current = this.head;
                while(true){
                    if(val < current.val){
                        if(current.left === val){
                            return this;
                        } else {
                            current = current.left;
                        } 
                    } else  if( val > current.val){
                        if(current.right === val){
                            return this;
                        } else {
                            current = current.left;
                        }
                    }
                }
            }
        }
    }

let newbst = new BST();
newbst.insert(10);
newbst.insert(5);
newbst.insert(8);
newbst.insert(12);
newbst.insert(15);
console.log(newbst);
console.log(newbst.find(8));