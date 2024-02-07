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

// IIFE (Immediately Invoked Function Expression)
(function() {
   function createElement(tag, props, ...children) {
      const element = document.createElement(tag)
      Object.entries(props).forEach(([key, value]) => {
         if(key === 'textContent') {
            element.textContent = value
         } else {
            element.setAttribute(key, value)
         }
      })

      children.forEach(child => {
         if(typeof child === 'string') {
            element.append(document.createTextNode(child))
         } else {
            element.append(child)
         }
      })
      return element
   }

   const p = createElement('p', { textContent: 'P Text' })
   const label = createElement('label', { textContent: 'Input Label' })
   const input = createElement('input', { type: 'text', value: 'Input text here...' })
   const div = createElement('div', {}, label, input)
   const li1 = createElement('li', { textContent: 'List item' })
   const li2 = createElement('li', { textContent: 'List item' })
   const li3 = createElement('li', { textContent: 'List item' })
   const ul = createElement('ul', {}, li1, li2, li3)
   const nav = createElement('nav', {}, ul)

   const elements = [p, div, nav]

   setInterval(() => {
      const randomIndex = Math.floor(Math.random() * elements.length)

      Array.from(document.body.childNodes).forEach(child => {
         if(child.nodeType === Node.ELEMENT_NODE) {
            child.style.display = 'none'
         }
      })
      if(!document.body.contains(elements[randomIndex])) {
         document.body.append(elements[randomIndex])
      }
      elements[randomIndex].style.display = 'block'
   }, 1000)
})()

