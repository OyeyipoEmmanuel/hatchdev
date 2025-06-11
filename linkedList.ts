class LNode {
    value: number;
    next: LNode | null; 

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    head: LNode | null;

    constructor() {
        this.head = null;
    }

    add(value: number) {
        const newNode = new LNode(value);

        if (this.head == null) {
            this.head =  newNode;
        }else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        
    }

}

const list = new LinkedList();
list.add(20)
// list.add(50)
// list.add(30)
console.log(list); // Output: 10