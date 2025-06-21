"use strict";
class Nodez {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Nodez(value);
        // append to the head if there was never a head
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            // Iterate till you get a node where a .next does not exist
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    prepend(value) {
        const newNode = new Nodez(value); // value: 30 next: 10
        newNode.next = this.head;
        this.head = newNode;
    }
    insert(value, positionValue) {
        var _a;
        const newNode = new Nodez(value);
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.value) === positionValue) {
            newNode.next = this.head;
            this.head = newNode;
        }
        let current = this.head;
        while ((current === null || current === void 0 ? void 0 : current.next) && current.next.value !== positionValue) {
            current = current.next;
        }
        if (current === null || current === void 0 ? void 0 : current.next) {
            newNode.next = current.next.next;
            current.next.next = newNode;
        }
        // newNode.next = current?.next
    }
    delete(value) {
        if (this.head === null)
            return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }
    find(value) {
        var _a;
        if (!this.head)
            return;
        if (this.head.value === value) {
            console.log("Found ");
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (((_a = current.next) === null || _a === void 0 ? void 0 : _a.value) === value) {
            console.log("Found");
            return;
        }
        else {
            console.log("Not");
        }
    }
    // reverse(): Nodez{
    //   if(this.head?.next === null){
    //     return this.head
    //   }
    //   zd
    // }
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}
const node = new LinkedList();
node.append(20);
node.append(40);
node.append(60);
node.append(80);
node.append(100);
node.prepend(10);
node.insert(30, 20);
node.insert(50, 40);
node.insert(70, 60);
node.insert(90, 80);
// node.delete(20)
// node.find(400)
// node.append(40);
node.print();
