document.body.style.backgroundColor = '#282828'
document.body.style.color = '#fff'
/*
    1. Create a new HTML file that has the following
       Elements in it:
       - <head> with a <title> with some text in it
       - <body> with:
            - <h1> tag with some text
            - <input> tag (defaults to text input)

    2. Open up your file in your Browser and open the
       dev tools alongside it as well.

    3. Using the dev tools console, how would you:
       - Change the <input> to a checkbox?
       - Check/Uncheck the checkbox? (2 different ways)
    
    4. Verify the changes in the DOM/Elements tab as well
       as visually in the UI
*/
document.querySelector('input').setAttribute('type', 'checkbox')
document.querySelector('input').toggleAttribute('checked')
// document.querySelector('input').removeAttribute('checked')
