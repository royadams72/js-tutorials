class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    // This creates an index number between 0 and data.length
    // To add to data array
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;

      // e.g. key = 'abc'
      // 'abc'.charCodeAt(0) === 97 x 0 = 0
      // 'abc'.charCodeAt(1) === 98 x 1 = 98
      // 'abc'.charCodeAt(2) === 99 x 2 = 198
      // Total = 296

      // So even if a key had the same letters 'bac' it would return a different result
      // 'bac'.charCodeAt(0) === 98 x 0 = 0
      // 'bac'.charCodeAt(1) === 97 x 1 = 97
      // 'bac'.charCodeAt(2) === 99 x 2 = 198
      // Total = 295
      // % this.data.length the modulo operator makes sure the number is between 0 & 49
      // e.g. 296 % 50 = how many times does 50 go into 296 and what's left over = 46
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      // If there is no item at that index
      // create an empty array
      this.data[address] = [];
    }
    // Allways push, rather than add - this handles collisions
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    // An array within data
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1) if no collisions

  keys() {
    // An array within data
    let keyArr = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArr.push(this.data[i][0][0]);
      }
    }
    return keyArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grape", 20000);
myHashTable.set("apples", 10000);
myHashTable.set("pears", 90000);
console.log(myHashTable.keys());
