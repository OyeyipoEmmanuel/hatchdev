"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hash(key, size) {
    let hash = 0;
    if (key.length === 0)
        return hash;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % size;
}
exports.default = hash;
