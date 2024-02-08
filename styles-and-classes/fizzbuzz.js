(function () {
    function fizzbuzz(n) {
        let value
        let index
        let result = []
    
        for(index = 1; index <= n; index++) {
            value = ''
            if(index % 3 === 0) {
                value += 'Fizz'
            }
            if(index % 5 === 0) {
                value += 'Buzz'
            }
            value === '' ? result.push([index, index]) : result.push([index, value])
        }
        return result
    }
    
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
            if (key === 'textContent') {
                element.textContent = value
            } else {
                element.setAttribute(key, value)
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

    const fizzbuzzArr = fizzbuzz(50)
    const divElements = []
    let innerDiv;
    for(let i = 0; i < fizzbuzzArr.length; i++) {
        const [key, value] = fizzbuzzArr[i]
        const p1 = createElement('p', { textContent: key }, { border: '1px solid red', flex: '1', textAlign: 'center', margin: '0', padding: '5px', backgroundColor: '#282828', color: '#fff' })
        const p2 = createElement('p', { textContent: value }, { border: '1px solid red', flex: '1', textAlign: 'center', margin: '0', padding: '5px' })
        innerDiv = createElement('div', {}, { display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '150px' }, p1, p2)
        divElements.push(innerDiv)
    }
    const outerDiv = createElement('div', {}, { display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center' }, ...divElements)
    document.body.append(outerDiv)
})()