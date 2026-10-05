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
  DFSInorder() {
    return traverseInOrder(this.root, []);
  }

  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}
function traverseInOrder(node, list) {
  /**
   The recursive execution is:
1. Start at 9; pause it and visit 4.
2. At 4; pause it and visit 1.
3. 1 has no left child, so add 1.
4. The call for 4 resumes; add 4, then visit 6.
5. 6 has no left child, so add 6.
6. The call for 9 resumes; add 9, then visit 20.
7. At 20; pause it and visit 15.
8. Add 15.
9. The call for 20 resumes; add 20, then visit 170.
10. Add 170.
   */
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }

  return list;
}

function traversePreOrder(node, list) {
  /**
   The recursive execution is:
1. Start at 9; push to list.
2. At 4; push to list.
3. 1 push to list, 1 has no left child.
4. The call for 4 resumes;has no left child, so visit 6.
5. 6 push to list has no left child, and no right child.
6. The call for 9 resumes; visit 20.
7. At 20 push to list; pause it and visit 15.
8. Add 15.
9. The call for 20 resumes; add 20, then visit 170.
10. Add 170.
   */
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }

  if (node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
}

function traversePostOrder(node, list) {
  /**
   The recursive execution is:
1. Start at 9;  pause it and visit 4.
2. At 4;  pause it and visit 1.
3. 1 push to list, 1 has no left child or right child.
4. The call for 4 resumes; has no left child, so visit 6.
5. 6 push to list has no left child, and no right child.
6. The call for 4 resumes; push to list has no left child, and no right child.
7.  The call for 9 resumes; pause it and visit 20.
8. Pause 20 and vist 15, push 15 to list has no left child, and no right child .
9. The call for 20 resumes; then visit 170.
10. Add 170, The call for 20 resumes, add 20.
11. The call for 20 resumes; push to list
   */
  if (node.left) {
    traversePostOrder(node.left, list);
  }

  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log("found::", tree.lookup(1));
// console.dir(tree.root, { depth: null });
// console.log(JSON.stringify(traverse(tree.root), null, 2));
//       9
//   4       20
//1    6   15   170
console.log(tree.DFSPostorder());
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
