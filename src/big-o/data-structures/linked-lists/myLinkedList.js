/**
 * Example of how it updates (appending, to the tail)
When the list is initialised, the tail is made equal to the head, so they reference the same object this.tail = this.head,
when appending, we need to update the next property in the tail (which is still referencing the same object as the head)
this.tail.next = newNode, this updates the same object’s next property, when this is done,
a reference is created to this new node in the head and the tail, it kind of lives in the next property,
after we do  this.tail = newNode, when we do this, it’s as if there’s a link between head.next and this.tail,
on the next iteration when we do this.tail.next = newNode, we’re updating the reference inside the head.next  (or head.next.next etc)
 */

class MyLinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  logList(func) {
    console.log("HEAD:", {
      value: this.head.value,

      next: this.head.next?.value ?? null,
    });

    console.log("TAIL:", {
      value: this.tail.value,
      next: this.tail.next?.value ?? null,
    });

    console.log(func);
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode; // This points to a reference that lives in header.next, we're just controlling it through this variable
    this.tail = newNode; // Make sure we update this reference to newNode
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // Always handle if index is out of length range
    if (index <= 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };
    const nodeBehind = this.traverseToIndex(index - 1);
    newNode.next = nodeBehind.next;
    nodeBehind.next = newNode;
    this.length++;
    this.printList();
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head; // The head will become the tail
    let second = first.next;
    while (second) {
      const temp = second.next; // save where I'm going - this is the 3rd item
      second.next = first; // turn the arrow around - second now points to first
      first = second; // move first backward
      second = temp; // move third up to second, thus moving second backward
    }
    // this happens at the end
    this.head.next = null; // Tail and head are the same, updating this.head is updating the tail
    this.head = first; // Then we point the head to the final iteration of the first var which is now at the beginning
    this.printList();
    return this;
  }

  remove(index) {
    if (index >= this.length || index <= 0) {
      return console.log("index is out of range");
    }
    const nodeBehind = this.traverseToIndex(index - 1);
    const nodeToDelete = nodeBehind.next;
    nodeBehind.next = nodeToDelete.next;
    this.length--;
    this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const myList = new MyLinkedList(9);
myList.append(8);
myList.append(7);
myList.append(6);
myList.prepend(10);
myList.printList();
myList.reverse();
