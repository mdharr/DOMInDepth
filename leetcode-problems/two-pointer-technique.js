/*
1. Reverse an Array or String

Problem: Given an array or string, reverse it using the two-pointer technique.
Approach: Use two pointers, one at the start and one at the end, and swap the elements they point to, then move them towards the center until they meet.
*/

function reverse(input) {
    let result = [...input];
    let left = 0;
    let right = result.length-1;

    while (left < right) {
        [result[left], result[right]] = [result[right], result[left]];
        left++;
        right--;
    }
    if (Array.isArray(input)) {
        return result;
    } else {
        return result.join('');
    }
}

// console.log(reverse('pumpkin'));
// console.log(reverse(['p','u','m','p','k','i','n',]));


/*
2. Remove Duplicates from Sorted Array

Problem: Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.
Approach: Use two pointers, one to iterate through the array and the other to only move when a non-duplicate element is found, to overwrite duplicate elements.
*/

function removeDuplicates(input) {
    const result = [...input].sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b; // Numerical order for numbers
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b); // Alphabetical order for strings
        } else if (typeof a === 'number') {
            return -1; // Numbers before strings
        } else {
            return 1; // Strings after numbers
        }
    });

    let left = 0;
    for (let right = 1; right < result.length; right++) {
        if (result[left] !== result[right]) {
            left++;
            result[left] = result[right];
        }
    }
    result.length = left + 1; // truncate to remove duplicates (this is important)
    return result;
}

const mixedArray = ['a', 1, 'c', 'b', 7, 'z', 5, 'c', 'c', 7, 'e', 'a'];

// const result = removeDuplicates(mixedArray);
// console.log(result);

/*
3. Two Sum II (Input array is sorted)

Problem: Given a 1-indexed array of integers numbers that are already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers in an array.
Approach: Use two pointers starting at the beginning and end of the array, respectively. Move them inward based on whether the sum of their elements is less than or greater than the target.
*/

const intArr = [1,2,3,4,5,6,7,8,9];

function twoSum(arr, target) {
    let result = [];
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        if (arr[left] + arr[right] === target) {
            return [left, right];
        }
        
        if (arr[left] + arr[right] < target) {
            left++;
        } else if (arr[left] + arr[right] > target) {
            right--;
        }
        
    }
}

// console.log(twoSum(intArr, 12));

/*
4. Valid Palindrome

Problem: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Approach: Use two pointers to compare characters from the beginning and the end, moving towards the center, and ignore non-alphanumeric characters.
*/

const str1 = 'happydolucky';
const str2 = '123456654321';

function isPalindrome(str) {
    let result = [...str];
    let left = 0;
    let right = result.length-1;

    if (result.length < 2) return true;

    while (left < right) {
        if (result[left] !== result[right]) return false;
        if (left - right < 1) return true;
        left++;
        right--;
    }
    return true;
}

// console.log(isPalindrome(str2));


/*
5. Merge Two Sorted Arrays

Problem: Given two sorted arrays, merge them into one sorted array.
Approach: Use two pointers, each starting at the beginning of the arrays. Compare the elements at the pointers, add the smaller one to the merged array, and move the pointer in the array from which the element was taken.
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 8, 10];

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            result.push(arr1[pointer1++]);
        } else if (arr1[pointer1] > arr2[pointer2]) {
            result.push(arr2[pointer2++]);
        } else {
            result.push(arr1[pointer1++], arr2[pointer2++]);
        }
    }
    if (pointer1 === arr1.length) {
        // result = result.concat(arr2.slice(pointer2));
        result.push(...arr2.slice(pointer2));
    } else if (pointer2 === arr2.length) {
        // result = result.concat(arr1.slice(pointer1));
        result.push(...arr1.slice(pointer1));
    }

    return result;
}

// console.log(mergeSortedArrays(arr1, arr2));



/* 

6. Squaring a Sorted Array

Problem: Given an array of integers that are sorted in non-decreasing order, return an array of the 
squares of each number, also sorted in non-decreasing order.
Approach: Use two pointers, one at the start and one at the end, to square the numbers and place 
them in the right position in the result array based on their magnitude.

*/

