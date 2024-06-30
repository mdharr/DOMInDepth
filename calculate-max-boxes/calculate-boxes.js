function calculateMaxBoxesConditionally(length, width, height) {
    const l = length;
    const w = width;
    const h = height;

    const boxParam1 = 0.4;
    const boxParam2 = 0.8;
    const boxParam3 = 0.5;

    let maxBoxes = Math.floor(l / boxParam1) * Math.floor(w / boxParam2) * Math.floor(h / boxParam3);

    if (maxBoxes < Math.floor(l / boxParam1) * Math.floor(w / boxParam2) * Math.floor(h / boxParam3)) {
        maxBoxes = Math.floor(l / boxParam1) * Math.floor(w / boxParam2) * Math.floor(h / boxParam3)
    }

    if (maxBoxes < Math.floor(l / boxParam1) * Math.floor(w / boxParam3) * Math.floor(h / boxParam2)) {
        maxBoxes = Math.floor(l / boxParam1) * Math.floor(w / boxParam3) * Math.floor(h / boxParam2);
    }

    if (maxBoxes < Math.floor(l / boxParam2) * Math.floor(w / boxParam1) * Math.floor(h / boxParam3)) {
        maxBoxes = Math.floor(l / boxParam2) * Math.floor(w / boxParam1) * Math.floor(h / boxParam3)
    }

    if (maxBoxes < Math.floor(l / boxParam2) * Math.floor(w / boxParam3) * Math.floor(h / boxParam2)) {
        maxBoxes = Math.floor(l / boxParam2) * Math.floor(w / boxParam3) * Math.floor(h / boxParam2)
    }

    if (maxBoxes < Math.floor(l / boxParam3) * Math.floor(w / boxParam1) * Math.floor(h / boxParam2)) {
        maxBoxes = Math.floor(l / boxParam3) * Math.floor(w / boxParam1) * Math.floor(h / boxParam2)
    }

    if (maxBoxes < Math.floor(l / boxParam3) * Math.floor(w / boxParam2) * Math.floor(h / boxParam1)) {
        maxBoxes = Math.floor(l / boxParam3) * Math.floor(w / boxParam2) * Math.floor(h / boxParam1)
    }
    return maxBoxes;
}

console.log(calculateMaxBoxesConditionally(8.1, 8, 5));


function calculateMaxBoxesLooping(roomLength, roomWidth, roomHeight) {
    const boxDimensions = [0.4, 0.8, 0.5];

    function getMaxBoxesForOrientation(boxLength, boxWidth, boxHeight) {
        return Math.floor(roomLength / boxLength) *
               Math.floor(roomWidth / boxWidth) *
               Math.floor(roomHeight / boxHeight);
    }

    let maxBoxes = 0;

    // Test all combinations of box orientations
    for (let i = 0; i < boxDimensions.length; i++) {
        for (let j = 0; j < boxDimensions.length; j++) {
            for (let k = 0; k < boxDimensions.length; k++) {
                if (i !== j && i !== k && j !== k) { // Ensure we use each dimension exactly once
                    const currentMax = getMaxBoxesForOrientation(boxDimensions[i], boxDimensions[j], boxDimensions[k]);
                    if (currentMax > maxBoxes) {
                        maxBoxes = currentMax;
                    }
                }
            }
        }
    }

    return maxBoxes;
}

console.log(calculateMaxBoxesLooping(8.1, 8, 5));

function calculateMaxBoxesRecursively(roomLength, roomWidth, roomHeight) {
    const boxDimensions = [0.4, 0.8, 0.5];
    let maxBoxes = 0;

    function calculateBoxesForOrientation(dimensions, index, usedIndices, currentOrientation) {
        if (index === dimensions.length) {
            // All dimensions are used, calculate the boxes for this orientation
            const [length, width, height] = currentOrientation;
            const numBoxes = Math.floor(roomLength / length) * Math.floor(roomWidth / width) * Math.floor(roomHeight / height);
            maxBoxes = Math.max(maxBoxes, numBoxes);
            return;
        }

        for (let i = 0; i < dimensions.length; i++) {
            if (!usedIndices[i]) {
                // Mark this dimension as used
                usedIndices[i] = true;
                currentOrientation.push(dimensions[i]);
                
                // Recurse to the next level
                calculateBoxesForOrientation(dimensions, index + 1, usedIndices, currentOrientation);
                
                // Backtrack
                usedIndices[i] = false;
                currentOrientation.pop();
            }
        }
    }

    calculateBoxesForOrientation(boxDimensions, 0, Array(boxDimensions.length).fill(false), []);
    return maxBoxes;
}

console.log(calculateMaxBoxesRecursively(8.1, 8, 5));




























