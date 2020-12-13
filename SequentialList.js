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
}