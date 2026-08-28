class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    // Every new node starts at height 1
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (node === null) {
      return 0;
    }

    return node.height;
  }

  getBalance(node) {
    if (node === null) {
      return 0;
    }

    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    // A recurring function
    // Normal BST insertion
    if (node === null) {
      // If left or right are null, insert
      return new Node(value);
    }

    if (value < node.value) {
      // When insertNode is called for a sibling (left or right), javascript pauses the outer insertNode call
      // Once the node is inserted, it unpauses the previously called insert functions in reverse order
      // When this happens the rest of this function can execute, i.e. updating node.height and the balance logic
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Don't add duplicates
      return node;
    }

    // ------------------------------------
    // The below will be executed on all previous nodes on the path to the inserted node
    // ------------------------------------

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // ------------------------------------
    // Check whether this node is balanced
    // ------------------------------------

    const balance = this.getBalance(node);
    // console.log(this);
    // ------------------------------------
    // RIGHT-RIGHT
    //
    //     10
    //       \
    //        20
    //          \
    //           30
    //
    // Rotate LEFT
    // ------------------------------------

    if (balance < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // ------------------------------------
    // LEFT-LEFT
    //
    //         30
    //        /
    //       20
    //      /
    //     10
    //
    // Rotate RIGHT
    // ------------------------------------

    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // ------------------------------------
    // LEFT-RIGHT
    //
    //       30
    //      /
    //     10
    //       \
    //        20
    //
    // First rotate LEFT
    // Then rotate RIGHT
    // ------------------------------------

    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);

      return this.rotateRight(node);
    }

    // ------------------------------------
    // RIGHT-LEFT
    //
    //     10
    //       \
    //        30
    //       /
    //      20
    //
    // First rotate RIGHT
    // Then rotate LEFT
    // ------------------------------------

    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);

      return this.rotateLeft(node);
    }

    return node;
  }

  rotateLeft(node) {
    const newRoot = node.right;
    const movedBranch = newRoot.left;

    // Rotate
    newRoot.left = node;
    node.right = movedBranch;

    // Update heights
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    newRoot.height =
      1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

    return newRoot;
  }

  rotateRight(node) {
    const newRoot = node.left;
    const movedBranch = newRoot.right;

    // Rotate
    newRoot.right = node;
    node.left = movedBranch;

    // Update heights
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    newRoot.height =
      1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

    return newRoot;
  }
}
const avl = new AVLTree();
avl.insert(40);
avl.insert(70);
avl.insert(30);
avl.insert(29);
avl.insert(28);
console.dir(avl.root, { depth: null });
