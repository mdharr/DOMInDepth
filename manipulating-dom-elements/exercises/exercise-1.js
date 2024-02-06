document.body.style.backgroundColor = "#282828"
document.body.style.color = "#fff"
/*
    1. Create an HTML file with the a <head>
       tag containing a <title> with some text
       inside, as well as an empty <body> tag.

    2. Inside the <body> tag add a <script> tag
       and add code inside it to do the following:
    
    3. Add an element that looks like this to the DOM:
       <p id="intro">
        Hello there, nice <strong>to meet</strong> you!
       </p>

    4. Open the file in your Browser and verify visually
       as well as in the Dev Tools the it looks correct
       in the DOM

    * Do NOT use innerHTML - use the DOM Node creation
      methods to do this
    ** HINT - Use both Text and Element Nodes
*/
const p = document.createElement('p')
p.setAttribute('id', 'intro')
const comment1 = document.createTextNode('Hello there, nice ')
const bold = document.createElement('strong')
bold.textContent = 'to meet '
const comment2 = document.createTextNode('you!')
p.append(comment1)
p.append(bold)
p.append(comment2)
document.body.append(p)
