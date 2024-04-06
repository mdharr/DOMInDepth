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
    console.log(reversed);
    return parseInt(reversed) * Math.sign(n); // Math.sign() prepends the number with original sign
}

// console.log(reverseInteger(numsOriginal));


/*

Remove Nth Node From End of List

Problem: Given the head of a linked list, remove the 
nth node from the end of the list and return its head.
Approach: Use two pointers, initially separated by 
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


Level Order Traversal of a Binary Tree

Problem: Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
Example: Given binary tree [3,9,20,null,null,15,7], return its level order traversal as [[3],[9,20],[15,7]].


*/

/*

Graph BFS Traversal

Problem: Given an undirected graph and a starting node, perform a breadth-first search (BFS) traversal starting from the given node.
Example: Given a graph represented as an adjacency list {0: [1, 2], 1: [2], 2: [0, 3], 3: [3]} and starting node 2, the BFS traversal order would be [2, 0, 3, 1].




*/

/*

Preorder Traversal of a Binary Search Tree

Problem: Given the root of a binary search tree, return the preorder traversal of its nodes' values.
Example: Given binary search tree [1,null,2,3], return its preorder traversal as [1,2,3].




*/

/*

Find All Numbers Disappeared in an Array

Problem: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements of [1, n] inclusive that do not appear in the array.
Approach: Use an array traversal to mark visited elements in some way (for example, by negating the numbers at the indices corresponding to each value you encounter) and then identify the indices that were never marked.
Example: Given [4,3,2,7,8,2,3,1], return [5,6].




*/

/*

Postorder Traversal of an N-ary Tree

Problem: Given the root of an N-ary tree, return the postorder traversal of its nodes' values.
Approach: An N-ary tree is a tree in which any node can have between 0 and N children. The postorder traversal involves visiting the children before the node itself.
Example: Given an N-ary tree with root node 1 and its children nodes 2, 3, and 4, where node 3 has children 5 and 6, return its postorder traversal as [2,5,6,3,4,1].
These exercises are designed to improve your understanding of different traversal techniques and how they can be applied to various data structures, from simple arrays to more complex trees and graphs.




*/

/*

Iterating Over Properties of an Object

Problem: Given a JavaScript object, write a function that prints out all its properties and their values using for...in loop.
Example: Given {name: 'John', age: 30, city: 'New York'}, the function should print name: John, age: 30, city: New York.



*/

/*

Deep Iteration Over a Nested Object

Problem: Given a deeply nested object, write a function that iterates over all leaf nodes and prints their paths and values. A leaf node is a property that does not contain an object.
Example: Given {a: 1, b: {c: 2, d: {e: 3}}}, the function should print a: 1, b.c: 2, b.d.e: 3.




*/

/*


Iterating Over Characters in a String

Problem: Write a function that iterates over each character in a string and prints out each character and its index.
Example: Given the string "hello", the function should print "0: h", "1: e", "2: l", "3: l", "4: o".



*/

/*


Iterating Over Elements in a Set

Problem: Given a JavaScript Set, write a function that iterates over the elements of the Set and prints them.
Example: Given a set with elements [1, 2, 3, 4, 5], the function should print 1, 2, 3, 4, 5.



*/

/*


Iterating Over Key-Value Pairs in a Map

Problem: Given a JavaScript Map, write a function that iterates over the Map and prints out key-value pairs.
Example: Given a map with key-value pairs [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]], the function should print "firstName: John", "lastName: Doe", "age: 30".



*/

// BASIC EXERCISES FOR PRACTICING BUILD IN METHODS


/*

Array Methods
forEach - Iterate over the array [1, 2, 3, 4, 5] and print each number squared.
map - Given the array [1, 2, 3, 4, 5], create a new array with each element multiplied by 3.
filter - From the array [1, 2, 3, 4, 5], create a new array with only odd numbers.
reduce - Sum all numbers in the array [1, 2, 3, 4, 5].
find - Find the first element in the array [1, 2, 3, 4, 5] that is greater than 3.

Object Methods
Object.keys - Print all keys of the object { a: 1, b: 2, c: 3 }.
Object.values - Print all values of the object { a: 1, b: 2, c: 3 }.
Object.entries - Convert the object { a: 1, b: 2, c: 3 } into an array of key-value pairs.
Object.assign - Create a clone of the object { a: 1, b: 2, c: 3 } and add a new property { d: 4 } to it.

Set Methods
add - Add numbers 1 through 5 to a new Set and print the Set.
has - Check if the Set from the previous exercise contains the number 3.
delete - Remove the number 3 from the Set created above and print the result.
clear - Clear all items from the Set and print its size afterwards.

Map Methods
set - Create a new Map and add three key-value pairs where keys are "one", "two", "three" and values are 1, 2, 3.
get - Retrieve the value associated with key "two" from the Map.
has - Check if the Map has a key "three".
delete - Remove the key-value pair where the key is "one" from the Map.
clear - Clear all entries from the Map.

Function Methods
While functions in JavaScript don't have as diverse a built-in method library as the other types mentioned, there are important concepts and techniques associated with functions:

call - Given a function greet that accepts a name, use call to invoke greet with a specific context and argument.
apply - Similar to the above, but pass arguments as an array.
bind - Create a bound function from greet that always uses a specific name.



*/


