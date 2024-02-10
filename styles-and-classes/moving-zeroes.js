// const moveZeroes = nums => {
//     const length = nums.length
//     for(let i = 0; i < length; i++) {
//         if(nums[i] === 0) {
//             nums.push(nums[i])
//             nums.splice(i, 1)
//         }
//     }
//     return nums
// }







// const moveZeroes = nums => {
//     const length = nums.length
//     let index = 0
//     for(let i = 0; i < length; i++) {
//         if(nums[i] !== 0) {
//             nums[index] = nums[i]
//             if(index !== i) {
//                 nums[i] = 0
//             }
//             index++
//         }
//     }
//     return nums
// }

// const moveZeroes = function(nums) {
//     let left = 0;
//     for(let right = 0; right < nums.length; right++){
//        if(nums[right] !== 0){
//            [nums[left], nums[right]] = [nums[right], nums[left]] 
//            left++;
//        }
//     }
//    return nums
// };

const moveZeroes = (nums) => {
    let left = 0
    for(let right = 0; right < nums.length; right++) {
        if(nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
    return nums
}
  
// console.log(moveZeroes([0, 1, 0, 3, 12, 0, 100, 28, 0, 26]))
// console.log(moveZeroes([0, 0, 1]))
// console.log(moveZeroes([0]))



// let a = 1;
// let b = 2;
// let c = 11;
// let d = 4;

// [a, b, c, d] = [d, c, b, a]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)



const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ['a', 'b']]
        
// shallow copy
Array.prototype.swapLetters = function() {
    const result = [...this]
    let left = 0
    let right = result.length-1
    while(left < right) {
        [result[left], result[right]] = [result[right], result[left]]
        left++
        right--
    }
    return result
}

const shallowCopy = alphabet.swapLetters()

shallowCopy[0][0] = 'Y'
console.log(alphabet)
console.log(shallowCopy)


// deep copy
Array.prototype.swapLetters = function() {
    const result = this.map(element => {
        if (Array.isArray(element)) {
            return element.slice(); // Create a copy of nested arrays
        } else if (typeof element === 'object' && element !== null) {
            return Object.assign({}, element); // Create a copy of nested objects
        } else {
            return element; // For primitive types, return as is
        }
    });

    let left = 0;
    let right = result.length - 1;
    while (left < right) {
        [result[left], result[right]] = [result[right], result[left]];
        left++;
        right--;
    }
    return result;
}
