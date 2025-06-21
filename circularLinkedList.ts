class NodeC {
  value: string | number;
  next: NodeC | null;

  constructor(value: string | number) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  head: NodeC | null;
  // tail: NodeC | null

  constructor() {
    this.head = null;
    // this.tail = null
  }

  append(value: string | number) {
    const newNode = new NodeC(value);

    if (this.head === null) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let current = this.head;
    while (current.next && current.next !== this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
  }
  print() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    const values = [];

    do {
      values.push(current.value);
      current = current.next!;
    } while (current !== this.head);

    console.log(values.join(" -> ") + " -> (back to head)");
  }
}

const ccNode = new CircularLinkedList();
ccNode.append(10);
ccNode.append(20);
ccNode.append(30);
ccNode.append(40);
ccNode.append(50);
ccNode.print()

