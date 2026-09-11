class Stack {
  constructor() {
    this.stack = [];
  }
  // I need to use the array.pop() & array.push() which adds to the right side
  // these are better than  unshift() and shift() because they are O(n)
  // and JavaScript must reindex the remaining elements after these are used, whereas pop() and push() are O(1)
  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
    console.log(this);
    return this;
  }

  pop() {
    // Stacks remove from top only
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.stack.pop();
    return removedNode;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
let myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.push("StackOverflow");
myStack.pop();
console.log(myStack.peek());
