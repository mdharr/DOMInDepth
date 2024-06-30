/*
    1. Create an HTML file with a <head> with a
       <title> in it with some text, as well as
       a <body> tag
       
    2. In the body, add a <button> Element with
       the text "Click me!" that will log out
       "Hello!" when clicked

    3. Open the file in your Browser and open up
       the dev tools to verify the log when you
       click the button
*/

// const logHello = () => {
//     console.log('hello');
// }

// const warmupButton = document.createElement('button');
// warmupButton.setAttribute('id', 'warmupBtn');
// warmupButton.textContent = 'Click Me!';
// warmupButton.addEventListener('click', logHello);
// document.body.appendChild(warmupButton);



// const person = {
//     name: "Michael",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const greet = person.greet.bind(person);
// greet();



// const logger = {
//     prefix: "Log:",
//     logMessage: function(message) {
//         console.log(`${this.prefix} ${message}`);
//     }
// }

// const button = document.createElement('button');
// button.textContent = 'Log Message';
// button.addEventListener('click', logger.logMessage.bind(logger, 'Button Clicked'));
// document.body.appendChild(button);

// const counter = {
//     count: 0,
//     increment: function() {
//         this.count++;
//         document.querySelector('#count').textContent = this.count;
//     },
//     resetCount: function() {
//         this.count = 0;
//         document.querySelector('#count').textContent = this.count;
//     }
// }

// const wrapper = document.createElement('div');
// wrapper.style.display = 'flex';
// wrapper.style.flexDirection = 'column';
// wrapper.style.alignItems = 'center';
// wrapper.style.justifyContent = 'center';
// wrapper.style.height = '88vh';

// const span = document.createElement('span');
// span.setAttribute('id', 'count');
// span.textContent = 0;
// span.style.fontSize = '150px';
// span.style.color = 'red';

// const btnWrapper = document.createElement('div');
// btnWrapper.style.display = 'flex';
// btnWrapper.style.flexDirection = 'row';
// btnWrapper.style.justifyContent = 'space-between';
// btnWrapper.style.gap = '10px';

// const incrementBtn = document.createElement('button');
// incrementBtn.textContent = 'Increment Count';
// incrementBtn.addEventListener('click', counter.increment.bind(counter));

// const resetBtn = document.createElement('button');
// resetBtn.textContent = 'Reset Count';
// resetBtn.addEventListener('click', counter.resetCount.bind(counter));

// wrapper.appendChild(span);
// wrapper.appendChild(btnWrapper);
// btnWrapper.appendChild(incrementBtn);
// btnWrapper.appendChild(resetBtn);
// document.body.appendChild(wrapper);





/*
    1. Create an HTML file with a <head> with a
       <title> in it with some text, as well as
       a <body> tag
       
    2. In the body, add a <button> Element with
       the text "Show Secret" that when the mouse is
       moved over, will show/hide a paragraph element
       with the text "A magical portal has opened!"
       inside it

    3. Open the file in your Browser and open up
       the dev tools to verify the toggling
       behaviour when you click the button
*/






/*
    1. Create an HTML file with a <head> with a
       <title> in it with some text, as well as
       a <body> tag
       
    2. In the body, add a <button> Element with
       the text "Play!" that when clicked, will 
       generate a random number between 0-10. If
       the number is greater than 7, it will display
       a paragraph with the text "You're lucky!",
       otherwise it will display a paragraph with the
       text "Better luck next time!".

    3. Open the file in your Browser and open up
       the dev tools to verify the randomizing
       behaviour when you click the button
*/






/*
    1. Create an HTML file with a <head> with a
       <title> in it with some text, as well as
       a <body> tag
       
    2. In the body, add an <input> Element. When 
       you type in this Element, the same text
       that you type, should be displayed below
       the input in a Paragraph Element, but in 
       blue text.

    3. Open the file in your Browser and open up
       the dev tools to verify the randomizing
       behaviour when you click the button

    HINT* Use MDN/Google to find out what Event
          might be best for this
*/







/*
    There is an argument that gets passed to our
    even handler function by default.

    1. What is it and what types of properties 
       does it have?

    2. Does it change depending on the event type?

    HINT* Look this up on MDN/Google
*/








/*
    What is the "this" Object inside an event
    handler function?
*/