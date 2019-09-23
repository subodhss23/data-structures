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

    removeAt(pos){
        let counter = 0;
        let current = this.head;
        while(current !==null){
            let previous = current;
            if(counter === pos){
                previous.next = current.next;
                return true;
            }
            counter++;
        }
        return false;
    }

    reverse(){
        let current = this.head.next;
        let prev = null;
        let next;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head.next = prev;
        return true;
    }

    swap(nodeOne, nodeTwo){
        let current = this.head;
        let counter = 0;
        let firstNode;
        while(current !== null){
            current = current.next;
            if(counter == nodeOne){
                fistNode = current;
            } else if(counter == nodeTwo){
                let temp = current.data;
                current.data = fistNode.data;
                firstNode.data = temp;
            }
            counter++;
        }
        return true;
    }

    length(){
        let current = this.head;
        let counter = 0;
        while(current.next !== null){
            current = current.next;
            counter++;
        }
        return counter;
    }
    
    isEmpty(){
        return this.length() < 1;
    }

    
    }
