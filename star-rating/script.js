// Question 1: Two Sum Problem
// Given an array of integers nums and an integer target, return indices of the two numbers 
// such that they add up to target. You may assume that each input would have exactly 
// one solution, and you may not use the same element twice. You can return the answer 
// in any order.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output explanation: nums[0] + nums[1] == 9, we return [0, 1].

// const nums = [3, 7, 11, 15];
// const target = 9;

// function twoSum(numArr, target) {
//     for (let i = 0; i < numArr.length; i++) {
//         for (let j = i + 1; j < numArr.length; j++) {
//             if (numArr[i] + numArr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     console.error("DoEs NoT cOmPuTe. DoEs NoT cOmPuTe. DOOOOOOOOES NoT cOmPuTe.");
//     return null;
// }

// console.log(twoSum(nums, target));

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(numArr, target) {
    const numMap = new Map();

    for (let i = 0; i < numArr.length; i++) {
        const num = target - numArr[i];
        if (numMap.has(num)) {
            return [numMap.get(num), i];
        }
        numMap.set(numArr[i], i);
    }
    return null;
}

console.log(twoSum(nums, target));



// Question 2: Reverse a String
// Write a function that reverses a string. The input string is given 
// as an array of characters s.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]




// Question 3: Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.


// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Output explanation: [4,-1,2,1] has the largest sum = 6.




// Question 4: Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 
// respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored 
// inside the array nums1. To accommodate this, nums1 has a length of m + n, where the 
// first m elements denote the elements that should be merged, and the last n elements 
// are set to 0 and should be ignored. nums2 has a length of n.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]



// Question 5: Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2,1,3]
// Output: true
