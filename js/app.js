// Selectors
const text = document.querySelector(".text");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

// Functions
function getQuote() {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            const random = Math.round(Math.random() * 1643);
            text.innerText = data[random].text;
            author.innerText = data[random].author;
        })

    setTimeout(() => {
        btn.classList.add("active");
    }, 2500)
}

function newQuote(e) {
    if(!e.target.matches("button.active")) return;
    getQuote();
    btn.classList.remove("active");
}

// Event listeners
btn.addEventListener("click", newQuote);
window.addEventListener("load", getQuote);