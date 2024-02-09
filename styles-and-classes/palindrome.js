const isPalindrome1 = s => {
    let result = s.toLowerCase().replace(/[^a-z]/g, '')
    if(result.length <= 1) {
        return true
    }
    const firstChar = result[0]
    const lastChar = result[result.length-1]
    const remaining = result.slice(1, result.length-1)
    const isEqual = firstChar === lastChar
    return isEqual ? isPalindrome1(remaining) : false
}

const isPalindrome2 = s => {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let start = 0
    let end = str.length - 1
    
    while(start < end) {
        if (str[start] !== str[end]) return false
        start++
        end--
    }
    return true
}

const isPalindrome3 = s => {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return str === [...str].reverse().join('')
}

const isPalindrome9 = s => {
    const sanitized = s.toLowerCase().replace(/[^a-z]/g, '')
    let start = 0, end = sanitized.length-1
    while(start < end) {
        if(sanitized[start] !== sanitized[end]) return false
        start++
        end--
    }
    return true
}









// console.log(isPalindrome1('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome1('race a car')); // false
// console.log(isPalindrome1('ab_a')); // true
// console.log(isPalindrome1(' ')); // true

// console.log(isPalindrome2('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome2('race a car')); // false
// console.log(isPalindrome2('ab_a')); // true
// console.log(isPalindrome2(' ')); // true

// console.log(isPalindrome3('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome3('race a car')); // false
// console.log(isPalindrome3('ab_a')); // true
// console.log(isPalindrome3(' ')); // true






// function isPalindrome(input) {
//     const sanitized = input.toLowerCase().replace(/[^a-z]/g, '')
//     if(sanitized === Array.from(sanitized).reverse().join('')) {
//         return true
//     }
//     return false
// }

// function isPalindrome(input) {
//     const sanitized = input.toLowerCase().replace(/[^a-z]/g, '')
//     let first = 0, last = sanitized.length-1
//     while(first < last) {
//         if(sanitized[first] !== sanitized[last]) return false
//         first++
//         last--
//     }
//     return true
// }


// function isPalindrome(input) {
//     const sanitized = input.toLowerCase().replace(/[^a-z]/g, '')
//     // base case
//     if (sanitized.length < 2) {
//         return true
//     }
//     if (sanitized[0] !== sanitized[sanitized.length-1]) {
//         return false
//     }
//     return isPalindrome(sanitized.slice(1, sanitized.length-1))
// }

function isPalindrome(s) {
    return s.toLowerCase().replace(/[^a-z]/g, '') === s.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('')
}

console.log(isPalindrome('MoM'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('dad'))
console.log(isPalindrome('poop'))
console.log(isPalindrome('try')) // false
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car')) // false
console.log(isPalindrome('ab_a'))
console.log(isPalindrome(' '))