const integersArray = [-10, -7, -3, -1, 0, 0, 0, 2, 4, 5, 8, 11, 15, 20];

function squareSortedArray(arr) {
    let result = new Array(arr.length);
    let left = 0;
    let right = arr.length-1;
    let position = arr.length-1;

    while (left <= right) {
        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            result[position--] = arr[left++]**2;
        } else {
            result[position--] = arr[right--]**2;
        }
    }

    return result;
}

// console.log(squareSortedArray(integersArray));

/* 

7. Dutch National Flag Problem

Problem: Given an array of integers consisting only of 0, 1, and 2, sort the array without 
using any sorting algorithm.
Approach: Use three pointers to segregate the elements of the array. The first pointer tracks 
the end of the zeros, the second pointer tracks the current element, and the third pointer tracks 
the start of the twos.

*/

const nums = [2, 0, 1, 2, 1, 0, 0, 2, 1, 1, 0, 2, 0];

function manualSort(arr) {

    let low = 0;
    let mid = 0;
    let high = arr.length-1;

    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    while (mid <= high) {
        if (arr[mid] === 0) {
            swap(mid++, low++);
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            swap(mid, high--);
        }
    }

    return arr;
}

// manualSort(nums);
// console.log(manualSort(nums));



/* 

8. Container With Most Water

Problem: Given an array of integers where each element represents the height of a line
on the x-axis, find two lines that together with the x-axis form a container, such that 
the container contains the most water.
Approach: Start with two pointers at either end of the array and move them towards each 
other, always moving the pointer pointing to the shorter line to try and find a pair of lines 
that will hold more water.

*/

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7, 3, 4, 3];

function findLargestContainer(arr) {
    let maxVolume = 0;
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        let height = Math.min(arr[left], arr[right]);
        let width = right - left;
        let currentVolume = height * width;
        maxVolume = Math.max(maxVolume, currentVolume);

        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVolume;
}

// console.log(findLargestContainer(heights));


/* 

9. Subarray Product Less Than K

Problem: Given an array of integers and a target product k, find the number of 
contiguous subarrays where the product of all the elements in the subarray is less than k.
Approach: Use two pointers to create a sliding window. Expand the window to include more elements 
until the product of all elements in the window is at least k, then shrink the window from the left 
to reduce the product and count the number of valid subarrays.

*/

const numsArr = [2, 5, 3, 10, 4, 1, 6];
const k = 30;

function subarrayProductLessThan(arr, target) {
    let result = 0;
    let left = 0;
    let product = 1;

    for (let right = 0; right < arr.length; right++) {
        product *= arr[right];

        while (product >= target && left <= right) {
            product /= arr[left++];
        }

        result += right - left + 1;
    }
    return result;
}

// console.log(subarrayProductLessThan(numsArr, k));

/* 

10. Longest Substring Without Repeating Characters

Problem: Given a string, find the length of the longest substring without repeating characters.
Approach: Use two pointers to maintain a sliding window that contains the longest substring 
without duplicates. Move the right pointer to expand the window and the left pointer to shrink 
it when a duplicate character is found.

*/

const sampleString = "pwwkewabcdefghijk";

