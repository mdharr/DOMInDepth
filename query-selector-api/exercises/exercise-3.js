/*
    1. Go to wallhaven.cc/latest in your Browser
       and open up the dev tools
       
    2. How would you get an Array of ALL of the
       "href" attribute values for all of the top
       navigation links (including the 'more'
       submenu)

    HINT*  NodeList is not an Array, but you can
           turn it in to one
    HINT2* You can querySelector on ANY ELEMENT
           This means you can keep narrowing your
           queries:
           document.
            querySelector('...').
            querySelector('...').
            querySelectorAll('...')
*/

// can just shorten the query selector chain down to `.preview`
const navLinks = document.querySelectorAll(".base #main #thumbs .thumb-listing-page ul li .thumb .preview")
console.log(navLinks)

const hrefs = [...navLinks].map(link => link.getAttribute('href'))
console.log(hrefs)