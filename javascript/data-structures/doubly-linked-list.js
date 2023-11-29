class Node {
  constructor(value){
      this.prev = null;
      this.value = value;
      this.next = null;
  }
}

class DoublyLinkedList {
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
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }

  pop() {
      if(this.length === 0) return undefined;
      let current = this.tail;
      let newTail = this.tail.prev;
      this.tail.prev = null;
      this.tail = newTail;
      if(this.tail) {
         this.tail.next = null; 
      }
      this.length--;
      if(this.length === 0) {
          this.head = null;
          this.tail = null;
      }
      return current;
  }

  shift() {
      if(!this.head) return undefined;
      var currentHead = this.head;
      this.head = this.head.next;
      currentHead.next = null;
      if(this.head) {
          this.head.prev = null;
      } else {
          this.tail = null;
      }
      this.length--;
      return currentHead;
  }

  unshift(val) {
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }

  get(index) {
      if(index < 0 || index >= this.length) return null;
      var counter = 0;
      if(this.length / 2 > index) {
          // look from head
          var counter = 0;
          var current = this.head;
          while (counter !== index) {
              current = current.next;
              counter++;
          } 
      } else {
          // look from tail
          var counter = this.length -1;
          var current = this.tail;
          while (counter !== index) {
              current = current.prev;
              counter--;
          } 
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
      newNode.prev = preNode;
      newNode.next = preNode.next;
      preNode.next = newNode;
      newNode.next.prev = newNode;
      this.length++;
      return true;
  }

  remove(index){
      if(index < 0 || index >= this.length) return null;
      if(index === 0) return this.shift();
      if(index === this.length-1) return this.pop();

      var preNode = this.get(index-1);
      var remove = preNode.next;
      var newNext = preNode.next.next;
      preNode.next = preNode.next.next;
      newNext.prev = preNode;
      remove.next = null;
      remove.prev = null;
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
          prev.prev = next;
          node = next;
      }
      return this;
  }

  findIndex(val) {
    if(!this.head) return undefined;

    let current = this.head;
    let index = 0;
    while(current) {
      if(current.value === val) return index;
      index++;
      current = current.next;
    }
    return undefined;
  }
}

const dll = new DoublyLinkedList();
dll.push("1. hello")
dll.push("2. is there")
dll.push("3. anybody")
dll.push("4. in there")
