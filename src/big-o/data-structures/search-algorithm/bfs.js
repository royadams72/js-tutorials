class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    while (currentNode) {
      // Make checks that apply to all conditions (left or right)
      if (value === currentNode.value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    // Return null if nothing found or no next node
    return null;
  }

  remove(value) {
    let currentNode = this.root;
    let parentNode = null;

    // First, find the node and remember its parent.
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    if (!currentNode) {
      return null;
    }

    let replacementNode;

    if (!currentNode.left) {
      // No left child: the right child can take this node's place.
      replacementNode = currentNode.right;
    } else if (!currentNode.right) {
      // No right child: the left child can take this node's place.
      replacementNode = currentNode.left;
    } else {
      // Two children: use the smallest node from the right subtree.
      let successorParent = currentNode;
      let successor = currentNode.right;

      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      if (successorParent !== currentNode) {
        successorParent.left = successor.right;
        successor.right = currentNode.right;
      }

      successor.left = currentNode.left;
      replacementNode = successor;
    }

    if (!parentNode) {
      // The node being removed is the root.
      this.root = replacementNode;
    } else if (parentNode.left === currentNode) {
      parentNode.left = replacementNode;
    } else {
      parentNode.right = replacementNode;
    }

    // Disconnect the removed node from the tree before returning it.
    currentNode.left = null;
    currentNode.right = null;
    return currentNode;
  }
  breadthFirstSearch() {
    //  BFS uses a stack and searches wide/across
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    // Loop through the queue array
    while (queue.length > 0) {
      // shift() removes the first item of the array and returns it
      // NOTE the queue could get quite large, which could increase the time complexity
      currentNode = queue.shift();
      // push to the removed item to the list
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      return list;
      //      9
      //   4       20
      //1    6   15   170
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log("found::", tree.lookup(1));
// console.dir(tree.root, { depth: null });
// console.log(JSON.stringify(traverse(tree.root), null, 2));
//       9
//   4       20
//1    6   15   170

function traverse2(node) {}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
