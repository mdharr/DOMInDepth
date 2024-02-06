document.body.style.backgroundColor = '#282828'
document.body.style.color = '#fff'
/*
    1. Create an HTML file with the a <head>
       tag containing a <title> with some text
       inside, as well as an empty <body> tag.

    2. Open the file in your Browser and open
       the dev tools alongside it as well

    3. In the dev tools, create and add an <h1>
       tag with the text "My Blog" in blue text
       to the body of the page.
*/

const h1 = document.createElement('h1')
h1.style.setProperty('color', 'blue')
h1.textContent = 'My Blog'
document.body.append(h1)