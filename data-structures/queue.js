class Queue {
    constructor() {
        this.collection = [];
    }

    // Prints all elements in the queue
    print() {
        console.log(this.collection);
    }

    // Adds an element to the end of the queue
    enqueue(element) {
        this.collection.push(element);
    }

    // Removes and returns the element at the front of the queue
    dequeue() {
        return this.collection.shift();
    }

    // Returns the element at the front of the queue without removing it
    front() {
        return this.collection[0];
    }

    // Returns true if the queue is empty, otherwise false
    isEmpty() {
        return this.collection.length === 0;
    }

    // Returns the number of elements in the queue
    size() {
        return this.collection.length;
    }
}