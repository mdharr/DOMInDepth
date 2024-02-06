document.body.style.backgroundColor = '#282828'
document.body.style.color = '#fff'

const div = document.createElement('div')
div.setAttribute('id', 'tubular')
document.body.querySelector('#original').appendChild(div)

const p = document.createElement('p')
p.textContent = "Hello"
p.setAttribute('id', 'cool')
// document.body.querySelector('#original').before(p)
// document.body.querySelector('#original').prepend(p)
// document.body.querySelector('#original').append(p)
document.body.querySelector('#original').after(p)

const text = document.createTextNode('hello from a text node!')
p.before(text)

const comment = document.createComment('hello from a comment node')
p.after(comment)