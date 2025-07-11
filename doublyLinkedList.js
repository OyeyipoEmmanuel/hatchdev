"use strict";
class Nodezz {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    prepend(value) {
        const newNode = new Nodezz(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    append(value) {
        const newNode = new Nodezz(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }
    printForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.value}` + " > ";
            current = current.next;
        }
        console.log(result + "null");
    }
    printBackward() {
        let current = this.head;
        let output = "";
        while (current === null || current === void 0 ? void 0 : current.next) {
            current = current.next;
        }
        while (current) {
            output += `${current.value}` + "<";
            current = current.prev;
        }
        console.log(output + "null");
    }
}
const doublyNode = new DoublyLinkedList();
// doublyNode.prepend(20);
doublyNode.append(30);
doublyNode.append(40);
doublyNode.append(50);
doublyNode.append(60);
doublyNode.append(70);
doublyNode.append(80);
doublyNode.printForward();
doublyNode.printBackward();
// console.log(doublyNode);
