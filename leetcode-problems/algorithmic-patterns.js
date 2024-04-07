const removeDuplicates = (arr) => {
    let index = 1;
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] !== arr[i+1]) {
            arr[index] = arr[i+1];
            index++;
        }
    }
    arr.length = index;
    console.log(arr);
    return index;
}

const nums = [0,0,1,1,1,2,2,3,3,4,4];

removeDuplicates(nums);


const removeElement = (arr, target) => {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== target) {
            arr[index] = arr[i];
            index++;
        }
    }
    arr.length = index;
    console.log(arr);
    return index;
}

// const nums = [0,1,2,2,3,0,4,2];

// removeElement(nums, 2);