/**
 * Example of how it updates (appending, to the tail)
When the list is initialised, the tail is made equal to the head, so they reference the same object this.tail = this.head,
when appending, we need to update the next property in the tail (which is still referencing the same object as the head)
this.tail.next = newNode, this updates the same object’s next property, when this is done,
a reference is created to this new node in the head and the tail, it kind of lives in the next property,
after we do  this.tail = newNode, when we do this, it’s as if there’s a link between head.next and this.tail,
on the next iteration when we do this.tail.next = newNode, we’re updating the reference inside the head.next  (or head.next.next etc)
 */
// Link node 10 and node 20
// node10.next = node20;
// node20.prev = node10;
// // Link node 20 and node 30
// node20.next = node30;
// node30.prev = node20;

// const doublyLinkedList = {
//   head: {
//     value: 10,
//     prev: null,
//     next: {
//       value: 20,
//       prev: /* reference back to node 10 */,
//       next: {
//         value: 30,
//         prev: /* reference back to node 20 */,
//         next: null,
//       },
//     },
//   },
//   tail: /* reference to node 30 */,
//   length: 3,
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail; //Point to backwards to old tail, as this will be the last in line, replacing tail
    this.tail.next = newNode; // Point the old tail to the new node, it will need to have next populated as it will no longer be last in line
    this.tail = newNode; // Make new node the new tail
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    this.printList();
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
    const pointerNext = leader.next;
    const pointerPrev = leader.previous;
    leader.next = newNode;
    newNode.next = pointerNext;
    newNode.previous = pointerPrev;
    this.length++;
    console.log(this);

    // this.logList("insert");
    return this;
    // return this.printList();
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(16);
myLinkedList.append(5);
// myLinkedList.append(7);
// myLinkedList.append(9);
myLinkedList.prepend(1);
myLinkedList.prepend(4);
myLinkedList.insert(1, 12);
// myLinkedList.printList();
// myLinkedList.remove(3);
// myLinkedList.printList();

// console.log(myLinkedList);
