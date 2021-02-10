class Stack {
  constructor(size) {
    this.size = size;
    this.s = [];
    this.top = -1;
  }

  size() {
    return this.top + 1;
  }

  isEmpty() {
    if (this.top == -1)
      return true;
    return false;
  }

  isFull() {
    if (this.top == (this.size - 1))
      return true;
    return false;
  }

  push(value) {
    if (!this.isFull())
      this.s[++this.top] = value;
  }

  pop() {
    if (!this.isFull())
      var o = this.s[this.top];
      this.s[this.top] = null;
      this.top--;
      return o;
  }

  getTop() {
    return this.s[this.top];
  }
}

stack = new Stack(10);

stack.push(15);
stack.push(17);
stack.push(18);

stack.pop();
stack.push(18);
stack.push(182);

console.log(stack.getTop());