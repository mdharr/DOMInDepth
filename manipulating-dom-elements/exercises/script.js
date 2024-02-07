document.body.style.backgroundColor = '#282828';
document.body.style.color = '#fff';

(function() {
    function createElement(tag, properties, ...children) {
        const element = document.createElement(tag)
        Object.entries(properties).forEach(([key, value]) => {
            if(key === 'textContent') {
                element.textContent = value
            } else {
                element.setAttribute(key, value)
            }
        })
        children.forEach(child => {
            if(typeof child === 'string') {
                element.appendChild(document.createTextNode(child))
            } else {
                element.appendChild(child)
            }
        })
        return element
    }

    const p = createElement('p', { textContent: 'Hello' })
    const label = createElement('label', { textContent: "I'm a label." })
    const input = createElement('input', { type: 'text', value: "I'm an input." })
    const div = createElement('div', {}, label, input)
    const li1 = createElement('li', { textContent: "I'm list item 1."})
    const li2 = createElement('li', { textContent: "I'm list item 2."})
    const li3 = createElement('li', { textContent: "I'm list item 3."})
    const ul = createElement('ul', {}, li1, li2, li3)
    const nav = createElement('nav', {}, ul)

    const elements = [p, div, nav]

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * elements.length)

        Array.from(document.body.childNodes).forEach(child => {
            if(child.nodeType === Node.ELEMENT_NODE) {
                child.style.display = 'none'
            }
        })

        if(!document.body.contains(elements[randomIndex])) {
            document.body.append(elements[randomIndex])
        }

        elements[randomIndex].style.display = 'block'

    }, 1000)

})()