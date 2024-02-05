document.body.style.backgroundColor = '#282828'
document.body.style.color = '#fff'
/*
    1. Create a new HTML file that has the following
       Elements in it:
       - <head> with a <title> with some text in it
       - <body> with:
            - <h1> tag with some text

    2. Open up your file in your Browser and open the
       dev tools alongside it as well.

    3. Using the dev tools console, add the following
       attributes to the <h1> tag:
       - An "id" with a value of "heading"
       - A "class" with a value of "blue"
    
    4. Verify the changes in the DOM/Elements tab
*/

// passing in the element and the object that contains
// the attributes you want to set
function setAttributes(element, attributes) {
    // here we get an array of all the keys from
    // attributes object
    Object.keys(attributes).forEach(attr => {
        // for each key we set a new attribute
        // on the element using the setAttribute
        // method, with the first argument being
        // the key and the second argument being
        // the value of that key in the attributes
        // object
        element.setAttribute(attr, attributes[attr])
    })
}
// these are the attributes we want to set
// they are stored in an object to make assigning
// multiple attributes at once much more efficient
const attributes = {
    id: "heading",
    class: "blue"
}
// we get our element that we want to assign the
// attributes to
const h1 = document.querySelector('h1')
// now we call our previously written function
// and pass the element along with the attributes
// to be assigned
setAttributes(h1, attributes)