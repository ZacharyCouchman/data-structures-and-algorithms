class Node {
  constructor(val){
      this.value = val;
      this.left=null;
      this.right=null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  insert(val) {
      var newNode = new Node(val);
      var inserted = false;
      if(!this.root) {
          this.root = newNode;
          inserted = true;
      } else {
          var currentNode = this.root;
          while(currentNode) {
              if(newNode.value === currentNode.value) {
                  // value already in tree
                  break;
              }
              if(newNode.value < currentNode.value) {
                  // move to the left
                  if(!currentNode.left){
                      // if there is no left node, set the newNode as the left
                      currentNode.left = newNode;
                      inserted = true;
                      break; // break out as value is set
                  } else {
                      // reset current node with left
                      currentNode = currentNode.left;
                  }
              } else {
                  // move to the right
                  if(!currentNode.right) {
                      currentNode.right = newNode;
                      inserted = true;
                      break; // break out as value is set
                  } else {
                      currentNode = currentNode.right;
                  }
              }
          }
          
      }
      return this;
  }

  find(val) {
      if(!this.root) return undefined;

      var currentNode = this.root;
      var found = false;
      while(currentNode && !found) {


          if(val < currentNode.value) {
              // move left
              currentNode = currentNode.left;
          } else if (val > currentNode.value) {
              currentNode = currentNode.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      
      return current;
  }

  BFS() {
      var data = [],
          queue = [],
          node = this.root;
      queue.push(this.root);
      
      while(queue.length) {
          node = queue.shift();
          data.push(node.value);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      return data;
  }

  DFSPreOrder() {
      var data = [];
      var current = this.root;
      function traverse(node) {
          data.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
      }
      traverse(current);
      return data;
  }

  DFSPostOrder() {
      var data = [];
      var current = this.root;
      function traverse(node) {
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          data.push(node.value);
      }
      traverse(current);
      return data;
  }

  DFSInOrder() {
      var data = [];
      var current = this.root;
      function traverse(node) {
          if(node.left) traverse(node.left);
          data.push(node.value);
          if(node.right) traverse(node.right);
      }
      traverse(current);
      return data;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
