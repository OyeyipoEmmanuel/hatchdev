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
    traverseToIndex(index) {
        if (this.head && index === 0) {
            return this.head;
        }
        let count = 0;
        let current = this.head;
        while ((current === null || current === void 0 ? void 0 : current.next) && count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
    insert(value, index) {
        var _a, _b;
        const newNode = new Nodezz(value);
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.value) === index) {
            this.prepend(value);
        }
        const prevNodeToInsertAt = (_b = this.traverseToIndex(index)) === null || _b === void 0 ? void 0 : _b.prev;
        const nodeAtIndex = this.traverseToIndex(index);
        if (prevNodeToInsertAt && nodeAtIndex) {
            prevNodeToInsertAt.next = newNode;
            prevNodeToInsertAt.next.next = nodeAtIndex;
            prevNodeToInsertAt.next.prev = prevNodeToInsertAt;
            nodeAtIndex.prev = prevNodeToInsertAt.next;
        }
    }
    deleteNode(value) {
        var _a;
        if (this.head === null) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            return;
        }
        let current = this.head;
        while (current.next && ((_a = current.next) === null || _a === void 0 ? void 0 : _a.value) !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            if (current.next) {
                current.next.prev = current;
            }
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
// doublyNode.deleteNode(30)
doublyNode.insert(55, 3);
doublyNode.printForward();
doublyNode.printBackward();
// console.log(doublyNode);
