// async function fetchData() {
//     const response = await fetch('https://gist.githubusercontent.com/Polydynamical/92270bf339b1a31d0498defb0573fc7c/raw/b4f9dd92ece23526eca648d2f1aaf87a95eafb24/gistfile1.txt')
//     const html = await response.text()
//     console.log(html)
//     return html
// }

// fetchData()

// async function fetchDescription() {
//     const response = await fetch('https://mangadex.org/title/801513ba-a712-498c-8f57-cae55b38cc92/berserk')
//     const html = await response.text()
//     const description = await html.querySelector('[property="og:description"]').innerText
//     console.log(description)
// }

// fetchDescription()