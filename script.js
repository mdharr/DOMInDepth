// const gameArea = document.querySelector('.gamearea');
// const score = createEle(gameArea, 'div', 'Score :', 'score');

// function createEle(parent, eleType, html, eleClass) {

// }

const numArr = [1, 2, 3, 4];

// O(n^2) Time Complexity
const findProductOfArrayExceptSelf = (nums) => {
    let result = [];
    let current = 0;
    let left = 0;
    let right = nums.length - 1;

    if (nums.length === 0) return [];
    if (nums.length === 1) return arr[0];

    while (left <= right) {
        result[left] = 1;
        for (let i = 0; i < nums.length; i++) {
            if (left === i) continue;
            result[left] *= nums[i];
            current++;
        }
        current = 0;
        left++;
    }
    return result;
}

console.log(findProductOfArrayExceptSelf(numArr));

