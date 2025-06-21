"use strict";
class SinglyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new SinglyNode(value);
        if (this.head === null) {
            this.head = newNode;
            // this.head.next = this.tail
            this.length++;
        }
        if (this.tail) {
            this.tail = newNode;
            this.tail.next = null;
            this.length++;
        }
    }
}
const nodes = new SLinkedList();
nodes.append(10);
nodes.append(20);
nodes.append(30);
console.log(nodes);
// nodes.append(10)
// nodes.append(10)
