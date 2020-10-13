// With Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (!this.length) {
      return null;
    }
    console.log(this.top);
    return this.top;
  }
  push(value) {
    if (!this.length) {
      this.top = new Node(value);
      this.bottom = this.top;
      this.length = 1;
      return this;
      console.log(this);
    } else {
      const newTop = new Node(value);
      newTop.next = this.top;
      this.top = newTop;
      this.length++;
      console.log(this);
      return this;
    }
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.bottom === this.top) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    console.log(this);
    return this;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.peek();
myStack.pop();
//Discord
//Udemy
//google

// With simple list/array
class StackWithArray {
  constructor() {
    this.stack = [];
  }
  peek() {
    if (!this.stack.length) {
      return null;
    }
    console.log(this.stack[this.stack.length - 1]);
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (!this.top) {
      return null;
    }
    this.stack.pop();
  }
}
