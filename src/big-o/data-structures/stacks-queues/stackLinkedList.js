/**
 * A data structure that uses last in first out (LIFO) it access’ data from the top of the stack, data is added to the top and each previous item is pushed down.
Imagine a pile of plates:
You add a plate to the top.
You remove a plate from the top.
The last plate added is the first one removed.
peek() gets the last item that was put into the stack (the top object)
push() adds to the top of the stack
pop() removes from the top of the stack
Linked lists and arrays can be used to  create a stack,it depends on which you prefer
It has fast operations fast peek (view the top), push() adds to the top

 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    // console.log(this);
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.top;
    this.top = this.top.next;
    removedNode.next = null; // Need to detach from the list
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return removedNode;
  }

  isEmpty() {
    return this.length === 0;
  }
}
let myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.push("StackOverflow");
myStack.pop();
console.log(myStack.peek());
