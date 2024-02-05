document.body.style.backgroundColor = '#282828'
document.body.style.color = 'rgb(0, 183, 77)'
/*
    1. Create a new HTML file that has the following
       Elements in it:
       - <head> with a <title> with some text in it
       - <body> with:
            - <h1> tag with some text
            - <script> tag for some code (last element
                in the document)

    2. In the <script> tag write some code that will
       change the colour of the <h1> tag's text to
       blue, then to red switching every 1 second. Use a
       "setInterval" to do this.

    3. Open up your file in your Browser and open the
       dev tools alongside it as well.
    
    4. Verify the changes in the DOM/Elements tab as well
       as visually in the UI
*/

const header = document.createElement('h1')
header.innerText = 'Header Text'
document.body.appendChild(header)

const resetButton = document.createElement('button')
resetButton.innerText = 'Reset'
resetButton.addEventListener('click', async () => {
   await swapColors()
   resetColor()
})

document.body.appendChild(resetButton)

const swapColors = () => {
   return new Promise((resolve) => {
      let counter = 0
      const intervalId = setInterval(() => {
         const color = document.querySelector('h1').style.color
         if(counter < 50) {
            setColor(color)
         } else {
            clearInterval(intervalId)
            resolve()
         }
         counter++
      }, 50)
   })
}

const setColor = (color) => {
   const green = 'rgb(0, 183, 77)'
   const yellow = 'rgb(247, 227, 172)'
   const red = 'rgb(193, 52, 56)'
   color === green ? document.querySelector('h1').style.color = yellow
   : color === yellow ? document.querySelector('h1').style.color = red
   : document.querySelector('h1').style.color = green
}

const resetColor = () => {
   document.querySelector('h1').style.color = 'rgb(0, 183, 77)'
}
