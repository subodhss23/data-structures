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
        let current, count;
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
         return(current);
    }

    // set - replacing the value of a node in a doubly linked list
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode !== null){
           foundNode.next = next;
            return true;
        } 
        return false;
    }

    // adding a node in doubly linked list in a certain index
    insert(index, val){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.unshifting(val);
        if(index === this.length) return !!this.push(val);
        
        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        afterNode.prev = newNode;
        newNode.next = afterNode;

        this.length++;
        console.log(true);
    }

    // removing a node in a doubly linked list by a certain position
    remove(index){
        if(index < 0 || index >= this.length ) return undefined;
        if(index === 0 ) return this.shift(index);
        if(index === this.length - 1) return this.pop(index);

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.after;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;

        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }
}

let list = new  DoublyLinkedList();
list.push('first');
list.push('second');
list.push('third');
list.remove(1);
console.log(list);