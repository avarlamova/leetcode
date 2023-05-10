// FIFO queue

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(arg) {
    this.queue.push(arg);
  }
  dequeue() {
    return this.queue.shift();
  }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
const r1 = myQueue.dequeue() === 1;
const r2 = myQueue.dequeue() === 2;

console.log(r1 && r2);
