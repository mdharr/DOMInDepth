// const result = document.body.querySelector("#blog")
// console.log(result)

const cat = document.body.querySelector(".cat")
console.log(cat)
const p = cat.querySelector("p")
console.log(p)

const selectedAttr = document.body.querySelector("[mobile]")
console.log(selectedAttr)

const headers = document.body.querySelectorAll("h1")
console.log(headers)
// for(let i = 0; i < headers.length; i++) {
//     const header = headers[i]
//     header.style.fontSize = 30
//     header.style.color = 'red'
// }

headers.forEach(header => {
    header.style.fontSize = 30
    header.style.color = 'blue'
})
