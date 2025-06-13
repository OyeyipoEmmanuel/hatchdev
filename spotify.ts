class SongNode {
  value: string | number;
  prev: SongNode | null;
  next: SongNode | null;

  constructor(value: string | number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedListt {
  head: SongNode | null;
  tail: SongNode | null;
  currentSong: SongNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.currentSong = null;
  }

  addSong(value: string | number) {
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
    this.currentSong = this.currentSong?.next ?? null;
    console.log(this.currentSong?.value + " currently playing");
  }
  playPrev() {
    if (this.currentSong?.prev === null) {
      this.currentSong = this.tail;
      console.log(this.currentSong?.value + " currently playing");
      return;
    }
    this.currentSong = this.currentSong?.prev ?? null;

    console.log(this.currentSong?.value + " currently playing");
  }
  printForward(): string {
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
    this.currentSong = this.currentSong;
    console.log(this.currentSong?.value + " currently playing");
  }
  deleteSong(value: string) {
    if (this.head === null) return;

    if (this.head?.value === value) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      console.log(this.head?.value + " deleted");
      return;
    }

    if (this.tail?.value === value) {
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
  private randomIndex(arrLength: number): number {
    let randomIndex = Math.random() * arrLength - 1;

    return randomIndex;
  }
  shuffle(): string {
    let arr: SongNode[] = [];

    let current = this.head;
    while (current && current.next !== null) {
      arr.push(current);
      current = current.next;
    }

    let randomIndex: number = this.randomIndex(arr.length);

    for (let i = 0; i < arr.length; i++) {
      if (i == randomIndex) {
        this.randomIndex(arr.length);
      }
      let temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }

    let curr = this.head
    while (curr?.next !== null) {
      for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
          this.head = arr[i];
        }
        curr = arr[i]
        curr = curr.next
      }
    }
    return this.printForward()
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
console.log(song.shuffle())
// song.deleteSong("Not like us");
song.playNext();
song.printBackward();
console.log(song.printForward());
