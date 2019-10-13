class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding nodes at the end of doubly linked list
    push(val){
        let newNode = new Node(val);
        if(!this.head || this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // removing a node from the end of doubly linked list
    pop(){
        if(!this.head || !this.tail || this.length === 0) return undefined;
        let removeTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = removeTail.prev;
            this.tail.next = null;
            removeTail.prev = null;
        }
        this.length--;
        return(removeTail);
    }

    unshifting(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
   
    shift(){
        if(!this.head) return undefinded;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            var shiftingNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            shiftingNode.next = null;
        }
        this.length--;
        return(shiftingNode);
    }

    // accessing a node in a doubly linked list by its position
    get(index){
        if (index < 0 || index >= this.length ) return undefined;
        var current, count;
        if (index < this.length / 2){
            count = 0;
            current = this.head;
            while(index !== count){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(index !== count){
                current = current.prev;
                count--;
            }
        }
         console.log(current);
    }

    // set - replacing the value of a node in a doubly linked list
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode !== null){
           foundNode.next = next;
            return true;
        } 
        return false;
    }
}

let list = new  DoublyLinkedList();
list.push('first');
list.push('second');
list.push('third');
list.set(1, 'what is up?');