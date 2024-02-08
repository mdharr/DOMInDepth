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

(function () {
   function formatString(input) {
      if(input.length === 0) {
         return ''
      }
      const firstChar = input[0]
      const isFirstCharUpperCase = firstChar === firstChar.toUpperCase()

      const formatted = isFirstCharUpperCase ? `-${firstChar.toLowerCase()}` : firstChar
      const remaining = formatString(input.slice(1))
      return formatted + remaining
   }

   function createElement(tag, props, styles, ...children) {
      const element = document.createElement(tag)
      Object.entries(props).forEach(([key, value]) => {
         if(key === 'textContent') {
            element.textContent = value
         } else {
            element.setAttribute(key, value)
         }
      })
      Object.entries(styles).forEach(([key, value]) => {
         element.style.setProperty(formatString(key), value)
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

   const p = createElement('p', { textContent: 'Paragraph Text' }, { color: 'red', fontFamily: '"Lucida Console", "Courier New", monospace', fontSize: '32px', margin: '0' })
   const label = createElement('label', { textContent: 'Label Text' }, { color: 'yellow'})
   const input = createElement('input', { type: 'text', value: 'Input Placeholder Text' }, {})
   const div = createElement('div', {}, { display: 'flex', flexDirection: 'column'}, label, input)
   const li1 = createElement('li', { textContent: 'List Item Text' }, {})
   const li2 = createElement('li', { textContent: 'List Item Text' }, {})
   const li3 = createElement('li', { textContent: 'List Item Text' }, {})
   const ul = createElement('ul', {}, { listStyle: 'none', margin: '0', padding: '0' }, li1, li2, li3)
   const nav = createElement('nav', {}, {}, ul)

   const elements = [p, div, nav]

   setInterval(() => {
      const randomIndex = Math.floor(Math.random() * elements.length)
      const childNodes = [...document.body.childNodes]
      childNodes.forEach(child => {
         if(child.nodeType === Node.ELEMENT_NODE) {
            child.style.display = 'none'
         }
      })

      if(!document.body.contains(elements[randomIndex])) {
         document.body.append(elements[randomIndex])
      }

      elements[randomIndex].style.display = 'flex'
   }, 1000)
})()