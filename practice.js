// implement a linked list and traverse it


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    mappingThings(){
        console.log(JSON.stringify(this, null, 2));
    }

    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

   pop(){
       if(!this.head) return undefined;
       let current = this.head;
       let newTail = current;
       while(current.next){
           newTail = current;
           current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
    // if(this.length === 0){
    //     this.head = null;
    //     this.tail = null;
    // }
    console.log(current);
    console.log(this.head);
    console.log(this.tail);
   }


// removing a new node from the beginning of the linked list
shifting(){
    if(!this.head) return undefined;
    if(this.length == 0) return undefined;
    let currentHead  = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
        this.tail = null;
    }
    return currentHead;
    }   


// adding node to the front of the list
unshifting(val){
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    console.log(this);
}

get(index){
    if( index < 0 || index >= this.length) return undefined;
    let count = 0;
    let current = this.head;
    while(count !== index){
        current = current.next;
        count++;
    }
    console.log(`this is the current fron get method ${JSON.stringify(current)}`);
}

set(index, val){
    let foundNode = this.get(index);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false;
}
}


let list = new LinkedList();
list.push(4);
list.push(55);
list.push(33);
list.push(22);
console.log('---------------------------------------------------')

list.get(list.length-1);
list.get(1);
list.get(2);

// list.pop();
// console.log(list);

