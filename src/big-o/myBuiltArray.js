class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  delete(index) {
    delete this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    // We start from the item we've deleted i = index
    // because we've deleted an item we use "this.length - 1" as we want to leave the lase item alone
    // as it should not exist anymore
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      //  we copy the item to the right over to the left
    }
    // delete the last item, if not they'll be a copy
    delete this.data[this.length - 1];
    this.length--;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("low");
newArray.push("li");
newArray.push("do");
console.log(newArray);
newArray.delete(2);
console.log(newArray);
