document.body.style.backgroundColor = 'rgb(40 40 40)'
document.body.style.color = '#fff'
/*
    1. Create an HTML document that has the following
       Elements:
       - <head> tag with a <title> in it with some text
       - <body> tag with:
        - <h1> tag with some text in it

    2. On MDN or Google look up how the "outerHTML" method
       works on an Element in the DOM

    3. Open the file in your Browser and open the dev
       tools alongside it and inside the console:
       - Replace the <h1> tag with an <h2> tag but
         preserve original text inside
*/
const originalText = document.body.querySelector('h1').textContent
document.body.querySelector('h1').outerHTML = `<h2>${originalText}</h2>`