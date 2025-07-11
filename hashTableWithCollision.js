"use strict";
const hashFunction2 = (value, size) => {
    let sumOfChar = 0;
    for (let i = 0; i < value.length; i++) {
        sumOfChar += value.charCodeAt(i);
    }
    let hashIndex = sumOfChar % size;
    return hashIndex;
};
class HashNodeWithCollision {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class HashTableWithCollision {
    constructor() {
        this.size = 10;
        this.hashTable = new Array(this.size).fill(null);
    }
    add(value) {
        const newValue = new HashNodeWithCollision(value);
        const generatedIndex = hashFunction2(value, this.size);
        if (this.hashTable[generatedIndex] === null) {
            this.hashTable[generatedIndex] = newValue;
            return;
        }
        let current = this.hashTable[generatedIndex];
        while (current !== null && current.next) {
            current = current.next;
        }
        current.next = newValue;
    }
}
const newNodez = new HashTableWithCollision();
newNodez.add("Emma");
newNodez.add("Dan");
newNodez.add("Ann");
newNodez.add("Ned");
newNodez.add("Moe");
console.log(newNodez);
