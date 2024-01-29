const alertUser = () => {
    const text = 'Danger Will Robinson!'
    alert(text)
}
let count = 0
const createDivWithH1 = () => {
    const divElement = document.createElement('div')
    const h1Element = document.createElement('h1')
    h1Element.innerText = count
    divElement.appendChild(h1Element)
    document.body.appendChild(divElement)
    count += 1
}

const removeItems = () => {
    const parentElements = document.getElementsByTagName('div')
    Array.from(parentElements).forEach(parentElement => {
        Array.from(parentElement.children).forEach(child => {
            if(!isNaN(child.innerText)) {
                parentElement.remove()
            }
        })
    })
    count = 0
}

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()
    return json
}

async function fetchComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    const comments = await response.json()
    console.log(comments)
    return comments
}

async function createDiv() {
    const commentsJson = await fetchComments()
    const comments = Object.values(commentsJson).map(comment => [comment.email, comment.body])
    comments.forEach(comment => {
        const divElement = document.createElement('div')
        const emailElement = document.createElement('p')
        const commentElement = document.createElement('p')
        emailElement.innerText = comment[0]
        emailElement.style.marginBottom = 0
        emailElement.style.borderBottom = 'none'
        commentElement.innerText = comment[1]
        commentElement.style.marginTop = 0
        divElement.appendChild(emailElement)
        divElement.appendChild(commentElement)
        divElement.style.display = 'flex'
        divElement.style.flexDirection = 'column'
        document.body.appendChild(divElement)
    })
}

function clearItems() {
    const divElements = document.getElementsByTagName('div')
    Array.from(divElements).forEach(element => {
        element.remove()
    })
}

function hideComments() {
    const divElements = document.getElementsByTagName('div')
    Array.from(divElements).forEach(element => {
        element.style.display = 'none'
    })
}

function showComments() {
    const divElements = document.getElementsByTagName('div')
    Array.from(divElements).forEach(element => {
        element.style.display = 'flex'
    })
}

// async function createDiv() {
//     const divElement = document.createElement('div')
//     const h1Element = document.createElement('h1')
//     const data = await fetchData()
//     h1Element.innerText = data
//     divElement.appendChild(h1Element)
//     document.body.appendChild(divElement)
// }

// function clearItems() {
//     const divElements = document.getElementsByTagName('div')
//     Array.from(divElements).forEach(element => {
//         Array.from(element.children).forEach(childElement => {
//             if(childElement.innerText == 'delectus aut autem') {
//                 element.remove()
//             }
//         })
//     })
// }
