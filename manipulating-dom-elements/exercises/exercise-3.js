document.body.style.backgroundColor = "#282828";
document.body.style.color = "#fff";
/*
    1. Create an HTML file with a <head>
       tag containing a <title> with some text
       inside, as well as an empty <body> tag.

    2. Inside the <body> tag add a <script> tag
       and add code inside it to do the following:
    
    3. Create an array that contains 3 Elements:
       - A <p> tag with some text inside it
       - A <div> with a <label> and <input> inside
       - A <nav> containing a <ul> with 3 
         <li> elements inside, each with text

    4. Use setInterval with a time of 1 second (1000ms)
       to randomly choose an element from the array above
       to show inside the body. Make sure this is the ONLY
       thing in the body (remove the previous element(s))

    5. Open up the page in your Browser and open up the
       dev tools to confirm visually and in the DOM that
       the elements are changings as expected

    ** HINT: There are several ways to empty out all the
             child nodes/elements
*/

// const elements = []
// const p = document.createElement('p')
// const div = document.createElement('div')
// const label = document.createElement('label')
// const input = document.createElement('input')
// const nav = document.createElement('nav')
// const ul = document.createElement('ul')
// const li1 = document.createElement('li')
// const li2 = document.createElement('li')
// const li3 = document.createElement('li')

// p.textContent = 'Paragraph Text'
// label.textContent = 'Label Text'
// input.type = 'text'
// input.value = 'Input Text'
// li1.textContent = 'List Item 1'
// li2.textContent = 'List Item 2'
// li3.textContent = 'List Item 3'

// div.append(label)
// div.append(input)
// ul.append(li1)
// ul.append(li2)
// ul.append(li3)
// nav.append(ul)

// elements.push(p)
// elements.push(div)
// elements.push(ul)
// console.log(elements)

// setInterval(() => {
//    const randomIndex = Math.floor(Math.random() * elements.length)
//    console.log(randomIndex)
//    while(document.body.firstChild) {
//       document.body.removeChild(document.body.firstChild)
//    }
//    document.body.append(elements[randomIndex])
// }, 1000)


(function() {
   function createElement(tag, props, ...children) {
     const element = document.createElement(tag)
     Object.entries(props).forEach(([key, value]) => {
       if (key === 'textContent') {
         element.textContent = value
       } else {
         element.setAttribute(key, value)
       }
     })
     children.forEach(child => {
       if (typeof child === 'string') {
         element.appendChild(document.createTextNode(child))
       } else {
         element.appendChild(child)
       }
     })
     return element
   }
 
   const p = createElement('p', { textContent: 'Paragraph Text' })
   const label = createElement('label', { textContent: 'Label Text' })
   const input = createElement('input', { type: 'text', value: 'Input Text' })
   const div = createElement('div', {}, label, input)
   const li1 = createElement('li', { textContent: 'List Item 1' })
   const li2 = createElement('li', { textContent: 'List Item 2' })
   const li3 = createElement('li', { textContent: 'List Item 3' })
   const ul = createElement('ul', {}, li1, li2, li3)
   const nav = createElement('nav', {}, ul)
 
   const elements = [p, div, nav] // Assuming nav includes ul
 
   setInterval(() => {
      const randomIndex = Math.floor(Math.random() * elements.length)
    
      // Only attempt to set the style on element nodes
      Array.from(document.body.childNodes).forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          child.style.display = 'none' // Hide all element nodes
        }
      })
    
      // Check if the element is already appended, if not, append it
      if (!document.body.contains(elements[randomIndex])) {
        document.body.append(elements[randomIndex])
      }
    
      // Ensure the randomly selected element is visible
      elements[randomIndex].style.display = 'block'
    
    }, 1000)
    
 })()
 
