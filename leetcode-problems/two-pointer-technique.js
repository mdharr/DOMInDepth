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
    result.length = left + 1; // truncate to remove duplicates
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




/*
4. Valid Palindrome

Problem: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Approach: Use two pointers to compare characters from the beginning and the end, moving towards the center, and ignore non-alphanumeric characters.
*/

const str = 'happydolucky';




/*
5. Merge Two Sorted Arrays

Problem: Given two sorted arrays, merge them into one sorted array.
Approach: Use two pointers, each starting at the beginning of the arrays. Compare the elements at the pointers, add the smaller one to the merged array, and move the pointer in the array from which the element was taken.
*/