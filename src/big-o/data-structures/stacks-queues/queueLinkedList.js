class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // this.last points to a reference that lives in first.next, we're just controlling it through this variable
      this.last = newNode; // Then make sure newNode is the last node
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.first;
    this.first = this.first.next;
    removedNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }

    return removedNode;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Google");
myQueue.enqueue("Stackoverflow");
myQueue.enqueue("Discord");
myQueue.enqueue("Udemy");
console.log(myQueue.dequeue());
