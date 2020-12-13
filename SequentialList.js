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

  remove(index) {
    if (this.isEmpty() || (index < 0 || index > this.last)) return false;
    this.list[index] = null;

    for (let i = index; i <= this.last; i++) {
      this.list[index] = this.list[index + 1];
      index++;
    }

    this.last--;
    return index;
  }

  isEmpty() {
    if (this.last === -1) return true;
    return false;
  }

  isFull() {
    if (this.last === this.list.length - 1) return true;
    return false;
  }

  getSize () {
    return this.last + 1;
  }

  print() {
    for (let i = 0; i <= this.last; i++) {
      console.log(this.list[i]);
    }
  }
}

teste = new SequentialList(5);

teste.add(1);
teste.add(2);
teste.add(3);
teste.add(4, 2);
teste.add(5, 2);

teste.remove(0);

teste.add(6);

teste.print();