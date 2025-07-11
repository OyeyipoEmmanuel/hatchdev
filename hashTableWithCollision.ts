const hashFunction2 = (value: string, size: number): number => {
  let sumOfChar: number = 0;
  for (let i = 0; i < value.length; i++) {
    sumOfChar += value.charCodeAt(i);
  }

  let hashIndex = sumOfChar % size;

  return hashIndex;
};

class HashNodeWithCollision {
  value: string;
  next: HashNodeWithCollision | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class HashTableWithCollision {
  hashTable: HashNodeWithCollision[] | null[];
  size: number;

  constructor() {
    this.size = 10;
    this.hashTable = new Array(this.size).fill(null)
  }

  add(value: string) {
    const newValue = new HashNodeWithCollision(value);
    const generatedIndex = hashFunction2(value, this.size);

    if (this.hashTable[generatedIndex] === null) {
      this.hashTable[generatedIndex] = newValue;
      return;
    }

    let current = this.hashTable[generatedIndex];
    while (  current !== null && current.next) {
      current = current.next;
    }

    current.next = newValue;
  }
  find(value: string){
    const index: number = hashFunction2(value, this.size)

    if(this.hashTable[index]?.value === value){
      return `Found at index ${index}`
    }

    let current = this.hashTable[index]
    let step = 0
    while(current?.next && current.value !== value){
      current = current.next
      step++
    }

    return `Found at index ${index} as a Linked list at position ${step}`
  }
  
}

const newNodez = new HashTableWithCollision();

newNodez.add("Emma");
newNodez.add("Dan");  
newNodez.add("Ann");  
newNodez.add("Ned");  
newNodez.add("Moe"); 
console.log(newNodez.find("Ann"));
console.log(newNodez.find("Ned"));
console.log(newNodez.find("Moe"));
console.log(newNodez.find("jgflmf"));
console.log(newNodez);
