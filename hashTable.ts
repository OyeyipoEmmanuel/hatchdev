const hashFunction = (value: string, size: number): number =>{
    let sumOfChar: number = 0
    for(let i = 0; i < value.length; i++){  
        sumOfChar += value.charCodeAt(i)
    }

    let hashIndex = sumOfChar % size

    return hashIndex
}

class HashNode{
    value: string;

    constructor(value: string){
        this.value = value
    }
}

class HashTable{
    hashSet: HashNode[]
    private size: number;

    constructor(){
        this.size = 10
        this.hashSet = new Array(this.size)
    }

    addAtHashIndex(value: string){
        const newValue = new HashNode(value)
        const generatedIndex = hashFunction(value, this.size)

        this.hashSet[generatedIndex] = newValue
    }
}

const newNode = new HashTable()
newNode.addAtHashIndex("Emma")
newNode.addAtHashIndex("Ben")
newNode.addAtHashIndex("John")
newNode.addAtHashIndex("Doe")

console.log(newNode)