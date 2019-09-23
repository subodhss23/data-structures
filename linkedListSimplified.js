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
            let newNode = new Node(data);
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

    //inserting node at uses getAt helper function
    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if (index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        //if not empty and index is not 0 then use getAt()
        //to find previous node

        const previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;

        return this.head;
    }

    // delete operation on a singly linked list

    // deleting the first node
    deleteFirstNode(){
        if (!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }

    // deleting the last node
    deleteLastNode(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let tail = this.head.next;

        while(tail.next !== null){
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;
        return this.head;
    }

    // deleting a node from the middle of the list
    deleteAt(index){
        if (!this.head){
            this.head = new Node(data);
            return;
        }
        if (index === 0){
            this.head = this.head.next;
            return;
        }

        // else, use getAt() to find the previous node
        const previous = this.getAt(index-1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;
        return this.head;
    }

    deleteList(){
        this.head = null;
    }

    print() {
        let string = '';
        let current = this.head;
        while(current) {
          string += `${current.data} `;
          current = current.next;
        }
        console.log(string.trim());
      }
    }


let list = new LinkedList();
list.insertAtBeginngin(2);
list.insertAtBeginngin(3);
list.insertAtTheEnd(4);
list.insertAtTheEnd(5);
list.print();