/* 

Array
Exercise: Implement a function that takes an array of numbers and returns an array containing only the prime numbers found in the original array, sorted in ascending order.
Hint: You may need to use filter for selection and sort, and implement a helper function to check if a number is prime.

Object
Exercise: Write a function that takes an object with keys as names and values as ages. The function should return a new object that includes only the people who are 18 years old or older, and the names should be capitalized.
Hint: Consider using Object.keys, Object.values, or Object.entries with reduce or filter and map.

Set
Exercise: Given an array of integers, create a function that returns an array of duplicates found in the array. Use a Set to track seen numbers and duplicates.
Hint: Iterate over the array, using one Set to keep track of elements you've seen once and another to store duplicates.

Map
Exercise: Implement a function that takes an array of strings. It should return a Map where each key is a string and its value is the number of times that string appears in the array.
Hint: Use forEach to iterate over the array and populate the Map, checking if a key already exists and incrementing its value.

Function
Exercise: Write a function memoize that takes another function as its argument and returns a memoized version of the function. The memoized function should cache the results of function calls with given arguments and return the cached result for subsequent calls with the same arguments.
Hint: Use a JavaScript object (or a Map) to store results based on a unique key for each set of arguments. Consider JSON-stringifying arguments for a simple key.

*/

// INTERMEDIATE METHOD EXERCISES

/*

Array Methods
forEach: Given an array of objects where each object has properties name and age, use forEach to print a greeting for each person that says, "Hello, [name]! You are [age] years old."

map: Transform an array of numerical values into an array of objects where each object has the original value and its square (e.g., [2, 3] becomes [{value: 2, square: 4}, {value: 3, square: 9}]).

filter: Given an array of strings, use filter to create a new array that contains only strings that are palindromes.

reduce: Use reduce to find the product of all numbers in an array of numbers.

find: From an array of objects where each object represents a book with properties title and author, use find to get the first book whose title contains a specific keyword.

Object Methods
Object.keys: Given an object representing a shopping cart where keys are item names and values are quantities, use Object.keys to print a list of items that need to be restocked (quantity less than 3).

Object.values: Use Object.values to calculate the total number of items in the shopping cart object from the previous example.

Object.entries: Given an object where keys are product IDs and values are product names, use Object.entries to create an array of strings that represent each product in the form "Product [ID]: [Name]".

Object.assign: Use Object.assign to merge two objects: one representing a person's personal details and the other representing their professional details.

Set Methods
add: Create a Set from an array of numbers, then add a new number to it. Use the Set to print unique numbers only.

has: Given a Set of colors (as strings), check if the Set has the color "blue". Print a message based on the result.

delete: Use delete to remove a specific element from a Set of numbers, then print the modified Set.

clear: Demonstrate creating a Set, adding several elements to it, using clear to empty the Set, and then verifying its size is 0.

Map Methods
set: Create a Map that represents word frequencies in an array of words. Iterate through the array and use set to populate the Map.

get: Given a Map from the previous example, write a function that takes a word as input and uses get to return its frequency.

has: Check if the Map from the word frequency example contains a specific word. Print a message indicating whether the word is present.

delete: Remove a specific word from the word frequency Map, then print the Map to show it's been removed.

clear: Demonstrate using clear to empty the word frequency Map, and verify its size is 0.

Function Method
bind: Given an object representing a person with properties firstName and lastName, and a function that returns a person’s full name, use bind to create a new function that always returns the full name of the person object provided.



*/



// ADVANCED METHODS EXERCISES
/*


Array Methods
forEach: Implement a custom version of forEach called myForEach that mimics the behavior of the Array's forEach method. Your function should iterate over an array and execute a callback on each element.

map: Create a myMap function that replicates the behavior of the Array's map method. It should apply a given function to every element in the array and return a new array with the results.

filter: Write a myFilter function that imitates the Array's filter method. It should process an array and return a new array containing only the elements that satisfy the condition specified in the callback function.

reduce: Develop a myReduce function that behaves like the Array's reduce method. It should reduce the array to a single value based on the callback function's logic and an optional initial value.

find: Implement a myFind function that replicates the Array's find method, returning the first element in the array that satisfies the provided testing function.

Object Methods
Object.keys: Write a function that takes an object and returns a deep array of all keys, including nested objects.

Object.values: Create a function to deeply extract all values from an object, including nested objects, and return them in a flat array.

Object.entries: Develop a function that converts an object into a deep array of key-value pairs, including for nested objects.

Object.assign: Implement a deepAssign function that performs a deep copy of objects (including all nested objects) instead of the shallow copy done by Object.assign.

Set Methods
add: Given an array of strings, create a Set and add each string to the Set. Then, for each string that was already in the Set (duplicate), print a warning that the string is a duplicate and should not be added.

has: Create a Set from a large dataset and implement a search feature that uses the has method to check whether certain elements exist. Measure and print the time it takes to perform these searches.

delete: Implement a function that maintains a Set of active users. The function should periodically delete users from the Set who are no longer active, based on some criteria.

clear: Simulate a real-time scenario where a Set is used to keep track of unique events occurring. Write a function to clear the Set once it reaches a certain size, and log when the clearing happens.

Map Methods
set: Create a caching mechanism for a function where results of expensive computations are stored in a Map. Use set to save the results and get to retrieve them when the same inputs are used.

get: Implement a nested Map structure where a getDeep function can retrieve values using an array of keys representing the path to the value.

has: Write a function that checks a Map for the presence of multiple keys (provided in an array) and returns true only if all keys exist.

delete: Given a Map representing a directory structure where keys are paths and values are file contents, implement a deletePath function that removes a path and all its subpaths.

clear: Create a Map to manage subscriptions. Implement a function to clear all subscriptions that have expired, using the clear method.

Function Method
bind: Write a polyfill for the bind function that replicates all its functionality, including setting the this context and prefilling arguments.



*/