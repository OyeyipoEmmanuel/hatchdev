class Nodez {
  value: number;
  next: Nodez | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Nodez | null;

  constructor() {
    this.head = null;
  }

  append(value: number) {
    const newNode = new Nodez(value);
    // append to the head if there was never a head
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;

      // Iterate till you get a node where a .next does not exist
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  prepend(value: number) {
    const newNode = new Nodez(value); // value: 30 next: 10

    newNode.next = this.head;

    this.head = newNode;
  }
  delete(value: number) {
    if (this.head === null) return;

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
  find(value: number){
    if(!this.head) return

    if(this.head.value === value){
      console.log("Found ")
      return
    }

    let current = this.head

    while(current.next && current.next.value !== value){
      current = current.next
    }

    if(current.next?.value === value){
     console.log("Found")
     return;
    }else{
      console.log("Not")
    }

    
  }
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
node.append(30);
node.append(40);
node.append(50);
node.append(60);
node.append(20);
node.prepend(10);

node.delete(20)

node.find(400)
// node.append(40);
node.print()
