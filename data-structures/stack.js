// class Stack {
//     constructor() {
//         this.count = 0;
//         this.storage = {};
//     }

//     push(value) {
//         this.storage[this.count] = value;
//         this.count++;
//     }

//     pop() {
//         if (this.count === 0) {
//             return undefined;
//         }
//         this.count--;
//         const result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     peek() {
//         return this.storage[this.count - 1];
//     }

//     size() {
//         return this.count;
//     }
// }


class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) return undefined;
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    clear() {
        this.storage = {};
        this.count = 0;
    }

    toString() {
        let result = '';
        for (let i = 0; i < this.count; i++) {
            result += this.storage[i] + ' ';
        }
        return result.trim();
    }

    toArray() {
        let array = [];
        for (let i = 0; i < this.count; i++) {
            array.push(this.storage[i]);
        }
        return array;
    }

    contains(element) {
        for (let i = 0; i < this.count; i++) {
            if (this.storage[i] === element) {
                return true;
            }
        }
        return false;
    }

    search(element) {
        for (let i = this.count - 1; i >= 0; i--) {
            if (this.storage[i] === element) {
                return this.count - i;
            }
        }
        return -1;  // Element not found
    }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.pop();
console.log(newStack);
const peek = newStack.peek();
console.log("Peek", peek);
const size = newStack.size();
console.log("Size", size);