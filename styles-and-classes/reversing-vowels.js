const reverseVowels = (s) => {
    const shallowCopy = [...s]
    const regex = /[aeiouAEIOU]/
    let left = 0;
    let right = shallowCopy.length-1;
    while(left < right) {
        if (regex.test(shallowCopy[left]) && regex.test(shallowCopy[right])) {
            [shallowCopy[left], shallowCopy[right]] = [shallowCopy[right], shallowCopy[left]]
            left++
            right--
        } else if (!regex.test(shallowCopy[left]) && regex.test(shallowCopy[right])) {
            left++
        } else if (regex.test(shallowCopy[left]) && !regex.test(shallowCopy[right])) {
            right--
        } else {
            left++
            right--
        }
    }
    return shallowCopy.join('')
}

// console.log(reverseVowels('supercalifragilisticexpialidocious'))
// console.log(reverseVowels('I went to school last Saturday to see if the staff actually went home on the weekends.'))


let a = ['a', 'b', ['c', 'd']]
// let b = [...a]
// a[2][1] = 'e'

// console.log(a)
// console.log(b)

// shallow copy

function oneLevelShallowCopy(arr) {
    const result = arr.map(element => {
        if (Array.isArray(element)) {
            return element.slice(); // Create a copy of nested arrays
        } else if (typeof element === 'object' && element !== null) {
            return Object.assign({}, element); // Create a copy of nested objects
        } else {
            return element; // For primitive types, return as is
        }
    });

    return result;
}

// let b = oneLevelShallowCopy(a)
// a[2][0] = 'w'
// console.log(a)
// console.log(b)

// function infinitelyDeepCopy(arr) {
//     return arr.map(element => {
//         if (Array.isArray(element)) {
//             return infinitelyDeepCopy(element); // Recursively copy nested arrays
//         } else if (typeof element === 'object' && element !== null) {
//             // Recursively copy nested objects and their properties
//             return Object.keys(element).reduce((acc, key) => {
//                 acc[key] = infinitelyDeepCopy(element[key]);
//                 return acc;
//             }, {});
//         } else {
//             return element; // For primitive types, return as is
//         }
//     });
// }

function infinitelyDeepCopy(input) {
    if (typeof input !== 'object' || input === null) {
        // For primitive types or null, return as is
        return input;
    }

    if (Array.isArray(input)) {
        // If input is an array, recursively copy nested arrays
        return input.map(element => infinitelyDeepCopy(element));
    } else {
        // If input is an object, recursively copy nested objects and their properties
        return Object.keys(input).reduce((acc, key) => {
            acc[key] = infinitelyDeepCopy(input[key]);
            return acc;
        }, {});
    }
}


const original = [
    1,
    'hello',
    {
        name: 'John',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York',
            country: 'USA'
        },
        hobbies: ['reading', 'painting'],
        friends: [
            {
                name: 'Alice',
                age: 28,
                address: {
                    street: '456 Elm St',
                    city: 'Los Angeles',
                    country: 'USA'
                },
                hobbies: ['swimming', 'hiking']
            },
            {
                name: 'Bob',
                age: 32,
                address: {
                    street: '789 Oak St',
                    city: 'Chicago',
                    country: 'USA'
                },
                hobbies: ['cooking', 'gardening']
            }
        ]
    }
];

const copy = infinitelyDeepCopy(original)

copy[2].friends[0].hobbies.push('gaming')
copy[2].friends[0].hobbies.shift()

console.log(JSON.stringify(original, null, 2))
console.log(JSON.stringify(copy, null, 2))

