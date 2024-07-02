async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await response.json();
    return result;
}

async function logData() {
    const data = await getData();
    return data;
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function objToArr(obj) {
    return Object.entries(obj);
}

let result = {};

logData().then(data => {
    // data response to json obj
    result = data;
    // console.log('Data:', result);

    // // obj to map
    // const mapFromObj = objToMap(result);
    // console.log('Object to Map:', mapFromObj);

    // // obj to array
    // const arrFromObj = objToArr(result);
    // console.log('Object to Array:', arrFromObj);

    // // shallow copy
    // const shallowCopyObj = {...result};
    // const shallowCopyMap = new Map(mapFromObj);
    // console.log('Object shallow copy:', shallowCopyObj);
    // console.log('Map shallow copy:', shallowCopyMap);

    // // deep copy
    // const deepCopyObj = structuredClone(result);
    // const deepCopyMap = structuredClone(mapFromObj);
    // console.log('Object deep copy:', deepCopyObj);
    // console.log('Map deep copy:', deepCopyMap);

    const original = {
        name: "Michael",
        age: 35,
        occupation: "Software Engineer",
        hobbies: ['gaming', 'reading', 'frogging'],
        nested: {
            level: 1,
            details: {
                level: 2,
                info: "More details"
            }
        }
    };
    
    // Perform a deep copy
    const copy = structuredClone(original);
    
    // Modify the copy
    copy.name = "John";
    copy.nested.details.info = "Changed details";
    
    // Original remains unchanged
    console.log(original);
    console.log(copy);
    
});


