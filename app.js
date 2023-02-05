// variables
const quote = document.querySelector(".quotes")
const author = document.querySelector(".author")
const btn = document.querySelector(".btn")
// quote list as an object
const quotes = [
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
      },
      {
        quote: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
      },
      {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
      },
      {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
      }
]

// add eventlistener to the btn

btn.addEventListener("click",generateQuote)

function generateQuote(){
    const randomIdx = Math.floor(Math.random()*quotes.length)
    const selectedQuote = quotes[randomIdx]
    author.textContent = selectedQuote.author
    quote.textContent = selectedQuote.quote
}

generateQuote()