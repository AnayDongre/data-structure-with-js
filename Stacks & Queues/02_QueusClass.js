class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this.first);
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length = 1;
      console.log(this);
      return this;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      console.log(this);
      return this;
    }
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    console.log(this);
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

myQueue.peek();
myQueue.dequeue();

//Joy
//Matt
//Pavel
//Samir
