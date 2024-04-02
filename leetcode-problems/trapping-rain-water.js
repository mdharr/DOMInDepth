var trap = function(height) {
    if (height.length === 0) return 0;

    let result = 0;
    let left = 0;
    let right = height.length-1;
    let maxLeft = height[left];
    let maxRight = height[right];

    while (left < right) {
        if (maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            result += maxLeft - height[left];
        } else {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            result += maxRight - height[right];
        }
    }
    return result;
};

const height1 = [0,1,0,2,1,0,1,3,2,1,2,1]; // expects 6
const height2 = [4,2,0,3,2,5]; // expects 9
const height3 = [0,1,2,1,2]; // expects 1

console.log(trap(height1));
console.log(trap(height2));
console.log(trap(height3));

/*

height = [0,1,0,2,1,0,1,3,2,1,2,1]

let result = 0; // 0
let left = 0; // 0
let right = height.length-1; // 11
let maxLeft = height[left]; // 0
let maxRight = height[right]; // 1

while left index is less than right index

if the maxLeft is less than maxRight: // 0 < 1
move the left pointer one index to the right
left now equals 1
maxLeft now equals the larger number between maxLeft and height[left] // 1
result now equals the difference between new maxLeft and new value at left pointer
// both are 1 so difference is 0

left is still less than right index
if the maxLeft is less than maxRight: // 1 === 1
move the right index one to the left: // 10
compare maxRight and height[right] for the larger number 
and set it to maxRight // 2
result now equals the difference between new maxRight and new value at right pointer
// both are 2 so difference is 0






*/