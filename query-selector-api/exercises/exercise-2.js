/*
    1. Go to wallhaven.cc/latest in your Browser
       and open up the dev tools

    2. How would you get an Array of ALL of the
       "src" attribute values for the wallpaper
       images on the page?

    HINT* NodeList is not an Array, but you can
          turn it in to one
*/

const imageElementNodes = document.querySelectorAll("img")
const imageSrcValues = [...imageElementNodes].map(image => image.getAttribute("src") || image.getAttribute("data-src"))
console.log(imageSrcValues)

