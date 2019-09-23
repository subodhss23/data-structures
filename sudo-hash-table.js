class HashTable{
    constructor(size = 100){
        this.table = new Array(size);
    }

    computeHash(string){
        let H = this.findPrime(this.table.length);
        let total = 0;
        for(let i = 0; i < string.length ; ++i){
            total += H * total + string.charCodeAt(i);
        }
        return total % this.table.length;
    }

    put(item){
        let key = this.computeHash(item)
        return !this.table[key] ? this.table[key] = item : false;
    }

    remove(item){
        let key = this.computeHash(item)
        return this.table[key] = undefined;
    }

    search(item){
        let key = this.computeHash(item);
            return this.table[key] === item;
    }

    size(){
        let counter = 0;
        for (let i = 0, len = this.table.length; i < len; i++){
            if(this.table[i]){
                counter++;
            }
            return counter;
        }
    }

    isEmpty(){
        for(let i =0, len = this.table.length; i < len; i++){
            if(this.table[i]){
                return false;
            }
            return true;
        }
    }
}


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class HashTableWithChaining{
    constructor(size = 10){
        this.table = new Array(size);
    }

    put(item){
        let key = this.computeHash(item);
        let node = new Node(item);
        if(this.table[key]){
            node.next = this.table[key];
        }
        this.table[key] = node;
    }

    remove(item){
        let key = this.computeHash(item)
            if(this.table[key]){
                if(this.table[key].data === item){
                    this.table[key] = this.table[key].next;
                } else {
                    let current = this.table[key].next;
                    let prev = this.table[key];
                    while(current){
                        if(current.data == item){
                            prev.next = current.next;
                        }
                        prev = current;
                        current = current.next;
                    }
                }
            }
        }

        contains(item){
            for(let i = 0; i < this.table.length; i++){
                if(this.table[i]){
                    let current = this.table[i];
                    while(current){
                        if(current.data === item){
                            return true;
                        }
                        current = current.next;
                    }
                }
            }
            return false;
        }

        size(item){
            let counter = 0;
            for(let i = 0; i < this.table.length; i++){
                if(this.table[i]){
                    let current = this.table[i];
                    while(current){
                        counter++;
                        current = current.next;
                    }
                }
            }
            return counter;
        }

        isEmpty(){
            return this.size()<1;
        }
    }

