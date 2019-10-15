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
    
    // retriving a node by it's position in the linked list
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let count = 0;
        let current = this.head;
        while(index != count){
            current = current.next;
            count++; 
        }
        console.log(current);
    }

    // updating at exsiting node
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //adding entire new node to the linked list at a specific position
    insert(index, val){
        let newNode = new Node(val);
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length ) return this.push(val);
        if(index === 0) return this.unshift(val);
        let prevNode = this.get(index-1);
        
        let beforeNode = 
    }
}

let list = new SinglyLinkedList();
list.push('one');
list.push('two');
list.push('three');
list.push('four');
list.get(2);
