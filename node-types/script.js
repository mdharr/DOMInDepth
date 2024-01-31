document.getElementById("copyButton").addEventListener("click", function() {
    const text = document.getElementById("textToCopy").value;
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Text copied to clipboard");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
});

// document.getElementById("copyButton").addEventListener("click", function() {
//     // const text = document.getElementById("textToCopy").value;
//     const text = document.getElementById('farm').children[0].innerText
//     navigator.clipboard.writeText(text)
//         .then(() => {
//             console.log("Text copied to clipboard");
//         })
//         .catch(err => {
//             console.error("Failed to copy text: ", err);
//         });
// });

const listItems = document.getElementsByTagName('li')
for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        const style = window.getComputedStyle(this)
        const boxShadow = style.getPropertyValue("box-shadow")
        const text = `box-shadow: ${boxShadow}`
        const innerText = this.children[0].innerText
        const copiedText = "Copied!"
        this.children[0].innerText = copiedText
        navigator.clipboard.writeText(text)
            .then(() => {
                setTimeout(() => {
                    this.children[0].innerText = innerText
                }, 1000)
                console.log("Text copied")
                
            })
            .catch(err => {
                console.error("Failed to copy text: ", err)
            })
    })
}