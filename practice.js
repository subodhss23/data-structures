class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
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
        this.size++;
        return this;
    }

    get(index){
        if(index < 0 || this.size >= index) return undefined;
        let count, current;
        if(index < this.size / 2){
            count = 0;
            current = this.head;
            while(index != count){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(index != count){
                current = current.prev;
                count--;
            } 
        }
        console.log(current);
    }
  
}

let list = new LinkedList();
list.push(3);
list.push(4);
list.push(5);
list.get(0);
