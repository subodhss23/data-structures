class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(item){
       let current = this.head;
       let newNode = new Node(item);
       while(current.next !== null){
           current = current.next;
       }
       current.next = newNode;
       return true;
    }

    appendAt(pos, item){
        let counter = 0;
        let current = this.head;
        let NewNode = new Node(item);
        while(current.next !== null){
            if(counter === pos){
                newNode.next = current.next;
                current.next = newNode;
                return true;
            }
            current = current.next;
            counter++;
        }
        return false;
    }

    remove(item){
        let current = this.head;
        while(current != null){
            let previous = current;
            current = current.next;
            if(current.data === item){
                previous.next = current.next;
                return true;
            }
        }
        return false;
    }

    
    }
