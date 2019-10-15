// implement a linked list and traverse it

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse(){
        let current = this.head;
        // while(current){
        //     console.log(current.val);
        //     current = current.next;
        // }

        for(let i = 0; i < this.length; i++){
            console.log(current.val);
            current = current.next;
        }
    }

    //remove a node from the end of the linked list
    pop(){
        if(!this.head) return null;
        let current = this.head;
        let newTail = current;
        
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        newTail.next = null;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        this.length--;
        console.log(current);
    }

    //remove the node from the beginning
       shift(){
           if(!this.head) return undefined;
           let removingNode = this.head;
           this.head = removingNode.next;
           removingNode.next = null;
           this.length--;
           if(this.length === 0){
               this.tail = null;
           }
           console.log(removingNode);
       }

    //adding a new node to the beginning of the linked list
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }       
}

let list = new SinglyLinkedList();
list.push(4);

list.shift();
console.log(list);
