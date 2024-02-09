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

const moveZeroes = function(nums) {
    let left = 0;
    for(let right = 0; right < nums.length; right++){
       if(nums[right] !== 0){
           [nums[left], nums[right]] = [nums[right], nums[left]] 
           left++;
       }
    }
   return nums
};
  
console.log(moveZeroes([0, 1, 0, 3, 12, 0, 100, 28, 0, 26]))
// console.log(moveZeroes([0, 0, 1]))
// console.log(moveZeroes([0]))