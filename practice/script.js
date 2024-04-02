// console.log("Before: ", newMap);

// const addToMap = (mapObj, arrEntry) => {
//     const key = arrEntry[0];
//     const value = arrEntry[1];
//     if (!mapObj.has(key)) {
//         mapObj.set(key, value);
//     } else {
//         return
//     }
// }

// const newEntry = ["hello", "goodbye"];

// addToMap(newMap, newEntry);

// console.log("After: ", newMap);


// const favoriteGames = [
//     { "Dragon's Dogma": 1 },
//     { "Dragon's Dogma 2": 2 },
//     { "Bloodborne": 3 },
//     { "Shadow of the Colossus": 4 },
//     { "Dragon's Crown": 5 },
//     { "Stellar Blade": 6 },
//     { "Nier Automata": 7 }
// ];

// const newMap = new Map();

// function addGames(mapObj, gamesArr) {
//     if (mapObj && gamesArr) {
//         gamesArr.forEach(game => {
//             const key = Object.keys(game)[0];
//             const value = game[key];
//             if (!mapObj.has(key)) {
//                 mapObj.set(key, value);
//             } else {
//                 console.log(key, "already exists in map.")
//             }
//         })
//     }
//     return mapObj;
// }

// const result = addGames(newMap, favoriteGames);

// console.log(result);


// Fibonacci

// function fibonacci(target) {
//     const fib = [0, 1];

//     for (let i = 2; i < target; i++) {
//         fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib;
// }

// console.log(fibonacci(13));

// FizzBuzz

function fizzBuzz(target) {
    const arr = [0];
    for (let i = 1; i < target; i++) {
        i % 3 === 0 && i % 5 === 0 ?
        arr.push("FizzBuzz") :
        i % 3 === 0 ?
        arr.push("Fizz") :
        i % 5 === 0 ?
        arr.push("Buzz") :
        arr.push(i);
    }
    return arr;
}

// console.log(fizzBuzz(30));

function printFizzBuzz(target) {
    const result = [];
    for (let i = 1, j = 0; i < target; i++, j++) {
        i % 3 === 0 && i % 5 === 0 ?
        result[j] = 'fizzbuzz' :
        i % 3 === 0 ?
        result[j] = 'fizz' :
        i % 5 === 0 ?
        result[j] = 'buzz' :
        result[j] = i
    }
    return result;
}

// console.log(printFizzBuzz(30));




// const printFib = (target) => {
//     let fib = [0, 1];
//     for (let i = 0; i < target-2; i++) {
//         fib.push(fib[fib.length-1] + fib[fib.length-2]);
//     }
//     return fib;
// }

const printFib = (target) => {
    let fib = [0, 1];
    for (let i = 2; i < target; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}

console.log(printFib(5));