document.body.style.backgroundColor = "#282828";
document.body.style.color = "#fff";

(function () {
    function formatString(input) {
        if(input.length === 0) {
            return ''
        }
        const firstChar = input[0]
        const isUpperCase = firstChar === firstChar.toUpperCase()
        
        const formatted = isUpperCase ? `-${firstChar.toLowerCase()}` : firstChar
        const remaining = formatString(input.slice(1))
        return formatted + remaining
    }
    function createElement(tag, props, styles, ...children) {
        const element = document.createElement(tag)
        Object.entries(props).forEach(([key, value]) => {
            if(key === 'textContent') {
                element.textContent = value
            }
        })
        Object.entries(styles).forEach(([key, value]) => {
            element.style.setProperty(formatString(key), value)
        })
        children.forEach(child => {
            element.append(child)
        })
        return element
    }
    function fibonacci(n) {
        let fib = [0, 1]
        for(let i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fib[i-2]
        }
        return fib
    }
    const fibSequence = fibonacci(5)

    const pElements = []
    for(let i = 0; i < fibSequence.length; i++) {
        const p = createElement('p', { textContent: `${fibSequence[i]}` }, { padding: '10px', border: '1px dashed red' })
        pElements.push(p)
    }
    // const div = createElement('div', {}, { display: 'none', marginLeft: '0px', backgroundImage: 'url("https://toppng.com/uploads/preview/toy-car-top-view-11549453787ipbwj89bml.png")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '150px', height: '100px' }, ...pElements)
    const div = createElement('div', {}, { display: 'none' }, ...pElements)
    document.body.append(div)

    function extractNumber(input) {
        // console.log(input)
        const number = input.slice(0, input.length-2)
        // console.log(number)
        return parseInt(number)
    }
    const intervalId = setInterval(() => {
        // if(extractNumber(div.style.marginLeft) < 1000) {
            div.style.display = 'flex'
            // div.style.marginLeft = (extractNumber(div.style.marginLeft) + 10) + 'px'
            const randomIndex = Math.floor(Math.random() * pElements.length)
            Array.from(document.body.querySelector('div').childNodes).forEach(child => {
                child.style.color = '#282828'
            })
            pElements[randomIndex].style.color = '#fff'
        // } else {
        //     clearInterval(intervalId)
        // }
    }, 1000)
})()