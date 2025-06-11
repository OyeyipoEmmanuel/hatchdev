"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashFunction_1 = __importDefault(require("./hashFunction"));
class NodeH {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashMap {
    constructor(size) {
        this.size = size;
        this.Map = new Array(size).map(() => null);
    }
    setValue(key, value) {
        const newNode = new NodeH(key, value);
        let index = (0, hashFunction_1.default)(key, this.size);
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
    getValueByKey(key) {
        let index = (0, hashFunction_1.default)(key, this.size);
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
newHashMap.setValue("Name", "Emmanuel");
newHashMap.setValue("age", "Ben");
newHashMap.setValue("class", "Wen");
newHashMap.setValue("Width", "Cen");
newHashMap.setValue("Height", "Qeu");
console.log(newHashMap);
newHashMap.getValueByKey("age");
