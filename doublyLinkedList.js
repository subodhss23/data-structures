// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head || this.size === 0){
//             this.head = newNode;
//             this.tail = newNode;
//         } else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.size++;
//         return this;
//     }
// }

// let list = new  LinkedList();
// list.push(2);
// list.push(3);
// console.log(list);


// what happens in single linked list then?


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
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head || this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
}

let list = new  SingleLinkedList();
list.push(2);
list.push(3);
list.push(4);
console.log(list);