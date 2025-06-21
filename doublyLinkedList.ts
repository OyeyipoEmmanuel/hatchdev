class Nodezz {
  value: number;
  next: Nodezz | null;
  prev: Nodezz | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: Nodezz | null;

  constructor() {
    this.head = null;
  }

  prepend(value: number) {
    const newNode = new Nodezz(value);

    newNode.next = this.head;
    this.head = newNode;
  }
  append(value: number) {
    const newNode = new Nodezz(value);

    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
      newNode.prev = current;
    }
  }
  traverseToIndex(index: number){
    if(this.head && index === 0){
      return this.head
    }
    let count = 0
    let current = this.head

    while (current?.next && count !== index){
      current = current.next
      count++
    }
    return current
  }

  insert(value: number, index: number){
    const newNode = new Nodezz(value)

    if(this.head?.value === index){
      this.prepend(value)
    }

    const prevNodeToInsertAt = this.traverseToIndex(index)?.prev
    const nodeAtIndex = this.traverseToIndex(index)
    if(prevNodeToInsertAt && nodeAtIndex){
      prevNodeToInsertAt!.next = newNode
      prevNodeToInsertAt.next.next = nodeAtIndex
      prevNodeToInsertAt.next.prev = prevNodeToInsertAt
      nodeAtIndex.prev = prevNodeToInsertAt.next
    }
    

  }


  deleteNode(value: number){
    if(this.head === null){
      return;
    }

    if(this.head.value === value){
      this.head = this.head.next
      if(this.head){
        this.head.prev = null
      }
      
      return;
    }

    let current = this.head
    while(current.next && current.next?.value !== value){
      current = current.next
    }

    if(current.next){
      current.next = current.next.next
      if(current.next){
        current.next.prev = current
      }
    }

  }
  printForward() {
    let current = this.head;
    let result: string = "";
    while (current) {
      result += `${current.value}` + " > ";
      current = current.next;
    }
    console.log(result + "null");
  }
  printBackward() {
    let current = this.head;
    let output = "";
    while (current?.next) {
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
doublyNode.insert(55, 3)

doublyNode.printForward();
doublyNode.printBackward();

// console.log(doublyNode);
