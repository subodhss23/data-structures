class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }


    /**poping pseudocode
     * if no nodes, return undefined
     * loop through the list until you reach the tail
     * set the next property of the 2nd to last node to be null
     * set the tail to be the 2nd to last node
     * decrement the length of the list by 1
     * return the value of the node removed
     */

    pop(){
     if(!this.head) return undefined;
     var current = this.head;
     var newTail = current;
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

    //shifting
    // removing a new node from the beginning of the linked list

    // shifting pseudocode
    // if there in no nodes, return undefined
    // store the current head property in a variable
    // set the head property to be the current head's next property
    // decrement the length by 1
    // return the value of the node removed

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
}

var list = new SinglyLinkedList();
list.push('hello');
list.push('there');
list.push('!');
// console.log(list.traverse());
// list.pop();
// console.log(list);
console.log(list);
 list.shift();
// console.log(list);