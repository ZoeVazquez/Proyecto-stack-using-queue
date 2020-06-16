var MyStack = function() {
  this.queue = new Queue();
};

MyStack.prototype.push = function(x) {
  let rotations = this.queue.size();

  this.queue.enqueue(x);

  while (rotations > 0) {
    this.queue.enqueue(this.queue.dequeue());
    rotations--;
  }
};

//Remueve el elemento del tope del stack y devuelve ese mismo elemento

MyStack.prototype.pop = function() {
  return this.queue.dequeue();
};

//Toma el elemento superior

MyStack.prototype.top = function() {
 return this.queue.peek();
};

//Regresa cuando el stack esta vacio
MyStack.prototype.empty = function() {
 return this.queue.isEmpty();
};

//Class Queue
class Queue {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    this.storage = {};
  }

  enqueue(val) {
    this.storage[this.top] = val;
    this.top++;
  }

  dequeue() {
    let removedElement = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return removedElement;
  }

  peek() {
    return this.storage[this.bottom];
  }

  size() {
    return this.top- this.bottom;
  }

  isEmpty() {
    return this.size() === 0;
  }
}