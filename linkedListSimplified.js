class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    // three cases on insertion ***********


    // inseerting a new node before the head.
        insertAtBeginngin(data){
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            return this.head;
        }

    // inserting a new node after the tail.
            // to implement this we have to travel all the way to end 
            // to find tail's next pointer which is pointing to null
        insertAtTheEnd(data){
            if(!this.head){
                this.head = newNode;
                return this.head;
            }

            let tail = this.head;
            while(tail.next !== null){
                tail = tail.next;
            }
            tail.next = newNode;
            return this.head;
        }

    // inserting a new node in the middle of the list

    //helper function to get the position
    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node;
            } 
            counter++;
            node = node.next;
        }
        return null;
    }

}

let list = new LinkedList();
