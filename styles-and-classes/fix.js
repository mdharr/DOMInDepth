function flattenObj(obj) {
    let main = {};
    for (let i in obj) {
      if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
        const val = flattenObj(obj[i]); // Recursive call for nested objects
  
        for (let v in val) {
          Object.defineProperty(main, v, {
            value: val[v],
            enumerable: true, // Make properties enumerable
            writable: true, // Make properties writable
            configurable: true // Make properties configurable
          });
        }
      } else {
        Object.defineProperty(main, i, {
          value: obj[i],
          enumerable: true, // Make properties enumerable
          writable: true, // Make properties writable
          configurable: true // Make properties configurable
        });
      }
    }
    return main;
  }
  
  const lime = {
    id: 2,
    name: "sam",
    happy: true,
    friend: { id2: 2, name2: "bob", happy: true }
  };
  
  console.log(flattenObj(lime));  