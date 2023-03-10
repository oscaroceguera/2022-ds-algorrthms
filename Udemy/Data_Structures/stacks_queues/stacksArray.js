const log = console.log;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();

log(myStack.push("Google"));
log(myStack.push("Udemy"));
log(myStack.push("Discord"));
log("peek ===>", myStack.peek());
log("pop ===>", myStack.pop());
log("pop ===>", myStack.pop());
log("pop ===>", myStack.pop());
