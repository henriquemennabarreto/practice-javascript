class Queue {
    constructor(size) {
        this.size = size;
        this.q = [];
        this.first = 0;
        this.last = -1;
    }

    isEmpty() {
        if (this.last === this.first - 1)
            return true;
        return false
    }

    isFull() {
        if (this.size === this.q.length)
            return true;
        return false
    }

    enqueue(element) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }
        this.last++;
        this.q[this.last] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        let o = this.q[this.first];
        delete(this.q[this.first]);
        this.first++;
        return o;
    }
}

queue = new Queue(5);



console.log(queue.isEmpty());
queue.enqueue(1);
queue.dequeue();
console.log(queue.isEmpty());
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.isFull());
queue.enqueue(5);

queue.dequeue();
queue.dequeue();

//queue.enqueue(5);
//queue.enqueue(5);


console.log(queue.isFull());
console.log(queue);

