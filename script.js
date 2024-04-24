// const gameArea = document.querySelector('.gamearea');
// const score = createEle(gameArea, 'div', 'Score :', 'score');

// function createEle(parent, eleType, html, eleClass) {

// }

const numArr = [1, 2, 3, 4];

// O(n^2) Time Complexity
// const findProductOfArrayExceptSelf = (nums) => {
//     let result = [];
//     let current = 0;
//     let left = 0;
//     let right = nums.length - 1;

//     if (nums.length === 0) return [];
//     if (nums.length === 1) return arr[0];

//     while (left <= right) {
//         result[left] = 1;
//         for (let i = 0; i < nums.length; i++) {
//             if (left === i) continue;
//             result[left] *= nums[i];
//             current++;
//         }
//         current = 0;
//         left++;
//     }
//     return result;
// }

// const findProductOfArrayExceptSelf = (nums) => {
//     const length = nums.length;
//     let result = new Array(length);
//     let leftProducts = new Array(length);
//     let rightProducts = new Array(length);

//     if (nums.length === 0) return [];
//     if (nums.length === 1) return nums[0];

//     leftProducts[0] = 1;
//     for (let i = 1; i < nums.length; i++) {
//         leftProducts[i] = nums[i-1] * leftProducts[i-1];
//     }

//     rightProducts[length - 1] = 1;
//     for (let i = length - 2; i >= 0; i--) {
//         rightProducts[i] = nums[i+1] * rightProducts[i+1];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         result[i] = leftProducts[i] * rightProducts[i];
//     }

//     return result;
// }

const productExceptSelf = (nums) => {
    const result = [];
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        result[i] *= nums[i];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= 1;
    }
}

console.log(productExceptSelf(numArr));

