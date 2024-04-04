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

console.log(subarrayProductLessThan(numsArr, k));

/* 

10. Longest Substring Without Repeating Characters

Problem: Given a string, find the length of the longest substring without repeating characters.
Approach: Use two pointers to maintain a sliding window that contains the longest substring 
without duplicates. Move the right pointer to expand the window and the left pointer to shrink 
it when a duplicate character is found.

*/






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