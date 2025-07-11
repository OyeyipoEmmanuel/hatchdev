"use strict";
const hashFunction = (value, size) => {
    let sumOfChar = 0;
    for (let i = 0; i < value.length; i++) {
        sumOfChar += value.charCodeAt(i);
    }
    let hashIndex = sumOfChar % size;
    return hashIndex;
};
class HashNode {
    constructor(value) {
        this.value = value;
    }
}
class HashTable {
    constructor() {
        this.size = 10;
        this.hashSet = new Array(this.size);
    }
    addAtHashIndex(value) {
        const newValue = new HashNode(value);
        const generatedIndex = hashFunction(value, this.size);
        this.hashSet[generatedIndex] = newValue;
    }
}
const newNode = new HashTable();
newNode.addAtHashIndex("Emma");
newNode.addAtHashIndex("Ben");
newNode.addAtHashIndex("John");
newNode.addAtHashIndex("Doe");
console.log(newNode);
