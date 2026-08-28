import { Stack } from "./stackLinkedList.js";
/**
A Queue is a data structure that uses first in first out (FIFO) the first item of data (first person in line) gets priority, then second etc.
peek() gets the first item that was added to the queue
enqueue() adds to the end of the queue (behind the first person)
dequeue() removes from the front (first person leaves the queue)
Linked lists are typically used to  create a queue.
 */
class QueueUsingStacks {
  constructor() {
    // Create 2 stacks, inputStack stores data that's coming in
    // But because it's a stack the oldest item will be at the bottom
    // This will be reversed for output
    this.inputStack = new Stack();
    this.outputStack = new Stack();
    this.length = 0;
  }

  peek() {
    // make sure outputStack is populated
    this.moveItemsToOutput();
    // Satcks peek the top item, because outputStack is a reversed from inputStack
    return this.outputStack.peek();
  }

  enqueue(value) {
    this.inputStack.push(value);
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    // make sure outputStack is populated
    this.moveItemsToOutput();
    this.length--;
    // Because outputStack is reversed the oldest item is first, because this is a stack it removes from the top
    return this.outputStack.pop();
  }

  isEmpty() {
    return this.length === 0;
  }

  moveItemsToOutput() {
    // If outputStack has someting in there means the oldest item is in there already, leave it alone,
    if (!this.outputStack.isEmpty()) {
      return;
    }
    // while inputStack has something in it put it into the outputStack
    while (!this.inputStack.isEmpty()) {
      /*
       push() pushes to the top of the outputStack
       pop() removes from the top of the stack inputStack
       inputStack:
       TOP
       C
       B
       A
       BOTTOM
       1st iteration takes "C" from the top of inputStack, places it at the top of outputStack
       2nd iteration takes "B" and places it at the top of outputStack
       3rd iteration takes "A" and places it at the top of outputStack
       so outputStack is now
       TOP
       A
       B
       C
       BOTTOM

       **/
      this.outputStack.push(this.inputStack.pop().value);
    }
  }
}

const myQueue = new QueueUsingStacks();
myQueue.enqueue("Google");
myQueue.enqueue("Stackoverflow");
myQueue.enqueue("Discord");
myQueue.enqueue("Udemy");
myQueue.moveItemsToOutput();
// console.log(myQueue.dequeue());
