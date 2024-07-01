function getValueWithDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay)
    })
}

function getValueWithDelayError(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error");
        }, delay)
    })
}

async function doStuff() {
    try {
        let message = await getValueWithDelay(1, 1000);
        console.log(message);
        message = await getValueWithDelay(2, 1000);
        console.log(message);
        message = await getValueWithDelayError(3, 1000);
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

doStuff();