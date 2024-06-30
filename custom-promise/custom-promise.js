const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
}

class CustomPromise {
    #thenCbs = [];
    #state = STATE.PENDING;
    #value
    constructor(cb) {
        try {
            cb(this.#onSuccess, this.#onFail);
        } catch (e) {
            this.#onFail(e);
        }
    }

    #runCallbacks() {
        if (this.#state === STATE.FULFILLED) {
            
        }
    }

    #onSuccess(value) {
        if (this.#state !== STATE.PENDING) return;
        this.#value = value;
        this.#state = STATE.FULFILLED;
        this.#runCallbacks();
    }
    
    #onFail(value) {
        if (this.#state !== STATE.PENDING) return;
        this.#value = value;
        this.#state = STATE.REJECTED;
        this.#runCallbacks();
    }

    then(cb) {
        this.#thenCbs.push(cb);
    }
}

module.exports = CustomPromise;

const p = new Promise(cb).then();