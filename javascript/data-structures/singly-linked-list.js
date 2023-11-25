class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return undefined;
        
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!(this.push(val));
        if(index === 0) return !!(this.unshift(val));

        var preNode = this.get(index-1);
        var newNode = new Node(val);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var preNode = this.get(index-1);
        var remove = preNode.next;
        preNode.next = preNode.next.next;
        this.length--;
        return remove;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next = null;
        for(var i = 0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
