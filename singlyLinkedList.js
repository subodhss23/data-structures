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
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
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
    return this;
}

// getting the value of a given index
get(index){
    if( index < 0 || index >= this.length) return undefined;
    let count = 0;
    let current = this.head;
    while(count !== index){
        current = current.next;
        count++;
    }
   return current;
}

// setting existing node to new value
set(index, val){
    let foundNode = this.get(index);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false;
}

// adding a node to the linked list at specific position
insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshifting(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
    }

// removing a node from the linked list a a pecific position
remove(index){
        if(index < 0 || index >= this.length) return undefinded;
        if(index === this.length - 1 ) return this.pop();
        if(index === 0) return this.shifting();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        console.log(removed);
    }

    reverse(){
        let tempNode = this.head;
        this.head = this.tail;
        this.tail = tempNode;
        let next = null;
        let prev = null;
        for(var i = 0; i < this.length; i++){
            next = tempNode.next;
            tempNode.next = prev;
            prev = tempNode;
            tempNode = next;
        }
        return this;
    }


    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}


let list = new LinkedList();
list.push(4);
list.push(55);
list.push(33);
list.push(22);
list.remove(1);

