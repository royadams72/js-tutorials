/**
 * Example of how it updates (appending, to the tail)
When the list is initialised, the tail is made equal to the head, so they reference the same object this.tail = this.head,
when appending, we need to update the next property in the tail (which is still referencing the same object as the head)
this.tail.next = newNode, this updates the same object’s next property, when this is done,
a reference is created to this new node in the head and the tail, it kind of lives in the next property,
after we do  this.tail = newNode, when we do this, it’s as if there’s a link between head.next and this.tail,
on the next iteration when we do this.tail.next = newNode, we’re updating the reference inside the head.next  (or head.next.next etc)
 */

let myLinkedList1 = {
  head: {
    value: 10, //This is the head
    next: {
      value: 16, // This is the middle
      next: {
        next: null,
        value: 5, //  this is the tail
      },
    },
  },
};
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode; // Connect the old tail to the new node
    this.tail = newNode; // Move the tail label to the new node
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
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

  insert(index, value) {
    if (index <= 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index <= 0 || index >= this.length) {
      console.log("index is out of range");
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const deletedNode = leader.next;
    leader.next = deletedNode.next;

    this.length--;
    return this.printList();
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(5);
// myLinkedList.append(7);
myLinkedList.prepend(1);
myLinkedList.prepend(4);
myLinkedList.printList();
myLinkedList.remove(3);
// myLinkedList.printList();

// console.log(myLinkedList);
