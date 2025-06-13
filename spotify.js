"use strict";
class SongNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedListt {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSong = null;
    }
    addSong(value) {
        const newNode = new SongNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        this.tail = newNode;
        current.next = newNode;
        newNode.prev = current;
        this.currentSong = this.head;
    }
    playNext() {
        var _a, _b, _c;
        this.currentSong = (_b = (_a = this.currentSong) === null || _a === void 0 ? void 0 : _a.next) !== null && _b !== void 0 ? _b : null;
        console.log(((_c = this.currentSong) === null || _c === void 0 ? void 0 : _c.value) + " currently playing");
    }
    playPrev() {
        var _a, _b, _c, _d, _e;
        if (((_a = this.currentSong) === null || _a === void 0 ? void 0 : _a.prev) === null) {
            this.currentSong = this.tail;
            console.log(((_b = this.currentSong) === null || _b === void 0 ? void 0 : _b.value) + " currently playing");
            return;
        }
        this.currentSong = (_d = (_c = this.currentSong) === null || _c === void 0 ? void 0 : _c.prev) !== null && _d !== void 0 ? _d : null;
        console.log(((_e = this.currentSong) === null || _e === void 0 ? void 0 : _e.value) + " currently playing");
    }
    printForward() {
        let current = this.head;
        let output = "";
        while (current) {
            output += `${current.value} -> `;
            current = current.next;
        }
        return output + " null ";
    }
    printBackward() {
        let current = this.tail;
        let output = "";
        while (current) {
            output += `${current.value} <- `;
            current = current.prev;
        }
        console.log("null <- " + output);
    }
    repeat() {
        var _a;
        this.currentSong = this.currentSong;
        console.log(((_a = this.currentSong) === null || _a === void 0 ? void 0 : _a.value) + " currently playing");
    }
    deleteSong(value) {
        var _a, _b, _c;
        if (this.head === null)
            return;
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.value) === value) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            console.log(((_b = this.head) === null || _b === void 0 ? void 0 : _b.value) + " deleted");
            return;
        }
        if (((_c = this.tail) === null || _c === void 0 ? void 0 : _c.value) === value) {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
            console.log(value + " deleted");
            return;
        }
        let current = this.head;
        while (current.next !== null && current.value !== value) {
            current = current.next;
        }
        // if(current.value !== value){
        //     console.log(value + " was not found");
        // }
        if (current.prev) {
            current.prev.next = current.next;
        }
        if (current.next) {
            current.next.prev = current.prev;
        }
        console.log(value + " deleted");
    }
    randomIndex(arrLength) {
        let randomIndex = Math.random() * arrLength - 1;
        return randomIndex;
    }
    shuffle() {
        let arr = [];
        let current = this.head;
        while (current && current.next !== null) {
            arr.push(current);
            current = current.next;
        }
        let randomIndex = this.randomIndex(arr.length);
        for (let i = 0; i < arr.length; i++) {
            if (i == randomIndex) {
                this.randomIndex(arr.length);
            }
            let temp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = temp;
        }
        let curr = this.head;
        while ((curr === null || curr === void 0 ? void 0 : curr.next) !== null) {
            for (let i = 0; i < arr.length; i++) {
                if (i == 0) {
                    this.head = arr[i];
                }
                curr = arr[i];
                curr = curr.next;
            }
        }
        return this.printForward();
    }
}
const song = new LinkedListt();
song.addSong("Into the Unknownn");
song.addSong("The Nights");
song.addSong("Greatest showman");
song.addSong("7 years");
song.addSong("Lonely");
song.addSong("Blinded by the lights");
song.addSong("Not like us");
console.log(song.shuffle());
// song.deleteSong("Not like us");
song.playNext();
song.printBackward();
console.log(song.printForward());
