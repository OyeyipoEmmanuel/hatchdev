import HashKey from "./hashFunction";

class NodeH {
  key: string;
  value: string | number;
  next: NodeH | null;

  constructor(key: string, value: string | number) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMap {
  Map: NodeH[] | null[];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.Map = new Array(size).map(() => null);
  }

  addValue(key: string, value: string | number) {
    const newNode = new NodeH(key, value);
    let index = HashKey(key, this.size);
    let node = this.Map[index];

    if (!node) {
      this.Map[index] = newNode;
      return;
    }

    let current = this.Map[index];

    while (current !== null) {
      current = current.next;
    }

    current = newNode;
  }
  getValueByKey(key: string) {
    let index = HashKey(key, this.size);


    let current = this.Map[index];
    while (current !== null) {
      console.log(current);
      if (current.key === key) {
        console.log("Value Found: " + current.value);
        break;
      }
      current = current.next;
    }

    console.log("Not");
  }
}

const newHashMap = new HashMap(100);
newHashMap.addValue("Name", "Emmanuel");
newHashMap.addValue("age", "Ben");
newHashMap.addValue("class", "Wen");
newHashMap.addValue("Width", "Cen");
newHashMap.addValue("Height", "Qeu");
console.log(newHashMap);

newHashMap.getValueByKey("age");
