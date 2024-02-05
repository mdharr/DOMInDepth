document.body.style.backgroundColor = '#282828'
document.body.style.color = '#fff'

const alphabetIcons = {
    a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H",
    i: "I", j: "J", k: "K", l: "L", m: "M", n: "N", o: "O", p: "P",
    q: "Q", r: "R", s: "S", t: "T", u: "U", v: "V", w: "W", x: "X",
    y: "Y", z: "Z"
}

function loadInitialLetters(name) {
    let result = ''
    for (let i = 0; i < name.length; i++) {
        result += 'A'
    }
    return result
}

function revealName(name) {
    let h1Element = document.querySelector('h1')
    h1Element.innerText = loadInitialLetters(name.toLowerCase())
    let nameIndex = 0
    
    function cycleLetter(letterIndex) {
        const alphabet = Object.keys(alphabetIcons)
        let iconIndex = 0
        
        const cycleInterval = setInterval(() => {
            if (iconIndex < alphabet.length) {
                const currentLetter = alphabet[iconIndex]
                h1Element.innerText = h1Element.innerText.substring(0, letterIndex) 
                                      + alphabetIcons[currentLetter] 
                                      + h1Element.innerText.substring(letterIndex + 1)
                
                if (currentLetter === name[letterIndex].toLowerCase()) {
                    clearInterval(cycleInterval)
                    nameIndex++
                    if (nameIndex < name.length) {
                        cycleLetter(nameIndex)
                    }
                }
            }
            iconIndex++
        }, 1)
    }
    
    if (name.length > 0) cycleLetter(0)
}

// revealName('Supercalifragilisticexpialidocious')
