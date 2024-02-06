document.body.style.backgroundColor = "#282828"
document.body.style.color = "#fff"
/*
    1. Create an HTML file with the a <head>
       tag containing a <title> with some text
       inside, as well as an empty <body> tag.

    2. Inside the <body> tag add a <script> tag
       and add code inside it to do the following:
    
    3. Create a function called "createParagraph"
       that has 2 parameters: text and attributes
       - createParagraph(text, attributes)

    4. This function will return a ParagraphHTMLElement
       with the text set as the textContent. The
       "attributes" passed in can be assumed to be an
       Object where each key is the attribute key, and the
       value is the attribute value.
       Eg:
       - createParagraph("Hello", {id: 'one', class: 'big'})
       would give us back this Element:
       - <p id="one" class="big">Hello</p>

    5. Create at least 3 different paragraph elements using
       this function and insert them in to the <body>

    6. Open up the page in your Browser and open up the
       dev tools to confirm visually and in the DOM that
       the elements are changings as expected
*/

function createParagraph(text, attributes) {
   const p = document.createElement('p')
   p.textContent = text
   Object.keys(attributes).forEach(attr => {
      p.setAttribute(attr, attributes[attr])
   })
   document.body.append(p)
}

function createCloneParagraph(text, attributes) {
   const p = document.createElement('p')
   p.textContent = text
   Object.keys(attributes).forEach(attr => {
      p.setAttribute(attr, attributes[attr])
   })
   return p
}

createParagraph('Good morning', {id: 'early', class: 'breakfast'})
createParagraph('Good afternoon', {id: 'midday', class: 'lunch'})
createParagraph('Good evening', {id: 'late', class: 'dinner'})

// const clone = document.querySelector('#early').cloneNode(true)
// clone.id = 'early-copy'
// document.body.append(clone)
// document.body.querySelector('#early').remove()
const replacement = createCloneParagraph('Insomnia', {id: 'midnight', class: 'midnight snack'})
document.querySelector('#late').replaceWith(replacement)