class SequentialList {
  constructor(size) {
    this.list = [];
    this.last = -1;
    this.list.length = size;
  }

  getElement(index) {
    let element = (index < 0 || index > this.last) ? false : this.list[index];
    return element;
  }

  add(value) {
    if (this.isFull() === true) return false;
    this.last++;
    this.list[this.last] = value;
    return true;
  }

  addByIndex(value, index) {
    for (let i = this.last + 1; i > index; i--) {
      this.list[i] = this.list[i - 1];
    }
    this.last++;
    this.list[index] = value;
  }
}