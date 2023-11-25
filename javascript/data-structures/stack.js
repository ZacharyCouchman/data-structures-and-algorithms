class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

// LIFO - Last In First Out
// using a LinkedList underneath
class Stack {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  push(val) {
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp;
      }
      this.size++;
      return this.size;
  }

  pop() {
      if(this.size === 0) return null;
      const popped = this.first;
      if(this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return popped;
  }
}

// array.push() and array.pop() could be used as well