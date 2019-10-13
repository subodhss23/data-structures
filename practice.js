class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList{
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
        } else {
            while(this.head.next === null){
                this.head.next = newNode;
                newNode.next = null;
            }
            this.length++;
            return this;
        }
    }
}

let list = new SingleLinkedList();
list.push(4);
list.push(3);
console.log(list);