function findLongestSubstringNonRepeating(str) {
    let longest = 0;
    let left = 0;
    let charMap = new Map();

    for (let right = 0; right < str.length; right++) {
        if (charMap.has(str[right]) && charMap.get(str[right]) >= left) {
            left = charMap.get(str[right]) + 1;
        }
        charMap.set(str[right], right);
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}

console.log(findLongestSubstringNonRepeating(sampleString));


/* 

11. Reverse Integer And Include Sign

Problem: Given an integer, reverse it and include the positive or negative sign
of the original input.

*/

const numsOriginal = -12345;

function reverseInteger(n) {
    let reversed = String(n).split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

// console.log(reverseInteger(numsOriginal));


/*

Remove Nth Node From End of List

Problem: Given the head of a linked list, remove the 
�
nth node from the end of the list and return its head.
Approach: Use two pointers, initially separated by 
�
n nodes apart, move them simultaneously until the fast pointer reaches the end, then remove the next node of the slow pointer.


*/


/*



Three Sum

Problem: Given an array of integers, find all unique triplets in the array which gives the sum of zero.
Approach: Sort the array and use a combination of two-pointer technique within a loop. For each element, use the other two pointers to find if there is a pair whose sum equals the negation of that element.





*/


/*



Maximum Product Subarray

Problem: Given an integer array, find the contiguous subarray within it that has the largest product.
Approach: While not strictly a two-pointer problem, you can use a modified two-pointer approach to keep track of the maximum and minimum products up to the current position, due to the impact of negative numbers.





*/


/*



Linked List Cycle II

Problem: Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
Approach: Use two pointers, one moving twice as fast as the other. If they meet, move one pointer to the beginning of the list and then move both at the same speed to find the cycle's start.






*/


/*



Valid Palindrome II

Problem: Given a string, determine if it can become a palindrome through the removal of at most one character.
Approach: Use two pointers to compare characters from the start and end of the string. If a mismatch is found, check the remaining substrings by skipping one character at either pointer's position to see if either can form a palindrome.




*/


/*


Backspace String Compare

Problem: Given two strings containing lowercase letters and '#' characters, where '#' represents a backspace, check if the two strings are equal after processing the backspaces.
Approach: Use two pointers for each string to iterate from the end to the beginning, skipping over characters that are effectively 'backspaced'.





*/


/*



Minimum Size Subarray Sum

Problem: Given an array of positive integers and a target sum, find the minimal length of a contiguous subarray of which the sum is greater than or equal to the target sum. If there isn't one, return 0.
Approach: Use two pointers to create a sliding window, expanding and shrinking the window to find the smallest subarray that meets or exceeds the target sum.




*/


/*



Pair with Given Sum in a Sorted Array

Problem: Given a sorted array and a target sum, find if there exists a pair of elements in the array whose sum is equal to the target sum.
Approach: Use two pointers, one starting at the beginning and the other at the end of the array. Move the pointers inward based on the sum of the elements they point to, compared to the target sum.




*/

// DESTRUCTURING

/*



Swap Variables

Problem: Given two variables, swap their values using destructuring.
Example:
javascript
Copy code
let a = 3;
let b = 6;
Swap the values so that a becomes 6 and b becomes 3.




*/


/*



Function Return Multiple Values

Problem: Write a function that returns multiple values as an array, and use destructuring to store the returned values in separate variables.
Example: Create a function that returns the current date, month, and year, and then destruct the result into separate variables.




*/


/*


Nested Object Destructuring

Problem: Given a nested object, use object destructuring to extract deeply nested properties.
Example:
javascript
Copy code
const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        degree: 'Masters',
        school: {
            name: 'Springfield University',
            year: 2003
        }
    }
};
Extract the name of the school and the year into separate variables.





*/


/*



Array Destructuring with Rest

Problem: Given an array, use array destructuring to assign the first few elements to variables and the remaining elements to an array.
Example:
javascript
Copy code
const rgb = [255, 200, 0];
Destructure the array into variables red, green, and an array others holding any remaining elements.




*/

/*


Parameter Destructuring in Functions

Problem: Write a function that takes an object as a parameter and uses destructuring in the function signature to directly extract specific properties.
Example:
javascript
Copy code
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28
};
Write a function that takes this person object and extracts firstName and age directly in the parameter list.


*/

/*

Sum of All Nodes in a Binary Tree

Problem: Given a binary tree, write a function that returns the sum of all its node values.
Approach: Use recursion to destructure the tree into its left and right subtrees, summing up the node values at each step.

class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const tree = new TreeNode(1, 
                 new TreeNode(2, 
                     new TreeNode(4), 
                     new TreeNode(5)), 
                 new TreeNode(3, 
                     new TreeNode(6), 
                     new TreeNode(7))
             );



*/






/*

Serialize and Deserialize a Binary Tree

Problem: Serialization is the process of converting a binary tree into a string representation that can be stored or transmitted and then reconstructed later. Write functions to serialize and deserialize a binary tree.
Approach: For serialization, use recursion to destructure the tree into nodes and convert it into a string format. For deserialization, reverse the process to reconstruct the tree from the string representation.

// Using the TreeNode class from example 1
const serializableTree = new TreeNode(1, 
                             new TreeNode(2, 
                                 new TreeNode(3), 
                                 new TreeNode(4)), 
                             new TreeNode(5, 
                                 new TreeNode(6), 
                                 new TreeNode(7))
                         );



*/

/*

Convert a Binary Tree to a Linked List

Problem: Given a binary tree, flatten it to a linked list in-place where the left child of all nodes is null, and the right child contains the next node in the preorder traversal.
Approach: Use recursion to destructure the tree and rearrange the nodes to form a linked list, ensuring the left child is always null and the right child points to the next node in the preorder sequence.


4. **Convert a Binary Tree to a Linked List**
```javascript
// Using the TreeNode class from example 1
const treeToConvert = new TreeNode(1, 
                          new TreeNode(2, 
                              new TreeNode(3), 
                              new TreeNode(4)), 
                          new TreeNode(5, 
                              null, 
                              new TreeNode(6))
                      );



*/

/*

Find the Maximum Depth of a Binary Tree

Problem: Given a binary tree, find its maximum depth (the number of nodes along the longest path from the root node down to the farthest leaf node).
Approach: Use recursion to destructure the tree into its left and right subtrees and compute the depth, incrementing at each level.

// Using the TreeNode class from example 1
const deepTree = new TreeNode(1, 
                    new TreeNode(2, 
                        new TreeNode(3, 
                            new TreeNode(4))), 
                    new TreeNode(2, 
                        null, 
                        new TreeNode(3, 
                            null, 
                            new TreeNode(4)))
                );



*/

/*

Deep Clone a Nested Object

Problem: Given a deeply nested object, write a function to create a deep clone of it.
Approach: Recursively destructure the object into its properties and clone them to create a new object that is a deep copy of the original.


const nestedObject = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        additional: {
            info: "More details"
        }
    }
};


*/

/*

Fibonacci Sequence

Problem: Write a function to compute the 
�
nth Fibonacci number. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
Example: fibonacci(5) should return 5 because the sequence is 0, 1, 1, 2, 3, 5.




*/

/*


Tower of Hanoi

Problem: Solve the Tower of Hanoi problem. You are given three rods and a number of disks of different sizes that can slide onto any rod. The puzzle starts with the disks in ascending order of size on one rod, the smallest at the top. The objective is to move the entire stack to another rod, obeying the following rules:
Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
No disk may be placed on top of a smaller disk.
Example: Solve the puzzle with 3 disks.


*/

/*

All Paths from Source to Target in a Directed Acyclic Graph (DAG)

Problem: Given a directed acyclic graph (DAG) represented as an adjacency list, write a function that returns all possible paths from node 0 to node 
�
−
1
N−1 where 
�
N is the number of nodes in the graph.
Example: If the adjacency list is [[1,2], [3], [3], []], the function should return [[0,1,3], [0,2,3]].




*/

/*

Binary Search

Problem: Implement a recursive binary search function. Given a sorted array of integers and a target value, return the index of the target if it exists in the array, or -1 if it doesn't.
Example: Given [1, 2, 3, 4, 5, 6] and target 4, the function should return 3.




*/

/*

Reverse a Linked List

Problem: Given the head of a singly linked list, reverse the list and return the new head using recursion.
Example: If the linked list is 1 -> 2 -> 3 -> 4 -> 5, then after reversing, it should be 5 -> 4 -> 3 -> 2 -> 1.




*/

/*





*/